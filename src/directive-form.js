const Directive = {

  bind(el, binding) {
    let options = {
      // Callback function
      callback: () => {}
    }

    options = Object.assign(options, binding.value)

    // Func for send data
    el.$onSubmit = (e) => {
      e.preventDefault()
      let action = el.action
      let data = ""
      let existErrorValidation = false
      let inputs = Array.from(e.target)

      // Get all inputs in form
      inputs.forEach((input) => {
        if (input.$validation !== undefined) {
          // check validate
          if (!input.$validation()) {
            input.$validationError()
            existErrorValidation = true
          } else {
            // add name and value to object data
            data += input.name + '=' + input.value + '&'
          }
        }
      })

      // Send post data
      if (!existErrorValidation) {
        let httpRequest = new XMLHttpRequest()
        httpRequest.open('POST', action)
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        httpRequest.onload = function () {
          // func(form, httpRequest.responseText, httpRequest.status);
          options.callback(httpRequest)
          console.log('send')
        }
        httpRequest.send(data)
      }
    }

    // Attach event to form
    el.addEventListener('submit', el.$onSubmit)
  },

  unbind(el, binding) {
    el.removeEventListener('submit', el.$onSubmit)
    delete el.$onSubmit
  }
}

export default Directive
const Directive = {

  bind(el, binding) {
    let options = {
      // Callback function if data success send
      success: () => {},
      // Callback function if data fail validation
      fail: () => {}
    }

    options = Object.assign(options, binding.value)

    // Func for send data
    el.$onSubmit = (e) => {
      e.preventDefault()
      const action = el.action
      const inputs = Array.from(e.target)
      let data = ''
      let dataObj = {}
      let existErrorValidation = false

      // Get all inputs in form
      inputs.forEach(input => {
        if (input.$validation !== undefined) {
          // check validate
          if (!input.$validation()) {
            input.$validationError()
            existErrorValidation = true
          } else {
            // add name and value to object data
            input.$replace()
            data += input.name + '=' + input.value + '&'
            dataObj[input.name] = input.value
          }
        }
      })

      // Send request
      if (!existErrorValidation) {
        let httpRequest = new XMLHttpRequest()
        httpRequest.open('POST', action)
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        httpRequest.onload = () => {
          options.success(httpRequest, dataObj)
        }
        httpRequest.onerror = () => {
          options.fail(httpRequest, dataObj)
        }
        httpRequest.send(data)

        // Cleaning input
        inputs.forEach(input => {
          if (input.$clean) {
            input.value = ''
          }
        })
      } else {
        // Error send request
        options.fail(null, dataObj)
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
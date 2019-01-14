const Directive = {

  bind(el, binding) {
    let options = {
      // Callback function if data success send
      success: () => {},
      // Callback function if data fail validation
      fail: () => {},
      // Cross
      credentials: false,
      // User auth. Data - string in format "username:password"
      auth: { type: 'Basic', data: null }
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
        const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        const httpRequest = new XHR()
        httpRequest.open('POST', action)
        httpRequest.withCredentials = options.credentials
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        // For user auth by typer
        if (options.auth.data !== null) {
          const token = `${options.auth.type} ${options.auth.data}`

          httpRequest.setRequestHeader('Authorization', token);
        }

        // Success
        httpRequest.onload = () => {
          options.success(httpRequest, dataObj)
        }

        // Error
        httpRequest.onerror = () => {
          options.fail(httpRequest, dataObj)
        }

        // Send request
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
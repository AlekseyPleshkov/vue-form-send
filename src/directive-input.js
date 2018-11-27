const Directive = {

  bind (el, binding) {
    let options = {
      // length or checked
      type: 'length',
      // timeout hide error
      timeoutError: 1200,
      // realtime validaton
      changeValidation: false,
      // replacing char
      replace: [],
      // cleaning input after success send
      clean: true,
      // Count char in value
      length: 0
    }

    options = Object.assign(options, binding.value)

    // Add tag for cleaning input after full validation
    el.$clean = options.clean

    // Validate if change value input
    if (options.changeValidation) {
      el.addEventListener('input', () => {
        const validationResult = el.$validation()

        if (!validationResult) {
          el.$validationError()
        }
      })
    }

    // Primitive validate
    el.$validation = () => {
      let value = el.value
      
      // Clear old error
      el.classList.remove('error')

      // Replacing all char in value
      for (const char of options.replace) {
        value = value.replace(new RegExp(char, 'g'), '')
      }

      // Validate for length
      if (options.type === "length" && value.length < options.length) {
        return false
      }
      // Validate for checked radio or checkbox
      if (options.type === "checked" && !el.checked) {
        return false
      }

      return true
    }

    // Replace symbols
    el.$replace = () => {
      let value = el.value
      // Replacing all char in value
      options.replace.forEach(char => {
        value = value.replace(new RegExp(char, 'g'), '')
      })
      el.value = value
      return options.replace.length > 0
    }

    // Indicator error valid
    el.$validationError = () => {
      el.classList.add('error')

      if (options.timeoutError > 0) {
        setTimeout(() => {
          el.classList.remove('error')
        }, options.timeoutError)
      }
    }
  },

  unbind (el, binding) {
    delete el.$validation
    delete el.$validationError
    el.removeEventListener('input')
  }
}

export default Directive
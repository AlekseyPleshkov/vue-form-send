const Directive = {

  bind (el, binding) {
    let options = {
      // length or checked
      type: 'length',
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

    // Primitive validate
    el.$validation = () => {
      let value = el.value

      // Replacing all char in value
      for (let char of options.replace) {
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

    // Indicator error valid
    el.$validationError = () => {
      el.classList.add('error')

      setTimeout(() => {
        el.classList.remove('error')
      }, 1500)
    }
  },

  unbind (el, binding) {
    delete el.$validation
  }
}

export default Directive
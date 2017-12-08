const Directive = {

  bind (el, binding) {
    let options = {
      // length or checked
      type: 'length',
      // Count char in value
      length: 0
    }

    options = Object.assign(options, binding.value)

    // Primitive validate
    el.$validation = () => {
      // Validate for length
      if (options.type === "length" && el.value.length < options.length) {
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
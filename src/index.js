import DirectiveForm from './directive-form.js'
import DirectiveInput from './directive-input.js'

var VueFormSend = {
  install: (Vue, options) => {
    // Form directive
    Vue.directive('form-send', DirectiveForm)
    // Inputs directive
    Vue.directive('form-input', DirectiveInput)
  }
}

export default VueFormSend

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormSend)
}

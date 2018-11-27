new Vue({
  el: '#app',
  data: () => ({

  }),

  methods: {
    successResult () {
      console.log('success')
    },
    failResult () {
      console.log('fail')
    }
  },

  mounted () {
    console.info('Vue mounted')
  }
})
new Vue({
  el: '#app',
  data: () => ({
    username: null,
    password: null
  }),

  methods: {
    successResult () {
      console.log('success')
    },
    failResult () {
      console.log('fail')
    },
    authData () {
      const token = { type: 'Basic', data: `${this.username}:${this.password}`}

      return token
    }
  },

  mounted () {
    console.info('Vue mounted')
  }
})
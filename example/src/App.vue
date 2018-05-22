<template lang='pug'>
div#app
  h2 Form Send
  form(v-form-send='{callback: test}' action='send.php' method='post')
    input(v-form-input='{length: 5, replace: ["_", "/"]}' type='tel' name='phone' placeholder='Phone number')
    input(v-form-input='{length: 5, clean: false}' type='tel' name='phone2' placeholder='Phone number')
    input(v-form-input='{type: "checked"}' type='checkbox' name='test')
    button(type='submit') Send
</template>

<script>
export default {
  name: 'app',
  methods: {
    test (response, data) {
      console.log(response)
      console.log(data)
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.empty {
  height: 200vh;
}

.show__text {
  color: black;
  transition: color 1s ease;

  &.active {
    color: red;
  }
}
</style>

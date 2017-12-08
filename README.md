# Vue Form Send

A Vue.js directive for sending data from form and primitive validation inputs

## Installation

```js
npm i --save-dev vue-form-send
```

```js
import VueFormSend from 'vue-form-send'

Vue.use(VueFormSend)
```

## Usage

```html
<form v-form-send='' action='./send.php' method='post'>
  <input v-form-input='{length: 5}' name='phone' type='tel'/>
  <input v-form-input='{type: "checked"}' name='phone' type='tel'/>
  <button type='submit'>Send</button>
</form>
```

If in input exist error, then add class 'error'

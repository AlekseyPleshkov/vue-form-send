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
<form v-form-send='{callback: functionName}' action='./send.php' method='post'>
  <input v-form-input='{length: 5}' name='phone' type='tel'/>
  <input v-form-input='{length: 5, replace: ["-", "/"]}' name='phone' type='tel'/>
  <input v-form-input='{type: "checked"}' name='phone' type='tel'/>
  <button type='submit'>Send</button>
</form>
```

Function 'callback' calling after send data. Function return 'httpRequest'.

If in input exist error, then add class 'error'

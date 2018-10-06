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

#### SSR (Nuxt.js)

```js
import VueFormSend from 'vue-form-send/dist/ssr.index'

Vue.use(VueFormSend)
```

## Usage

```html
<form v-form-send='{success: successResult, fail: failResult}' class='form' action='./send.php' method='post'>
  <input v-form-input='{length: 5}' name='phone' type='text' placeholder='Length > 5'/>
  <input v-form-input='{length: 5, replace: ["-", "/"]}' name='phone' type='text' placeholder='Length > 5 and replace'/>
  <input v-form-input='{length: 5, clean: true}' name='phone' type='text' placeholder='Length > 5 and clear'/>
  <input v-form-input='{type: "checked"}' name='phone' type='checkbox'/> 
  <button>Send</button>
</form>
```

## Directive options

#### Form

| Option | Description |
| ------ | ------ |
| success | Call function after success send data |
| fail | Call function is fail validation or send data |

#### Element

| Option | Description |
| ------ | ------ |
| length | Check length value of element |
| replace | Replacing symbols from text value |
| clear | Clear value after success send data |
| type | Types of verification (length of checked). Default - length. |
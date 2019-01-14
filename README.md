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
  <input v-form-input='{length: 5, timeoutError: 0, changeValidation: true}' name='phone' type='text' placeholder='Length > 5 and timeoutErorr 0'/>
  <input v-form-input='{length: 5, changeValidation: true}' name='phone' type='text' placeholder='Length > 5 and changeValidation'/>
  <input v-form-input='{type: "checked"}' name='phone' type='checkbox'/> 
  <button>Send</button>
</form>
```

## Directive options

#### Form

| Option | Value type | Description |
| ------ | ------ | ------ |
| success | Function | Call function after success send data |
| fail | Function | Call function is fail validation or send data |
| credentials | Boolean | Use credentials
| auth | Function -> {type: String, data: String} | User auth. Return object with auth type and data string format username:password

#### Element

| Option | Value type | Description |
| ------ | ------ | ------ |
| length | Integer | Check length value of element |
| replace | Boolean | Replacing symbols from text value |
| clear | Boolean | Clear value after success send data |
| timeoutError | Integer | Timeout for remove error class |
| changeValidation | Boolean | Real-time validaton if change input value |
| type | String | Types of verification (length of checked). Default - length. |
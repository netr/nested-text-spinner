# nested-text-spinner

Spin's a set of nested variables into plain text. Example: {hello {bob|alice}} returns hello bob

## Installation

```bash
$ npm install nested-text-spinner
```

## How to use

```javascript
const spinner = require('nested-text-spinner');

let text = "{hello {bob|alice}}
let plain = spinner.spin(text);
console.log(plain);

//result: hello bob (or) hello alice
```

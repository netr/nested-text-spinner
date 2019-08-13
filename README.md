# nested-text-spinner

Spin's a set of nested strings into plain text. Example: `{hello {bob|alice}}` returns `hello bob` or `hello alice`

## Installation

```bash
$ npm install nested-text-spinner
```

## Test

```bash
$ npm test
```

## How to use

Require

```javascript
const spinner = require('nested-text-spinner');

let text = '{hello {bob|alice}}';
let plain = spinner.spin(text);
console.log(plain);

//result: hello bob (or) hello alice
```

Import

```javascript
import spin from 'nested-text-spinner';

let text = '{hello {bob|alice}}';
let plain = spin(text);
console.log(plain);

//result: hello bob (or) hello alice
```

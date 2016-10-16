# node-check

[![Build Status](https://travis-ci.org/fnando/node-check.svg?branch=master)](https://travis-ci.org/fnando/node-check)

Check if you're running the exact Node version you specified in package.json.

## Installation

    npm install node-check --save

## Usage

```js
// uses defaults (engine=node, manifestFile=package.json)
require("node-check")();

// specifies engine
require("node-check")("rhino");

// specifies engine and package.json
require("node-check")("node", "some/package.json");

// specifies engine, package.json and running version.
require("node-check")("node", "some/package.json", {node: "6.8.1"});
```

In practice, you add something like `require("node-check")()` to your main Node.js file. If version requirement is not satisfied then an exception will be thrown.

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

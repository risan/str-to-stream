# String to Stream

[![Build Status](https://flat.badgen.net/travis/risan/str-to-stream)](https://travis-ci.org/risan/str-to-stream)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/str-to-stream)](https://codeclimate.com/github/risan/str-to-stream)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/str-to-stream)](https://codeclimate.com/github/risan/str-to-stream)
[![Latest Stable Version](https://flat.badgen.net/npm/v/str-to-stream)](https://www.npmjs.com/package/str-to-stream)
[![Node Version](https://flat.badgen.net/npm/node/str-to-stream)](https://www.npmjs.com/package/str-to-stream)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/str-to-stream)](https://github.com/risan/str-to-stream/blob/master/LICENSE)

Convert string into a readable stream.

## Install

```bash
$ npm install str-to-stream

# Or if you use Yarn
$ yarn add str-to-stream
```

## Quick Start

```js
const strToStream = require("str-to-stream");

const stream = strToStream("hello world!");

stream.pipe(process.stdout);
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

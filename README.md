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

Pipe a string into a writable stream:

```js
const strToStream = require("str-to-stream");

const stream = strToStream("hello world!");

stream.pipe(process.stdout);
```

Listen to `data` event:

```js
const strToStream = require("str-to-stream");

const stream = strToStream("hello world!");

stream.on("data", chunk => console.log(`Data received: ${chunk.toString()}`));

stream.on("end", () => console.log("All data have been received."));
```

## Recipe

### Set the Data Bytes Limit for Each Chunk

By default, each data chunk is limited to 16,384 bytes. You can override this by passing the `highWaterMark` option:

```js
const strToStream = require("str-to-stream");

const stream = strToStream("hello world!", {
  highWaterMark: 6
});

const chunks = [];

stream.on("data", chunk => chunks.push(chunk.toString()));

stream.on("end", () => console.log(chunks)); // ["hello ", "world!"]
```

### Emit Data in One Shot

To emit all string data in one shot, set the `objectMode` option to `true`. The `highWaterMark` option value won't have any effect.

```js
const strToStream = require("str-to-stream");

const stream = strToStream("a very long long string...", {
  highWaterMark: 6, // Won't have any effect.
  objectMode: true
});

stream.on("data", chunk => {
  console.log(chunk.toString()); // a very long long string...
});
```

### Write to a File

```js
const fs = require("fs");
const strToStream = require("str-to-stream");

const file = fs.createWriteStream("./hello.txt");

const stream = strToStream("hello world!");

stream.pipe(file);
```

## API

```js
strToStream(data, [{ highWaterMark, objectMode }])
```

### Parameters

* **`data`** (*`String`*): The string to convert to a readable stream.
* **`highWaterMark`** (optional *`Number`*): The maximum number of bytes for each chunk, default to `16384` (16kb).
* **`objectMode`** (optional *`Boolean`*): When it sets to `true`, the string `data` will be emitted in one shot ignoring the `highWaterMark` option. Default to `false`.

### Returns

It returns [`Readable` Stream](https://nodejs.org/api/stream.html#stream_readable_streams) instance.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

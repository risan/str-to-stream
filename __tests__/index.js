/* global expect:false, test:false */
const { Readable } = require("stream");
const strToStream = require("../src");

test("it returns Readable stream instance", () => {
  const stream = strToStream("foo bar");

  expect(stream).toBeInstanceOf(Readable);
});

test("it emits data event with buffer chunk that contains the given string", done => {
  expect.assertions(2);

  const stream = strToStream("foo bar");

  stream.on("data", chunk => {
    expect(chunk).toBeInstanceOf(Buffer);
    expect(chunk.toString()).toBe("foo bar");
  });

  stream.on("end", () => done());
});

test("it can receive highWaterMark option to limit the number of bytes per push", done => {
  expect.assertions(1);

  const stream = strToStream("foo bar", { highWaterMark: 4 });

  const chunks = [];

  stream.on("data", chunk => {
    chunks.push(chunk.toString());
  });

  stream.on("end", () => {
    expect(chunks).toEqual(["foo ", "bar"]);
    done();
  });
});

test("it can receive objectMode option to push all string in one push", done => {
  expect.assertions(1);

  const stream = strToStream("foo bar", { highWaterMark: 4, objectMode: true });

  const chunks = [];

  stream.on("data", chunk => {
    chunks.push(chunk.toString());
  });

  stream.on("end", () => {
    expect(chunks).toEqual(["foo bar"]);
    done();
  });
});

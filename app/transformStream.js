const { Transform } = require("stream");
const cipher = require("./ciphers/cipher");

exports.transformStream = (config) => {
  return new Transform({
    transform(chunk, _encoding, callback) {
      this.push(cipher(chunk.toString("utf8"), config));
      callback();
    }
  })
}

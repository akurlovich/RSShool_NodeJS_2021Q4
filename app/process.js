const { pipeline } = require("stream");
const { inputStream } = require("./inputStream");
const { outputStream } = require("./outputStream");
const { transformStream } = require("./transformStream");

exports.processes = (config, input, output) => {

  const readyArrays = [];
  const arr = config.split('-');
  for (let i = 0; i < arr.length; i++) {
    readyArrays.push(transformStream(arr[i]))
  };

  pipeline(
    inputStream(input),
    ...readyArrays,
    outputStream(output),
    error => {
      if (error) {
        console.error("Somthing gone wrong", error);
        process.exit(9);
      }
    }
  );
}


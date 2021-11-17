const { processes } = require("./process");
const getConfig = require("./utils/getConfig.js");
const getInput = require("./utils/getInput.js");
const getOutput = require("./utils/getOutput.js");


//!_____________может принимать -c и -config добавить проверку______

processes(getConfig('-c'), getInput('-i'), getOutput('-o'));

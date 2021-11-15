const { processes } = require("./process");
const { getConfig, getInput, getOutput } = require("./utils/utils");

//!_____________может принимать -c и -config добавить проверку______

processes(getConfig('-c'), getInput('-i'), getOutput('-o'));

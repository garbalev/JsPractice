// import * as strings from "./module2.js";

// alert(strings.Hi1 + strings.Hi2);

import("./module2.js")
  .then((module) => console.log(module.Hi1 + module.Hi2))
  .catch((err) => console.error(err));

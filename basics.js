const fs = require("fs");

fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Directory successfully created");
});

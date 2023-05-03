const fs = require("fs");

fs.mkdir("./assets", (err) => {
  if (err.code === -4075) {
    console.log("Directory exists");
  }

  console.log("Directory successfully created");
});

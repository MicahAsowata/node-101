const fs = require("fs");

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log("Directory successfully created");
  });
} else {
  console.log("Folder exists already");
}

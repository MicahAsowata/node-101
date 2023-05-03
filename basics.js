const fs = require("fs");

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log("Folder successfully created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log("Folder successfully deleted");
  });
}

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}

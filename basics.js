const fs = require("fs");

fs.writeFile("./docs/blogOne.txt", "Hello, 🌍🌎🌏", () => {
  fs.readFile("./docs/blogOne.txt", (err, data) => {
    if (err) {
      console.log(err.message);
    }

    console.log(data.toString());
  });
});

console.log("writing file....");

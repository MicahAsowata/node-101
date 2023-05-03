const fs = require("fs");

fs.writeFile("./docs/blog.txt", "Hello, 🌍🌎🌏", () => {
  fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
      console.log(err.message);
    }

    console.log(data.toString());
  });
});

console.log("writing file....");

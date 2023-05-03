const fs = require("fs");
const file = (dir, filename) => {
  fs.mkdir(`./${dir}`, (err) => {
    fs.writeFile(
      `./${dir}/${filename}.txt`,
      `Hurray, ${__filename} has being created`,
      () => {
        fs.readFile(`./${dir}/${filename}.txt`, (err, data) => {
          if (err) {
            console.log(err.message);
          }

          console.log(data.toString());
        });
      }
    );
    if (err) {
      console.log(err.message);
    }
  });
};

console.log("writing file....");
file("docy", "blogFour");

const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blogOne.txt");

readStream.pipe(writeStream);

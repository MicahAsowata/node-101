const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog.txt");

readStream.on("data", (chunk) => {
  console.log("-- New chunk --");
  console.log(chunk.toString());
});

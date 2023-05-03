const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blogOne.txt");
readStream.on("data", (chunk) => {
  console.log("-- New chunk --");
  console.log(chunk);
  writeStream("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

const fs = require("fs");

// console.time("read");
// fs.readFile("./files/lorem.txt", (error, data) => {
//   console.log(data.length);
//   fs.writeFile("./copy.txt", data, (err) => {
//     console.log(err);
//   });
// });
// console.timeEnd("read");

//streaming
//
// console.time("read");
// const streamFile = fs.createReadStream("./files/lorem.txt", {
//   highWaterMark: 15,
// });
// const streamWrite = fs.createWriteStream("./copy.txt");
//
// streamFile.on("data", (data) => {
//   console.log(data);
//   streamWrite.write(data, (error) => {});
// });

// console.timeEnd("read");
//
//
//pipe
// console.time("read");
//
// const readStream = fs.createReadStream("./files/lorem.txt");
// const writeStream = fs.createWriteStream("./copy.txt");
//
// readStream.pipe(writeStream);
//
// console.timeend("read");
//
//
//
// buffer

// const buffer1 = Buffer.allocUnsafe(8);
// buffer1.write("helloworld");
//
// console.log(buffer1.toString());
//
//

const stream = fs.createWriteStream("./copy.txt");
const buff1 = Buffer.alloc(1, "a");

console.log(stream.write(buff1));
const buff = Buffer.alloc(17000, "a");
console.log(stream.write(buff));
console.log(stream.writableLength);
stream.on("drain", () => {
  console.log(stream.writableLength);
});

console.log(stream.writableHighWaterMark);

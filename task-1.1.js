// STREAM

process.stdin.on('data', (data) => {
  process.stdout.write(`${data.toString().trim().split('').reverse().join('')}\n`);
}).on('error', (err) => {
  console.error(err);
})

// TRANSFORM STREAM

// const { Transform } = require('stream');
//
// const reverseStringTransform = new Transform ({
//   transform(chunk, encoding, cb) {
//     cb(null, `${chunk.toString().trim().split('').reverse().join('')}\n`);
//   }
// })
//
// process.stdin.pipe(reverseStringTransform).pipe(process.stdout).on('error', (err) => {
//   console.error(err);
// });

// PIPELINE

// const { Transform, pipeline } = require('stream');
//
// const reverseStringTransform = new Transform ({
//   transform(chunk, encoding, cb) {
//     cb(null, `${chunk.toString().trim().split('').reverse().join('')}\n`);
//   }
// })
//
// pipeline(process.stdin, reverseStringTransform, process.stdout, (err) => {
//   console.error(err);
// })


// READLINE

// const { createInterface } = require('readline');
//
// const rl = createInterface({ input: process.stdin });
//
// rl.on('line', (data) => {
//   process.stdout.write(`${data.split('').reverse().join('')}\n`);
// })
//
// rl.on('error', (err) => {
//   console.error(err);
// })

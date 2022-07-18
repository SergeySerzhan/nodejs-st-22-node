import { Transform, pipeline} from 'stream';

const reverseStringTransform = new Transform ({
  transform(chunk, encoding, cb) {
    cb(null, `${chunk.toString().trim().split('').reverse().join('')}\n`);
  }
})

pipeline(process.stdin, reverseStringTransform, process.stdout, (err) => {
  console.error(err);
})

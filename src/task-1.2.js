import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { pipeline } from 'stream';
import * as url from 'url';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const FILENAME = 'nodejs-hw1-ex1';
const COLUMNS_WITH_NUMBERS = ['amount', 'price'];

try {
  const readCsvStream = createReadStream(join(__dirname, `../csv/${FILENAME}.csv`), 'utf-8');
  const writeTxtStream = createWriteStream(join(__dirname, `../${FILENAME}.txt`));

  const colParser = {};
  COLUMNS_WITH_NUMBERS.forEach(col => colParser[col] = 'number');

// options to format number data to number type
  const csvOptions = {
    colParser,
    checkType: true,
    ignoreColumns: /amount/
  };

  pipeline(readCsvStream,
    csv(csvOptions).preFileLine((line, i) => {
      // modify columns names to lower case
      if (i === 0) return line.toLowerCase();
      else return line;
    }),
    writeTxtStream,
    (err) => {
      if (err) throw err;
      console.log('Txt file was successfully created');
    });
} catch (err) {
  console.error(err);
}

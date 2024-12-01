import fs from 'fs';

interface NumArrs {
  l: String[],
  r: String[],
}

export const solution2 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');

  const base:NumArrs = {l: [], r:[]}; 
  input.split('\n').map((row) => {
    const vals = row.split('  ');

    base.l.push(vals[0].trim())
    base.r.push(vals[1].trim())
  })

  const output = base.l.map((val, i) => {
    return base.r.filter((match) => (match === val)).length * Number(val)
  }).reduce((prev, curr) => (prev + curr))


  return output;
};

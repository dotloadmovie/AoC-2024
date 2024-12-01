import fs from 'fs';

interface NumArrs {
  l: Number[],
  r: Number[]
}

const sorter = (a:Number, b:Number) => ((a as number) - (b as number))

export const solution1 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');

  const base:NumArrs = {l: [], r:[]}; 
  input.split('\n').map((row) => {
    const vals = row.split('  ');

    base.l.push(Number(vals[0]))
    base.r.push(Number(vals[1]))
  })

  base.l = base.l.sort(sorter);
  base.r = base.r.sort(sorter);

  const output = base.l.map((val, i) => {
    const vals = [val, base.r[i]].sort(sorter)
    
    return (vals[1] as number) - (vals[0] as number)
  }).reduce((prev, curr) => (prev + curr))


  return output;
};

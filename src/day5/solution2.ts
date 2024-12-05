import fs from 'fs';

export const solution2 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');
  let output = 0;

  const raw = input.split('\n');
  const rules = raw.slice(0, raw.indexOf(''));
  const pages = raw.slice(raw.indexOf('') + 1);

  const sorter = (a:string, b:string) => {
    if(rules.indexOf(`${a}|${b}`) > -1) {
      return -1
    } else if(rules.indexOf(`${b}|${a}`) > -1) {
      return 1
    }

    return 0;
    
  }

  const matches = pages.filter(pageRow => {
    const pageItems = pageRow.split(',');

    pageItems.sort(sorter);

    if(pageItems.join(',') === pageRow) {
      return false
    }

    return true;
  });

  output = matches.map((match, i) => {
    const matchItems = match.split(',')
    matchItems.sort(sorter);
    const num = (matchItems[Math.floor(matchItems.length / 2)]);
    
    return Number(num)
  }).reduce((prev, curr) => {
    return prev + curr;
  })


  return output;
};

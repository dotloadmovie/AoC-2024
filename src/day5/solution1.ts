import fs from 'fs';

export const solution1 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');
  let output = 0;

  const raw = input.split('\n');
  const rules = raw.slice(0, raw.indexOf(''));
  const pages = raw.slice(raw.indexOf('') + 1);

  const matches = pages.filter(pageRow => {
    const pageItems = pageRow.split(',');

    pageItems.sort((a:string, b:string) => {
      if(rules.indexOf(`${a}|${b}`) > -1) {
        return -1
      } else if(rules.indexOf(`${b}|${a}`) > -1) {
        return 1
      }

      return 0;
      
    });

    if(pageItems.join(',') === pageRow) {
      return true
    }

    return false;
  })

  output = matches.map((match, i) => {
    
    const matchItems = match.split(',')
    const num = (matchItems[Math.floor(matchItems.length / 2)]);
    
    return Number(num)
  }).reduce((prev, curr) => {
    return prev + curr;
  })


  return output;
};

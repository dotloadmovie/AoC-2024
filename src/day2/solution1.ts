import fs from 'fs';

const sorter = (a:Number, b:Number) => ((a as number) - (b as number))

const checkThreshold = (end:number, start:number):boolean => {
  const diff = end - start;

  if(diff < 1 || diff > 3) {
    return false;
  }

  return true
}

const checkRow = (row:number[]):boolean => {
  const sorted = row.slice().sort(sorter);

  if(row.join('') === sorted.join('')) {
    return true
  }

  if(row.join('') === sorted.reverse().join('')) {
    return true
  }

  return false

}

export const solution1 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');
  const rows = input.split('\n').map(row => {
    return row.split(' ').map(item => {
      return Number(item)
    })
  })


  const matches = rows.filter((row) => {
    if(checkRow(row)) {
      return row.slice().sort(sorter).filter((item, i, arr) => {
        if(i > 0) {
          return checkThreshold(item, arr[i -1])
        }
        
      }).length === row.length - 1
    }

    return false;  
  })

 return matches.length


};

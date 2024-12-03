import fs from 'fs';

export const solution2 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');

  const matches = input.match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/gm);


  let skip = false;
  const groups = matches?.map((val) => {
    


    if(skip) {
      if(val.indexOf('do()') > -1) {
        skip = false;
        return 0
      }
    }


    if(!skip) {
      if(val.indexOf('don\'t()') > -1) {
        skip = true;
        return 0
      }

      const nums = val.match(/\d+,\d+/gm);

      if(nums) {
        return nums[0].split(',').map(val => Number(val)).reduce((prev:number, curr:number) => {
          return curr * prev;
        })
      }
    }

    return 0
  })

  return groups?.reduce((prev:number, curr:number) => {
    return prev + curr
  })

 
};

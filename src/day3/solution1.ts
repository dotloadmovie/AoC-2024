import fs from 'fs';

export const solution1 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');

  const matches = input.match(/mul\(\d+,\d+\)/gm);

  const groups = matches?.map((val) => {
    const nums = val.match(/\d+,\d+/gm);

    if(nums) {
      return nums[0].split(',').map(val => Number(val)).reduce((prev:number, curr:number) => {
        return curr * prev;
      })
    }

    return 0
  })

  return groups?.reduce((prev:number, curr:number) => {
    return prev + curr
  })

 
};

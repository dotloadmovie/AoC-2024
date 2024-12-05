import fs from 'fs';

export const solution2 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');
  let output = 0;

  const grid = input.split('\n').map(row => {
    return row.split('').map(item => item);
  })

  const coords = [
    
    [[-1, -1], [1, 1]], 
    
    [[-1, 1], [1, -1]],
    
    [[1, 1], [-1, -1]],
    
    [[1, -1], [-1, 1]]
  ]

  const letters = ['M', 'S']

  const getItem = (row:number, col:number):string | null => {
    let output = null;

    if(grid[row] && grid[row][col]) {
      output = grid[row][col]
    }

    return output;
  }

  const checkItem = (row:number, col:number):number => {
    let output = 0;

    coords.forEach((span, j) => {
      let count = 0;

      span.forEach((coord, i) => {
        const item = getItem(row + coord[0], col + coord[1]) 

        if(item && item === letters[i]) {
          count += 1;
        }
      })

      

      if(count === 2) {
        output += 1;
      }
    })

    return output === 2? output : 0;
  }

  grid.forEach((vals, row) => {
    vals.forEach((item, col) => {
      if(item === 'A') {
        output += checkItem(row, col);
      }
    })
  })

  return output / 2;
};

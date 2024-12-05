import fs from 'fs';

export const solution1 = () => {
  const input = fs.readFileSync(`${__dirname}/data/data.txt`, 'utf-8');
  let output = 0;

  const grid = input.split('\n').map(row => {
    return row.split('').map(item => item);
  })

  const coords = [
    [[0, -1], [0, -2], [0, -3]], 
    [[-1, -1], [-2, -2], [-3, -3]], 
    [[-1, 0], [-2, 0], [-3, 0]],
    [[-1, 1], [-2, 2], [-3, 3]],
    [[0, 1], [0, 2], [0, 3]],
    [[1, 1], [2, 2], [3, 3]],
    [[1, 0], [2, 0], [3, 0]],
    [[1, -1], [2, -2], [3, -3]]
  ]

  const letters = ['M', 'A', 'S']

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

      

      if(count === 3) {
        output += 1;
      }
    })

    return output;
  }

  grid.forEach((vals, row) => {
    vals.forEach((item, col) => {
      if(item === 'X') {
        output += checkItem(row, col);
      }
    })
  })

  return output;
};

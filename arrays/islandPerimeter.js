/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let width = grid[0].length
    let height = grid.length
    let p = 0
    for ( let y = 0; y < height; y++){
        for (let x = 0; x < width; x++){
            if(grid[y][x]){
                if( (x===0)||(!grid[y][x-1]) ){p+=1}
                if( (x===width-1)||(!grid[y][x+1]) ){p+=1}
                if( (y===0)||(!grid[y-1][x]) ){p+=1}
                if( (y===height-1)||(!grid[y+1][x]) ){p+=1}
            }
        }
    }
      return p
  };
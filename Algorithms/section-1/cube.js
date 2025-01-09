// cube function with O(n^3) time complexity
function cube(n){
  // Column 1: n iterations
  for(let i = 0; i < n; i++){
    // Row 1: n iterations
    for(let j = 0; j < n; j++){
      // Depth 1: n iterations
      for(let k = 0; k < n; k++){
         console.log(i, j, k);
      }
    }
  }
}

cube(4);


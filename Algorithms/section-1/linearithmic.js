// linearithmic time complexity: O(n log n)
const nLogn = (n) => {
  let y = n; // O(1)
  while(n > 1){
    n = Math.floor(n / 2); // O(log n)
    // O(log n)
    for(let i = 0; i < y; i++){
      console.log(i);
    }
  }
}

// Time complexity: O(n log n)


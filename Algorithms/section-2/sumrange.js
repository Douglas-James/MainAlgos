function square(n) {
  // column
  for(let i = 0; i < n; i++){
    // row
    for(let j = 0; j < n; j++){
      console.log(`Column : ${i} , Row : ${j}`);
    }
  }
}

square(4);

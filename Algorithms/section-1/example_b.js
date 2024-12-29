/*
  Write a function that has a time complexity of O(n log n)
  nLogNFun(10) => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  nLogNFun(5) => 1, 2, 3, 4, 5
  nLogNFun(3) => 1, 2, 3
  nLogNFun(1) => 1
*/
function nLogNFun(n){
  x = y;
  while(n > 1){
   n = Math.floor(n/2);
   for(let i = 1; i <= x; i++){
     console.log(i);
   }
  }
}

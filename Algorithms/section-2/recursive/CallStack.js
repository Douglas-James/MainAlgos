/*
In this example, the wakeUp function calls the takeShower and eatBreakFast functions,
which in turn call the cookFood function. The call stack keeps track of the order
in which these functions are called and their respective return values.
Once all the functions have been executed, the call stack is cleared, and the program is complete.
*/
function takeShower() {
  return 'Showering!';
}
function eatBreakFast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)]; // Randomly select an item from the array
}

function wakeUp() {
  takeShower(); // takeShower() is called first
  eatBreakFast(); // eatBreakFast() is called next
  console.log('Ready to start the day!'); // This is called last
}

wakeUp();
// Output:
// Showering!
// Eating Eggs this can be different each time
// Ready to start the day!

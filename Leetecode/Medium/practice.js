const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // Output: 1
console.log(map1.has('b')); // Output: true
console.log(map1.size); // Output: 3
console.log(map1.keys()); // Output: [Map Iterator] { 'a', 'b', 'c' }

map1.delete('b');
console.log(map1.has('b')); // Output: false  (b is deleted)

map1.clear();

console.log(map1.size); // Output: 0 (map is cleared)

const map2 = new Map();

map2.set(1, 'a');
map2.set(2, 'b');
map2.set(3, 'c');

console.log(map2.get(1)); // Output: 'a'
console.log(map2.has(2)); // Output: true
console.log(map2.size); // Output: 3
console.log(map2.keys()); // Output: [Map Iterator] { 1, 2, 3 }

map2.delete(2);
console.log(map2.has(2)); // Output: false  (2 is deleted)

map2.clear();

console.log(map2.size); // Output: 0 (map is cleared)

// Object create method to create a map object with initial values
const person ={
  isHuman: false,
  printIntroduction: function(){
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction(); // Output: My name is Matthew. Am I human? true



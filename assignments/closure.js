// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let count = 0
const closure = () => {
  
  return count += 1
}
console.log(closure())


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count=0
  return ()=> count += 1
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: () => (count += 1),
    decrement: () => (count -= 1)
  }
}

const newCounterFactory = counterFactory()
console.log(newCounterFactory.increment())
console.log(newCounterFactory.decrement());

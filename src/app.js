import { square, add } from './utils.js'
import { isAdult, canDrink } from './person.js'

console.log('app.js is running!!!');
console.log(square(2));
console.log(add(2, 5));

// Person function
console.log(isAdult(5));
console.log(isAdult(18));
console.log(canDrink(29));
console.log(canDrink(18));

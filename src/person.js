console.log('person.js is loaded');

const isAdult = (age) => age >= 18 ? true : false;
const canDrink = (age) => age >= 21 ? true : false;

export { isAdult, canDrink }
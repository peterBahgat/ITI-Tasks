const fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];

let isString = fruits.every((fruit) => typeof fruit === 'string');

let isStartsWith = fruits.some((fruit) => fruit.startsWith('a'));

let startWithSorB = fruits.filter(
  (fruit) => fruit.startsWith('b') || fruit.startsWith('s'),
);

let addSomeText = fruits.map((fruit) => {
  return `I like ${fruit}`;
});

console.log(isString, isStartsWith, startWithSorB, addSomeText);

addSomeText.forEach((text) => {
  console.log(text);
});

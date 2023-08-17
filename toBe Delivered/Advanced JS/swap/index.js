const values = { value1: 5, value2: 6 };

const { value1: value2, value2: value1 } = values;

console.log(value1, value2);

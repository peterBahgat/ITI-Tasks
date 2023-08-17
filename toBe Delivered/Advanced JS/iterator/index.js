const iterableObject = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  [Symbol.iterator]: function* () {
    const keys = Object.keys(this);
    for (const key of keys) {
      yield [key, this[key]];
    }
  },
};

for (const [key, value] of iterableObject) {
  console.log(`${key}: ${value}`);
}

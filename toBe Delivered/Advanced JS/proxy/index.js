const person = { name: '', address: '', age: '' };
const personHandler = {
  set: function (target, prop, value) {
    if (prop === 'name' && value.length !== 7) {
      throw new Error('name length must be 7 characters');
    }
    if (prop === 'address' && typeof value !== 'string') {
      throw new Error('address must be a string');
    }
    if (prop === 'age' && (isNaN(value) || !(25 <= value && value <= 60))) {
      throw new Error('age must be a number between 25 and 60');
    }
    target[prop] = value;
    return true;
  },
};

const proxy = new Proxy(person, personHandler);

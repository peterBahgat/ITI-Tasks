function onlyNumbers() {
  var sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    if (isNaN(arguments[index])) {
      throw new TypeError('Argument must be a number');
    }
    sum += arguments[index];
  }
  console.log(sum);
  return sum;
}

onlyNumbers(5, 'k', 7);

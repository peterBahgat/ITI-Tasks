function notExceedTwo(arg1, arg2) {
  if (arguments.length !== 2) {
    throw new RangeError('Arguments must be only two');
  }
  console.log(arg1, arg2);
  return arg1, arg2;
}
notExceedTwo(1, 2);

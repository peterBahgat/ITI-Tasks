function reverse1() {
  const argsArray = Array.from(arguments);
  console.log(argsArray.reverse());
  return argsArray.reverse();
}

function reverse2() {
  var argsArray = Array.from(arguments);
  var i = argsArray.length - 1;
  var j = 0;
  while (i >= 0) {
    arguments[j] = argsArray[i];
    i--;
    j++;
  }
  console.log(arguments);
  return arguments;
}
reverse1(10, 5, 12, 7);
reverse2(10, 5, 12, 7);

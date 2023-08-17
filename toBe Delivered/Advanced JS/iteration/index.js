function getArr() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      return i;
    });
  }

  return arr;
}

var result = getArr();
console.log(result[0]());
console.log(result[1]());
console.log(result[2]());


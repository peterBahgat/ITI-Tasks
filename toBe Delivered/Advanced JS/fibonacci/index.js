function* fibonacciSeriesElementCount(count) {
  let a = 0,
    b = 1;
  for (let i = 0; i < count; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log(...fibonacciSeriesElementCount(10));

function* fibonacciSeriesMaxValue(maxValue) {
  let a = 0,
    b = 1;
  while (a <= maxValue) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log(...fibonacciSeriesMaxValue(10));

const arr = [10, 20, 30, 40, 1];
function getMaxMin(...arr) {
  return { max: Math.max(...arr), min: Math.min(...arr) };
}

console.log(getMaxMin(...arr, 5, 0));

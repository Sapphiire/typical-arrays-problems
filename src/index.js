
exports.min = function min (array) {
  return array.sort((a,b) => a-b)[0];
}

exports.max = function max (array) {
  return array.sort((a,b) => b-a)[0];
}

exports.avg = function avg (array) {
  let length = array.length;
  let sum = array.reduce((sum, element) => sum + element, 0);
  return sum/length;
}

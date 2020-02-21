
exports.min = function min (array) {
  if (typeof array === 'undefined') return 0
  if (array.length > 0){
  return Math.min(...array)
  } else {
    return 0
  }
}

exports.max = function max (array) {
  if (typeof array === 'undefined') return 0
  if (array.length > 0){
  return Math.max(...array)
  } else {
    return 0
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (typeof array === 'undefined') return 0
  if (array.length > 0){
     sum =  array.reduce((a, b) => (a + b)) / array.length;
  
  } 
  return sum;
 
}

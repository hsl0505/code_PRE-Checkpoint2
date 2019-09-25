function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i = i + 1) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

var output = unique([1, 2, 2, 4, 6, 6]); // should be [1,2,4,6]
console.log(output);

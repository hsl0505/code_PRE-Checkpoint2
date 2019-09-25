function sumConsecutives(s) {
  let result = [];

  let diffIdx = []; // [0,   3,   4,   5,   7,  8]     [1,4,4,4,0,4,3,3,1]
  for (let i = 0; i < s.length; i = i + 1) {
    if (s[i] !== s[i + 1]) {
      diffIdx.push(i);
    }
  }

  let first = s.slice(0, diffIdx[0] + 1);
  let add = 0;
  for (let i = 0; i < first.length; i = i + 1) {
    add = add + first[i];
  }
  result.push(add);

  for (let i = 1; i < diffIdx.length; i = i + 1) {
    let arr = s.slice(diffIdx[i - 1] + 1, diffIdx[i] + 1);
    let addNum = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
      addNum = addNum + arr[i];
    }
    result.push(addNum);
  }

  return result;
}

var output = sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]);
console.log(output);

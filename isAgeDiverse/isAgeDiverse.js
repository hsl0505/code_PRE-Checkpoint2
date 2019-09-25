// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if (typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require("../salesTeam.js");
}

var isAgeDiverse = function(list) {
  let arr = [];
  for (let i = 0; i < list.length; i = i + 1) {
    arr.push(list[i]["age"]);
  }

  let tenDown = arr.filter(function(ele) {
    return ele < 10;
  });
  let eightyUp = arr.filter(function(ele) {
    return ele >= 90;
  });

  if (tenDown.length !== 0 || eightyUp.length !== 0) {
    return false;
  }

  function ageFilter(array, age) {
    return array.filter(function(ele) {
      return ele >= age - 10 && ele < age;
    });
  }

  for (let i = 20; i < 100; i = i + 10) {
    if (ageFilter(arr, i).length === 0) {
      return false;
    } else {
      return true;
    }
  }
};

var output = isAgeDiverse(salesTeam);
console.log(output);

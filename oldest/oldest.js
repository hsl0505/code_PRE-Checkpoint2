// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if (typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require("../salesTeam.js");
}

function oldest(salesTeam) {
  let arrOfAge = [];
  for (let i = 0; i < salesTeam.length; i = i + 1) {
    arrOfAge.push(salesTeam[i]["age"]);
  }

  let maxAge = Math.max.apply(null, arrOfAge);

  let oldestOne = [];

  for (let i = 0; i < salesTeam.length; i = i + 1) {
    if (salesTeam[i]["age"] === maxAge) {
      oldestOne.push(i);
    }
  }

  return `The oldest student is ${salesTeam[oldestOne[0]]["name"]["first"]} ${
    salesTeam[oldestOne[0]]["name"]["last"]
  }`;
}

var output = oldest(salesTeam);
console.log(output);

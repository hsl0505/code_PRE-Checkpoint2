// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if (typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require("../salesTeam.js");
}

function getTeenager(salesTeam) {
  let arr = [];
  for (let i = 0; i < salesTeam.length; i = i + 1) {
    if (salesTeam[i]["age"] < 20 && salesTeam[i]["age"] >= 10) {
      arr.push(
        `${salesTeam[i]["name"]["first"]} ${salesTeam[i]["name"]["last"]}`
      );
    }
  }
  return arr;
}

var output = getTeenager(salesTeam);
console.log(output);

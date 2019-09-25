// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if (typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require("../salesTeam.js");
}

function tenThousandClub(salesTeam) {
  let arr = [];

  for (let i = 0; i < salesTeam.length; i = i + 1) {
    if (salesToNumber(salesTeam[i]["sales"]) >= 10000) {
      arr.push(
        `${salesTeam[i]["name"]["first"]} ${salesTeam[i]["name"]["last"]}`
      );
    }
  }

  return arr;
}

function salesToNumber(salesString) {
  let deleteDollar = salesString.slice(1);
  return parseInt(deleteDollar);
}

var output = tenThousandClub(salesTeam);
console.log(output);

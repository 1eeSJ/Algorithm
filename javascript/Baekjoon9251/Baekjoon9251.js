const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');

let str1 = input[0].trim();
let str2 = input[1].trim();

solution(str1, str2);

function solution(str1, str2) {
  let lcs = Array.from({length : str1.length + 1}, () => Array(str2.length + 1).fill(0));

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        lcs[i+1][j+1] = lcs[i][j] + 1;
      }
      else {
        lcs[i+1][j+1] = Math.max(lcs[i+1][j], lcs[i][j+1]);
      }
    }
  }

  console.log(lcs[str1.length][str2.length]);

}
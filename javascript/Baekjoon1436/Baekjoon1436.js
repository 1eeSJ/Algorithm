const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];

console.log(solution(N));

function solution(N) {
  let count = 0;
  let number = 665;
  while (count != N) {
    number++;
    if (number.toString().includes("666")) {
      count++;
    }
  }
  return number;
}
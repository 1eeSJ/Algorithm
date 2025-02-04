const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
let N = +input[0];
let Pi = input[1].split(' ').map(x => +x);

solution(N, Pi);

function solution(N, Pi) {
  let answer = 0;

  Pi.sort((a, b) => a - b);

  for(let i = 0; i < N; i++) {
    answer += (N - i) * Pi[i];
  }
  
  console.log(answer);
}
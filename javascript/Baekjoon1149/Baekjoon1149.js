const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
let dp = [];

for (let i = 1; i <= N; i++) {
  dp.push(input[i].split(' ').map(x => +x));
}

solution(N, dp);

function solution(N, dp) {
  for (let i = 1; i < N; i++) {
    dp[i][0] += Math.min(dp[i-1][1], dp[i-1][2]);
    dp[i][1] += Math.min(dp[i-1][0], dp[i-1][2]);
    dp[i][2] += Math.min(dp[i-1][0], dp[i-1][1]);
  }

  console.log(Math.min(dp[N-1][0], dp[N-1][1], dp[N-1][2]));
}
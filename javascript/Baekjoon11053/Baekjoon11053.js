const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0]
const A = input[1].split(' ').map(x => +x);

solution(N, A);

function solution(N, A) {
  let dp = new Array(N).fill(0);
  dp[0] = 1;

  for (let i = 1; i < N; i++) {
    dp[i] = 1;

    for (let j = 0; j <= i; j++) {
      if (A[j] < A[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  console.log(Math.max.apply(null, dp));
}
const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
let triangle = [];

for (let i = 1; i <= N; i++) {
  triangle.push(input[i].split(' ').map(x => +x));
}

solution(N, triangle);

function solution(N, triangle) {
  let dp = []
  for (let i = 1; i <= N; i++) {
    dp.push(Array(i).fill(0));
  }
  dp[0][0] = triangle[0][0];

  let value = 0;

  for (let yPos = 0; yPos < N-1; yPos++) {
    for (let xPos = 0; xPos <= yPos; xPos++) {

      value = dp[yPos][xPos] + triangle[yPos+1][xPos];
      if (value > dp[yPos+1][xPos]) {
        dp[yPos+1][xPos] = value;
      }

      value = dp[yPos][xPos] + triangle[yPos+1][xPos+1];
      if (value > dp[yPos+1][xPos+1]) {
        dp[yPos+1][xPos+1] = value;
      }
    }
  }

  console.log(Math.max(...dp[N-1]));
}
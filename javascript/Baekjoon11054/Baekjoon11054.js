const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(x => +x);

solution(N, A);

function solution(N, A) {
  let reverseA = A.slice().reverse();
  let increase = new Array(N).fill(0);
  let decrease = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    increase[i] = 1;
    decrease[i] = 1;

    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && increase[i] < increase[j] + 1) {
        increase[i] = increase[j] + 1;
      }

      if (reverseA[j] < reverseA[i] && decrease[i] < decrease[j] + 1) {
        decrease[i] = decrease[j] + 1;
      }
    }
  }

  decrease.reverse();

  let result = increase.map((value, index) => value + decrease[index] - 1);
  console.log(Math.max.apply(null, result));
}
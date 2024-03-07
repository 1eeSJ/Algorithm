const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(x => +x);

solution(A, B);

function solution(A, B) {
  let count = 1;

  while(A < B) {
    if (B % 10 === 1) {
      B = parseInt(B / 10);
      count++;
    }
    else if (B % 2 === 0) {
      B = B / 2;
      count++;
    }
    else {
      console.log(-1);
      break;
    }

    if (A > B) {
      console.log(-1);
      break;
    }
    if (A === B) {
      console.log(count);
      break;
    }
  }
}
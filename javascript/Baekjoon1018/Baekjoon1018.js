const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(x => +x);
const CHESSMAP = [];

for (let i = 1; i <= N; i++) {
  CHESSMAP.push(input[i].split(''));
}

console.log(solution(N, M, CHESSMAP));

function solution(N, M, CHESSMAP) {
  let minCount = 64;
  let currCount = 0;

  for (let i = 0; i <= N-8; i++) {
    for (let j = 0; j <= M-8; j++) {
      currCount = countCalculation(j, i, CHESSMAP);
      if (minCount > currCount) {
        minCount = currCount;
      }
    }
  }

  return minCount;
}

function countCalculation(x, y, CHESSMAP) {
  let firstCaseCount = 0;
  let secondCaseCount = 0;
  let square = 'B';

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (CHESSMAP[i][j] != square) {
        firstCaseCount++;
      } else {
        secondCaseCount++;
      }
      
      if (square == 'B') {
        square = 'W';
      } else {
        square = 'B';
      }
    }
    
    if (square == 'B') {
      square = 'W';
    } else {
      square = 'B';
    }
  }

  if (firstCaseCount < secondCaseCount) {
    return firstCaseCount;
  } else {
    return secondCaseCount;
  }
}
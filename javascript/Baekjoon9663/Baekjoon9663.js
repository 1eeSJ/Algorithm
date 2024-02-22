const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];

solution(N);

function solution(N) {
  let checkMap = new Array(N).fill(false);
  let count = [0];

  for (let i = 0; i < N; i++) {
    checkMap[0] = i;
    nQueen(N, checkMap, 1, count);
  }
  console.log(count[0]);
}

function nQueen(N, checkMap, currentPos, count) {
  if (currentPos === N) {
    count[0]++;
    return;
  }

  for (let i = 0; i < N; i++) {
    let check = true;
    
    for(let j = 0; j < currentPos; j++) {
      checkMap[currentPos] = i;
      if (checkMap[j] == checkMap[currentPos] || Math.abs(j - currentPos) == Math.abs(checkMap[j] - checkMap[currentPos])) {
        check = false;
        break;
      }
    }

    if (check) {
      nQueen(N, checkMap, currentPos + 1, count);
    }
  }
}
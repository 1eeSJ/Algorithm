const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
const arrayA = input[1].split(' ').map(x => +x);

solution(N, arrayA);

function solution(N, arrayA) {
  let maxValue = [0];
  findValue(N, arrayA, [], maxValue);

  console.log(maxValue[0]);
}

function findValue(N, arrayA, arrayOrder, maxValue) {
  if (N === arrayOrder.length) {
    let value = calculate(N, arrayA, arrayOrder);
    
    if (maxValue[0] < value) {
      maxValue[0] = value;
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!arrayOrder.includes(i)) {
      arrayOrder.push(i);
      findValue(N, arrayA, arrayOrder, maxValue);
      arrayOrder.pop();
    }
  }
}

function calculate(N, arrayA, arrayOrder) {
  let value = 0;
  for (let i = 0; i < N-1; i++) {
    value += Math.abs(arrayA[arrayOrder[i]] - arrayA[arrayOrder[i+1]]);
  }
  return value;
}
const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
const K = +input[1];
const cardList = [];

for (let i = 2; i < N + 2; i++) {
  cardList.push(input[i].trim());
}

solution(N, K, cardList);

function solution(N, K, cardList) {
  let numberList = [];
  let visited = Array(N).fill(false);
  combination(N, K, cardList, visited, [], numberList);

  console.log(numberList.length);
}

function combination(N, K, cardList, visited, currentNumber, numberList) {
  if (K === currentNumber.length) {
    if (!numberList.includes(currentNumber.join(''))) {
      numberList.push(currentNumber.join(''));
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    currentNumber.push(cardList[i]);
    visited[i] = true;
    combination(N, K, cardList, visited, currentNumber, numberList);
    visited[i] = false;
    currentNumber.pop();
  }
}
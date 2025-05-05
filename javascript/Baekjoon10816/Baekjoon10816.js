const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');

const N = +input[0];
let NList = input[1].split(' ').map(x => +x);

const M = +input[2];
let MList = input[3].split(' ').map(x => +x);

solution(N, M, NList, MList);

function solution(N, M, NList, MList) {
  NList.sort((a, b) => a - b);

  let result = [];
  for (i = 0; i < M; i++) {
    result.push(boundarySearch(NList, MList[i]));
  }

  console.log(result.map(number => `${number}`).join(' '));
}

function boundarySearch(arr, target) {
  const first = lowerBound(arr, target);
  const last = upperBound(arr, target);
  return last - first;
}

function lowerBound(arr, target) {
  let left = 0
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

function upperBound(arr, target) {
  let left = 0
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

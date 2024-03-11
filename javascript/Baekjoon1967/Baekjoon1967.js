const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
let edge = Array.from({length : N + 1}, () => new Array());

for (let i = 1; i < N; i++) {
  let [node1, node2, value] = input[i].split(' ').map(x => +x);
  edge[node1].push([node1, node2, value]);
  edge[node2].push([node2, node1, value]);
}

solution(N, edge);

function solution(N, edge) {
  let visited = Array(N+1).fill(false);
  visited[1] = true;
  let totalValue = [0, 1]
  findPoint(edge, visited, totalValue, [0, 1]);

  let point = totalValue[1];
  visited = Array(N+1).fill(false);
  visited[point] = true;
  totalValue = [0, point];
  findPoint(edge, visited, totalValue, [0, point]);

  console.log(totalValue[0]);
}

function findPoint(edge, visited, totalValue, currentValue) {
  for (let info of edge[currentValue[1]]) {
    if (visited[info[1]]) {
      continue;
    }
    currentValue = [currentValue[0] + info[2], info[1]];
    visited[info[1]] = true;
    findPoint(edge, visited, totalValue, currentValue);
    currentValue = [currentValue[0] - info[2], info[0]];
  }
  if (totalValue[0] < currentValue[0]) {
    totalValue[0] = currentValue[0];
    totalValue[1] = currentValue[1];
  }
}
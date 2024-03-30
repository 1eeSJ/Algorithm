const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
const M = +input[1];

let dist = Array.from({length : N}, () => Array(N).fill(Infinity));
for (let i = 0; i < N; i++) {
  dist[i][i] = 0;
}

for (let i = 2; i < M + 2; i++) {
  let [node1, node2, value] = input[i].split(' ').map(x => +x);
  dist[node1 - 1][node2 - 1] = Math.min(value, dist[node1 - 1][node2 - 1]);
}

solution(N, dist);

function solution(N, dist) {
  for (let i = 0; i < N; i++) {
    floydWarshall(i, N, dist);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dist[i][j] == Infinity) {
        dist[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(...dist[i]);
  }
}

function floydWarshall(num, N, dist) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      dist[i][j] = Math.min(dist[i][j], dist[i][num] + dist[num][j]);
    }
  }
}
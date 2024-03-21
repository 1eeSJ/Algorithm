const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(x => +x);
let graph = new Array(N+1);
let coordinates = new Array(M);

graph[0] = new Array(N+1).fill(0);

for (let i = 1; i <= N; i++) {
  graph[i] = [0, ...input[i].split(' ').map(x => +x)];
}

for (let i = N + 1; i <= N + M; i++) {
  coordinates[i - N - 1] = input[i].split(' ').map(x => +x);
}

solution(N, M, graph, coordinates);

function solution(N, M, graph, coordinates) {
  accumulate(N, graph);

  let results = [];

  for (let i = 0; i < M; i++) {
    let total = calculate(graph, coordinates[i][0], coordinates[i][1], coordinates[i][2], coordinates[i][3]);
    results.push(total);
  }

  console.log(results.join('\n'));
}

function accumulate(N, graph) {
  for (let i = 1; i <= N; i++) {
    graph[0][i] += graph[0][i-1];
    graph[i][0] += graph[i-1][0];
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      graph[i][j] = graph[i][j] - graph[i-1][j-1] + graph[i-1][j] + graph[i][j-1];
    }
  }
}

function calculate(graph, x1, y1, x2, y2) {
  return graph[x2][y2] - graph[x2][y1 - 1] - graph[x1 - 1][y2] + graph[x1 - 1][y1 - 1];
}

const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(x => +x);
let graph = new Array(N + 1).fill(null).map(() => []);

for (let i = 1; i < M + 1; i++) {
    let [node1, node2] = input[i].split(' ').map(x => +x);
    graph[node1].push(node2);
    graph[node2].push(node1);
}

solution(N, M, graph);

function solution(N, M, graph) {
    let visited = new Array(N + 1).fill(false);
    let count = 0;
    
    for (let i = 1; i < N + 1; i++) {
        if (!visited[i]) {
            count++;
            DFS(i);
        }
    }

    function DFS(start){
        visited[start] = true;
        for (const node of graph[start]) {
            if (!visited[node]) {
                DFS(node);
            }
        }
    }

    console.log(count);
}
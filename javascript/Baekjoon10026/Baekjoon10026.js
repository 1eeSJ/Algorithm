const input = require('fs').readFileSync('./javascript/example.txt').toString().trim().split('\n');
const N = +input[0];
let gridMap = [];

for (let i = 1; i <= N; i++) {
    gridMap.push(input[i].trim().split(''));
}

solution(N, gridMap);

function solution(N, gridMap) {
    let count = 0;
    let countCB = 0;
    let visited = Array.from({ length: N }, () => Array(N).fill(false));
    let visitedCB = Array.from({ length: N }, () => Array(N).fill(false));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                count++;
                DFS(gridMap, visited, i, j);
            }

            if(!visitedCB[i][j]) {
                countCB++;
                DFSColorBlindness(gridMap, visitedCB, i, j);
            }
            
        }
    }

    console.log(count, countCB);
}


function DFS(gridMap, visited, y, x) {
    let dx = [1, 0 ,-1, 0];
    let dy = [0, 1, 0, -1];

    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i];
        let nextY = y + dy[i];
        if (posValidation(nextY, nextX, N) && !visited[nextY][nextX] && gridMap[y][x] == gridMap[nextY][nextX]) {
            DFS(gridMap, visited, nextY, nextX);
        }
    }
}

function DFSColorBlindness(gridMap, visited, y, x) {
    let dx = [1, 0 ,-1, 0];
    let dy = [0, 1, 0, -1];

    let correntColor = gridMap[y][x];

    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        let nextX = x + dx[i];
        let nextY = y + dy[i];
        if (posValidation(nextY, nextX, N) && !visited[nextY][nextX]) {
            if (correntColor == 'B' && gridMap[nextY][nextX] == 'B'){
                DFSColorBlindness(gridMap, visited, nextY, nextX);
            }
            if (correntColor != 'B' && gridMap[nextY][nextX] != 'B') {
                DFSColorBlindness(gridMap, visited, nextY, nextX);
            }
        }
    }
}

function posValidation(nextY, nextX, N) {
    if (nextY >= 0 && nextY < N) {
        if (nextX >= 0 && nextX < N) {
            return true;
        }
    }
    return false;
}
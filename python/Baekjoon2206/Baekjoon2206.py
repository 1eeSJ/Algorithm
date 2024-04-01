import sys
from collections import deque

def main():
  N, M = map(int, sys.stdin.readline().split())
  graph = []

  for _ in range(N):
    graph.append(list(sys.stdin.readline()))

  print(BFS(N, M, graph))

def BFS(N, M, graph):
  que = deque([(0, 0, 0)])
  visited = [[[0, 0] for _ in range(M)] for _ in range(N)]
  visited[0][0][0] = 1

  dx = [0, 1, 0, -1]
  dy = [1, 0, -1, 0]

  while que:
    y, x, breakable = que.popleft()

    if y == N - 1 and x == M - 1:
      return visited[y][x][breakable]
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= ny < N and 0 <= nx < M and visited[ny][nx][breakable] == 0:
        if graph[ny][nx] == '0' and visited[ny][nx][breakable] == 0:
          que.append((ny, nx, breakable))
          visited[ny][nx][breakable] = visited[y][x][breakable] + 1

        elif breakable == 0 and graph[ny][nx] == '1' and visited[ny][nx][1] == 0:
          que.append((ny, nx, 1))
          visited[ny][nx][1] = visited[y][x][0] + 1

  return -1

if __name__ == '__main__':
  main()
from collections import deque

def main():
  N, M = map(int, input().split())
  mazeMap = [list(map(int, input())) for _ in range(N)]
  BFS(N, M, mazeMap)

def BFS(N, M, mazeMap):
  MOVEX = [1, 0, -1, 0]
  MOVEY = [0, 1, 0, -1]

  currPos = []
  que = deque([[0,0]])
  visited = [[[False, 0] for _ in range(M)] for _ in range(N)]
  visited[0][0] = [True, 1]

  while(que):
    currPos = que.popleft()
    value = visited[currPos[0]][currPos[1]][1]
    for i in range(4):
      x = currPos[0] + MOVEX[i]
      y = currPos[1] + MOVEY[i]
      if posValidation(x, y, visited, mazeMap):
        que.append([x,y])
        visited[x][y] = [True, value + 1]

  print(visited[N-1][M-1][1])

def posValidation(x, y, visited, mazeMap):
  if x >= 0 and x < len(visited):
    if y >= 0 and y < len(visited[0]):
      if visited[x][y][0] == False and mazeMap[x][y] == 1:
        return True
  return False

if __name__ == '__main__':
  main()
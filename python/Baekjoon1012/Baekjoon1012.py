def main():
  M, N, K = map(int, input().split())
  farm = [[0 for _ in range(M)] for _ in range(N)]
  visited = [[False for _ in range(M)] for _ in range(N)]
  count = 0
  
  for i in range(K):
    x, y = map(int, input().split())
    farm[y][x] = 1

  for y in range(N):
    for x in range(M):
      if farm[y][x] == 1 and visited[y][x] == False:
        DFS(farm, visited, x, y)
        count += 1
  
  print(count)

def DFS(farm, visited, x, y):
  visited[y][x] = True
  
  dx = [1, 0, -1, 0]
  dy = [0, 1, 0, -1]

  for i in range(4):
    nextX = x + dx[i]
    nextY = y + dy[i]

    if posValidation(nextX, nextY, farm) and visited[nextY][nextX] == False:
      DFS(farm, visited, nextX, nextY)

def posValidation(x, y, farm):
  if 0 <= x < len(farm[0]) and 0 <= y < len(farm) and farm[y][x] == 1:
    return True


T = int(input())

for i in range(T):
  main()

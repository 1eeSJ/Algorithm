from collections import deque

def main():
  N, K = map(int, input().split())

  time = search(N, K)
  print(time)

def search(N, K):
  value = [0] * 100001
  visited = [False] * 100001
  que = deque()
  que.append(N)

  while que:
    position = que.popleft()

    if position == K:
      return value[position]

    for nextPos in (position - 1, position + 1, position * 2):
      if 0 <= nextPos and nextPos < 100001 and not visited[nextPos]:
        visited[nextPos] = True
        if nextPos == position * 2 and nextPos != 0:
          value[nextPos] = value[position]
          que.appendleft(nextPos)
        
        else:
          value[nextPos] = value[position] + 1
          que.append(nextPos)

if __name__ == '__main__':
  main()
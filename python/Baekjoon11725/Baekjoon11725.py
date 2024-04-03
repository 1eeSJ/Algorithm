def main():
  N = int(input())
  edge = [[] for _ in range(N + 1)]

  for _ in range(N - 1):
    node1, node2 = map(int, input().split())
    edge[node1].append(node2)
    edge[node2].append(node1)
  
  DFS(N, edge)

def DFS(N, edge):
  root = [0] * (N + 1)
  visited = [False] * (N + 1)

  stack = [1]

  while stack:
    currentPos = stack.pop()
    visited[currentPos] = True

    for node in edge[currentPos]:
      if not visited[node]:
        root[node] = currentPos
        stack.append(node)

  for i in range(2, N + 1):
    print(root[i])

if __name__ =='__main__':
  main()
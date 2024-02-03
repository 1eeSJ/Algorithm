def main():
  computerNum = int(input())
  nodeNum = int(input())
  NODE = [[] for _ in range(computerNum)]

  for i in range(nodeNum):
    v1, v2 = map(int, input().split())
    NODE[v1 - 1].append(v2 - 1)
    NODE[v2 - 1].append(v1 - 1)

  print(graphSearch(NODE))

def graphSearch(NODE):
  visited = [False for _ in range(len(NODE))]
  visited[0] = True
  
  stack = []
  stack += NODE[0]
  
  while(stack):
    currPos = stack.pop()
    if not visited[currPos]:
      visited[currPos] = True
      stack += NODE[currPos]

  return visited.count(True) - 1

if __name__ == '__main__':
  main()
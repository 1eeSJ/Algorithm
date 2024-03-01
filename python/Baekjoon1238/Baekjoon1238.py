import sys
import heapq

def main():
  N, M, X = map(int , sys.stdin.readline().split())
  node = [[] for _ in range(N+1)]

  for _ in range(M):
    start, end, value = map(int, sys.stdin.readline().split())
    node[start].append([end, value])

  distance = dijkstra(N, node)

  print(calculateDistance(distance, X, N))


def dijkstra(N, node):
  distance = [[float('inf') for _ in range(N + 1)] for _ in range(N + 1)]
  for start in range(1, N + 1):
    distance[start][start] = 0

  visited = [[False for _ in range(N+1)] for _ in range(N + 1)]

  for town in range(1, N + 1):
    priorityQue = [(0, town)]

    while priorityQue:
      currWeight, currNode = heapq.heappop(priorityQue)

      if visited[town][currNode]:
        continue

      visited[town][currNode] = True

      for neighbor, weight in node[currNode]:
        newDistance = currWeight + weight
        if distance[town][neighbor] > newDistance:
          distance[town][neighbor] = newDistance
          heapq.heappush(priorityQue, (newDistance, neighbor))
  
  return distance

def calculateDistance(distance, X, N):
  distValue = [0 for _ in range(N + 1)]
  for town in range(1, N + 1):
    distValue[town] = distance[town][X] + distance[X][town]

  return max(distValue)

if __name__ == '__main__':
  main()
import sys
from itertools import combinations

def main():
    N, M = map(int, sys.stdin.readline().split())
    cityMap = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

    solution(N, M, cityMap)

def solution(N, M, cityMap):
    homePosition = []
    storePosition = []
    minDistance = float('inf')

    for i in range(N):
        for j in range(N):
            if cityMap[i][j] == 1:
                homePosition.append([i, j])
            if cityMap[i][j] == 2:
                storePosition.append([i, j])

    for selectStore in combinations(storePosition, M):
        minDistance = min(minDistance, chickenDistance(homePosition, selectStore))

    sys.stdout.write(str(minDistance))


def chickenDistance(homePosition, selectStore):
    chickenDist = 0

    for homePos in homePosition:
        dist = float('inf')

        for storePos in selectStore:
            dist = min(dist, calculateDistance(homePos[0], homePos[1], storePos[0], storePos[1]))

        chickenDist += dist
    
    return chickenDist

def calculateDistance(r1, c1, r2, c2):
    return abs(r1 - r2) + abs(c1 - c2)


if __name__ == '__main__':
    main()
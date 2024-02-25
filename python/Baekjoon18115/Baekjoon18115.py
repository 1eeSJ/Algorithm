from collections import deque

def main():
  N = int(input())
  skillOrder = list(map(int, input().split()))
  skillOrder.reverse()
  solution(N, skillOrder)


def solution(N, skillOrder):
  currentCard = 1
  cardState = deque()

  for skillNumber in skillOrder:
    skill(currentCard, skillNumber, cardState)
    currentCard += 1
  
  print(*cardState)


def skill(currentCard, skillNumber, cardState):
  if skillNumber == 1:
    cardState.appendleft(currentCard)

  if skillNumber == 2:
    cardState.insert(1, currentCard)

  if skillNumber == 3:
    cardState.append(currentCard)

if __name__ == '__main__':
  main()
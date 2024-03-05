import sys
sys.setrecursionlimit(10**9)

def main():
  preOrder = []

  while True:
    try:
      preOrder.append(int(sys.stdin.readline()))
    except:
      break
  
  postOrder(preOrder, 0, len(preOrder) - 1)

def postOrder(preOrder, start, end):
  if start > end:
    return
  mid = end + 1

  for i in range(start+1, end+1):
    if preOrder[i] > preOrder[start]:
      mid = i
      break
  
  postOrder(preOrder, start + 1, mid - 1)
  postOrder(preOrder, mid, end)
  print(preOrder[start])


if __name__ == '__main__':
  main()
def main():
  a, b, c = map(int, input().split())
  print(divideConquer(a, b, c))

def divideConquer(a, b, c):
  if b == 1:
    return a % c
  
  if b % 2 == 0:
    expression = divideConquer(a, b // 2, c)
    return (expression ** 2) % c
  
  if b % 2 == 1:
    expression = divideConquer(a, (b - 1) // 2, c)
    return (a * expression ** 2) % c

if __name__ == '__main__':
  main()
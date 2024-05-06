import sys

def main():
    T = int(sys.stdin.readline())
    for _ in range(T):
        print(solution())


def solution():
    N = int(sys.stdin.readline())
    dp = [[0] * N for _ in range(2)]
    sticker = [list(map(int, sys.stdin.readline().split())) for _ in range(2)]

    dp[0][0] = sticker[0][0]
    dp[1][0] = sticker[1][0]

    if N == 1:
        return max(dp[0][0], dp[1][0])
    
    dp[0][1] = dp[1][0] + sticker[0][1]
    dp[1][1] = dp[0][0] + sticker[1][1]

    if N == 2:
        return max(dp[0][1], dp[1][1])
    
    for i in range(2, N):
        dp[0][i] = max(dp[1][i-2], dp[1][i-1]) + sticker[0][i]
        dp[1][i] = max(dp[0][i-2], dp[0][i-1]) + sticker[1][i]

    return max(dp[0][N-1], dp[1][N-1])


if __name__ == '__main__':
    main()
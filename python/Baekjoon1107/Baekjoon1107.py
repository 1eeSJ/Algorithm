def main():
    N = int(input())
    M = int(input())
    buttonList = list(range(10))
    minCount = [float('inf')]

    if M:
        excursiveButton = list(map(int, input().split()))
        buttonList = [btn for btn in buttonList if btn not in excursiveButton]

        minCount = min(abs(N - 100), remoteControl(minCount, 0, '', N, buttonList))

    else:
        minCount = min(abs(N - 100), len(str(N)))

    print(minCount)
    
def remoteControl(minCount, currentCount, currentChannel, N, buttonList):
    for btn in buttonList:
        currentChannel += str(btn)
        minCount[0] = min(minCount[0], abs(N - int(currentChannel)) + len(currentChannel))
        
        if len(currentChannel) <= len(str(N)):
            remoteControl(minCount, currentCount, currentChannel, N, buttonList)
        
        currentChannel = currentChannel[:-1]
    
    return minCount[0]


if __name__ == '__main__':
    main()
def solution(order):
    answer = 0
    for item in order:
        if item == 'anything':
            answer += 4500
        elif 'cafelatte' in item:
            answer += 5000
        else:
            answer += 4500
    return answer

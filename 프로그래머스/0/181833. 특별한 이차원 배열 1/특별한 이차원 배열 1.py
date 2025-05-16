def solution(n):
    answer = []
    for i in range(n):
        answer.append([1 if c == i else 0 for c in range(n)])
    return answer
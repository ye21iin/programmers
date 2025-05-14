def solution(picture, k):
    result = []
    for r in picture:
        rep = ''.join(c * k for c in r)
        for _ in range(k):
            result.append(rep)
    return result
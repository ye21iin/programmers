def solution(arr, k):
    if k%2 != 0:
        return [x * k for x in arr]
    else:
        return [x + k for x in arr]
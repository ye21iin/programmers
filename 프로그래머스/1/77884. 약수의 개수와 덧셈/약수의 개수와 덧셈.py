def solution(left, right):
    answer = 0
    list1 = []
    
    for i in range(left,right+1):
        for j in range(1,i+1):
            if i%j == 0:
                list1.append(j)
        if len(list1) % 2 == 0:
            answer += i
        else:
            answer -= i
        list1 = []
    
    return answer
function solution(x, n) {
    var answer = [];
    var temp = x
    for(let i = 0;i<n;i++){
        answer.splice(i,0,temp)
        temp = temp + x
    }
    return answer;
}
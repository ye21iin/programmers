function solution(n) {
    var answer = 0;
    const arr = [];
    var cnt = 0;
    
    for (i=1;i<=n;i++){
        if (n%i == 0){
            arr.splice(cnt,0,i)
        }
        cnt += 1;
    }
    
    arr.forEach(num => answer += num)
    return answer;
}
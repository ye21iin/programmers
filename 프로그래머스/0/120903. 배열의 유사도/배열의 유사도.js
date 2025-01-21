function solution(s1, s2) {
    var answer = 0;
    s1.forEach(e=>{
        s2.forEach(el => {
            answer += el === e ? 1 : 0
        })
    })
    return answer;
}
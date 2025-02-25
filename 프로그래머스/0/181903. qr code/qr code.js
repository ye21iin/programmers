function solution(q, r, code) {
    var answer = '';
    [...code].forEach((n,i)=>{
        (i % q === r) && (answer += n);
    })
    return answer;
}
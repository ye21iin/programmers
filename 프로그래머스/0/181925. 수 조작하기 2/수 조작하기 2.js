function solution(numLog) {
    var answer = '';
    for (let i=0; i<numLog.length; i++){
        const v = numLog[i+1] - numLog[i];
        answer += v === 1 ? "w" : v === -1 ? "s" : v === 10 ? "d" : v === -10 ? "a" : '';
    }
    return answer;
}
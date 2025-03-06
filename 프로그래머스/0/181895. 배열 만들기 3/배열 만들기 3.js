function solution(arr, intervals) {
    const answer = []
    intervals.forEach(e => answer.push(...(arr.slice(e[0],e[1]+1))));
    return answer;
}
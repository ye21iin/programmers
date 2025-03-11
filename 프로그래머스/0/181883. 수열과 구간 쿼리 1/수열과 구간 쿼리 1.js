function solution(arr, queries) {
    const answer = [...arr];
    queries.forEach(([a,b]) => {
        for (let i=a; i<b+1; i++){
            answer[i]++;
        }
    })
    return answer;
}
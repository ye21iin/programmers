function solution(arr, queries) {
    var answer = [];
    queries.forEach(el => {
        const s = el[0]; const e = el[1]; const k = el[2];
        const temp = arr.slice(s, e+1);
        temp.sort((a,b) => a-b)
        answer.push(!temp.find(e => e > k)? -1 : temp.find(e => e > k));
    })
    return answer;
}
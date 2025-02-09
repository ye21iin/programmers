function solution(arr, queries) {
    let answer = arr;
    // console.log(answer)
    queries.forEach(el => {
        const s = el[0]; const e = el[1]; const k = el[2];
        for (let i=s; i<e+1; i++){
            arr[i] += i % k === 0 ? 1 : 0;
        // console.log(answer)
        }
    })
    return answer;
}
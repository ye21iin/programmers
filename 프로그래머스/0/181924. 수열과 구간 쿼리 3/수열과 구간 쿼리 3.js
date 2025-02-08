function solution(arr, queries) {
    queries.forEach((el)=>{
        const i = el[0]; const j = el[1];
        const tmp = arr[i];
        arr[i] = arr[j]; arr[j] = tmp;
    })
    return arr;
}
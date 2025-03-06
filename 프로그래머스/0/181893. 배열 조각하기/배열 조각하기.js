function solution(arr, query) {
    let tmp = [...arr];
    query.forEach((e,i)=>tmp = i%2===0 ? tmp.slice(0,e+1) : tmp.slice(e))
    return tmp;
}
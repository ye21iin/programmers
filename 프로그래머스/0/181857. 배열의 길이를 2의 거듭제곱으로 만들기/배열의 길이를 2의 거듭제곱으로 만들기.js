function solution(arr) {
    if(Number.isInteger(Math.log2(arr.length))) return arr;
    let copy = [...arr];
    while(!Number.isInteger(Math.log2(copy.length))){
        copy.push(0);
    }
    return copy;
}
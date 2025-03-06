function solution(arr) {
    const answer = [];
    const index = [];
    arr.forEach((e,i)=> e === 2 ? index.push(i) : '');
    if(index.length === 0) return [-1];
    if(index.length === 1) return [2];
    return arr.slice(index[0],index.pop()+1);
}
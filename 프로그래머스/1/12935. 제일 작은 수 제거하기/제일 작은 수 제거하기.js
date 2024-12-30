function solution(arr) {
    let min = arr.reduce((a,b) => 
        Math.min(a,b), Infinity)
    if (arr.length > 1){
        return arr.filter(x => x !== min);
    }
    else return [-1];
}
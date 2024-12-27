function solution(arr, divisor) {
    var answer = [];
    arr.forEach(x=>{
        if(x%divisor==0){
            answer.push(x);
        }
    })
    return answer.length > 0 ?
        answer.sort(function(a,b){
        return a-b;
    }) : [-1];
}
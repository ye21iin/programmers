function solution(n) {
    var answer = [];
    var temp = n 
    
    for(let i=0;i<12; i++){
        answer.splice(i,0,temp%10); 
        temp = Math.floor(temp/10);
        if (temp < 1){
            break
        }
    }
    return answer;
}
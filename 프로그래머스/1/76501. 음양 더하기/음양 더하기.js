function solution(absolutes, signs) {
    var answer = 0;
    var temp = [];
    for(let i=0;i<absolutes.length;i++){
        if(signs[i] == false){
            temp.push(absolutes[i] * -1);
        }else {temp.push(absolutes[i]);} 
    }
    temp.forEach(x => {
        answer += x;
    })
    return answer;
}
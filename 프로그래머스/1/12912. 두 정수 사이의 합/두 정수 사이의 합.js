function solution(a, b) {
    var answer = 0;
    if (a == b){
        return a;
    }else if (a < b){
        let temp = a;
        for(temp;temp<b+1;temp++){
            answer += temp;
        }
    }else{
        for(let temp = b;temp<a+1;temp++){
            answer += temp
        }
    }
    return answer;
}
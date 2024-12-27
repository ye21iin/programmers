function solution(seoul) {
    let answer = '';
    let idx = 0;
    seoul.forEach(x=>{
        if(x == "Kim"){
            answer = '김서방은 '+ idx + '에 있다';
        }
        else idx++;
    })
    return answer;
}
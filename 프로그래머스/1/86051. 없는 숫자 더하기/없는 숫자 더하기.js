function solution(numbers){
    let answer = 0;
    numbers.forEach(x=>{answer+=x;})
    return 45-answer;
}
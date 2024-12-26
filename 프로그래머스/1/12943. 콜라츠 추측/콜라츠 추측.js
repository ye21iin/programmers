function solution(num) {
    let steps = 0;
    let temp = num;
    
    if (num == 1) return 0;
    while(steps < 500 && temp != 1){
        temp = temp % 2 == 0 ? temp / 2 : temp * 3 + 1;
        steps++;
    }
    return steps == 500 ? -1 : steps;
}
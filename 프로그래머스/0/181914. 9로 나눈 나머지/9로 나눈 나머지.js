function solution(number) {
    // let sum = 0;
    // [...number].forEach(e => sum += +e);
    // return sum%9;
    return [...number].reduce((a,c) => +a + +c)%9
}
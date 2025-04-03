function solution(num_str) {
    return [...num_str].reduce((c,a)=> +a + +c);
}
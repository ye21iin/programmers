function solution(n, t) {
    let cnt = n;
    for (let i=0; i<t; i++){
        cnt *= 2;
    }
    return cnt;
}
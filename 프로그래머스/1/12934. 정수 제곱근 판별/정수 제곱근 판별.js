function solution(n) {
    var t = 1;
    while(t < 50000000){
        if ((n/t)==t){
            return (t+1)*(t+1)
        } else {
            t++
        }
    }
    return -1
}
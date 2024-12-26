function solution(x) {
    var temp = 0
    var lst = [...String(x)].forEach(dt => {
        temp += Number(dt);
    })
    if (x % temp == 0){
        return true;
    } else {
        return false;
    }
}
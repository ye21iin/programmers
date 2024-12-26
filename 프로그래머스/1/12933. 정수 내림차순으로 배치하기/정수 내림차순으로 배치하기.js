function solution(n) {
    let ans = ""
    let a = String(n)
    let arr = [...a]
    arr.sort(function(one, two){
        return two-one
    })
    arr.forEach(x => {
        ans += x;
    })
    return Number(ans);
}
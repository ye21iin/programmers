function solution(arr) {
    var sum = arr.reduce((acc, cur, idx) => {
        return acc += cur
    })
    return sum/arr.length;
}
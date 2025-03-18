function solution(arr) {
    const ans = [];
    arr.forEach(e => ans.push(...new Array(e).fill(e)));
    return ans;
}
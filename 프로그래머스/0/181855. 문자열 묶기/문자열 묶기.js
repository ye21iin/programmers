function solution(strArr) {
    const ans = strArr.map(e => e.length);
    let res = {};
    ans.forEach(e => res[e] = (res[e] || 0 )+1);
    return Math.max(...Object.values(res));
}
function solution(num) {
    let odd = 0; let even = 0;
    num.forEach((e,i) => i % 2 === 0 ? odd += e : even += e)
    return Math.max(odd, even);
}
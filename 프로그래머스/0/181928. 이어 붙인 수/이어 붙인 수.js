function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach(e=>e % 2 === 0 ? even += e : odd += e)
    return +odd + +even;
}
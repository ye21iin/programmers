function solution(num_list, n) {
    const cut = num_list.splice(n)
    return cut.concat(num_list);
}
function solution(my_string, queries) {
    const strArr = [...my_string];
    queries.forEach(el =>strArr.splice(el[0],(el[1]-el[0])+1,...(strArr.slice(el[0],el[1]+1).reverse())))
    return strArr.join('');
}
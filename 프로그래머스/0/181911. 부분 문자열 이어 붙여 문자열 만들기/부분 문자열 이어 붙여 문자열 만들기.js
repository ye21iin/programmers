function solution(my_strings, parts) {
    let answer = '';
    my_strings.map((e, i) => {
        const [ a, b ] = parts[i];
        answer += e.slice(a,b+1);
    })
    return answer;
}
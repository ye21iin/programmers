function solution(num_list, n) {
    const answer = [];
    num_list.forEach((e,i)=> i%n===0 ?answer.push(e):'');
    return answer;
}
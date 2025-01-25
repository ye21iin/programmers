function solution(str1, str2, s) {
    const answer = [...str1]
    answer.splice(s,str2.length, ...str2);
    return answer.join('');
}
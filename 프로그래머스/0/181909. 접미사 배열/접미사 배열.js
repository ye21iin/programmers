function solution(str) {
    const answer = [];
    for (let i=0; i<str.length; i++){
    answer.push([...str].slice(i).join(''));
    }
    return answer.sort();
}
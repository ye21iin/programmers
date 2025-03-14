function solution(myString, pat) {
    const str = [...myString];
    let answer = 0;
    for (let i=0; i<str.length; i++){
        str.slice(i,i+pat.length).join("") === pat && answer++;
    }
    return answer;
}
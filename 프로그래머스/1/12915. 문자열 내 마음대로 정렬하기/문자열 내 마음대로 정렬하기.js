function solution(strings, n) {
    var answer = [];
    strings.forEach(x => {
        answer.push(`${x[n]}${x}`);
    });
    answer = answer.sort();
    let jjinDap = [];
    for (const value of answer.values()){
        jjinDap.push(value.slice(1,));
    }
    return jjinDap;
}
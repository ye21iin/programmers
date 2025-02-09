function solution(l, r) {
    var answer = [];
    const composedByZeroOrFive = (arr) => {
        return arr.every((cur) => cur === "5" || cur === "0");
    };

    for (let i = l; i <= r; i++) {
        const temp = [...String(i)];
        if (composedByZeroOrFive(temp)) {
            answer.push(i);
        }
    }
    
    if(answer.length === 0){
        return [-1];
    }
    return answer;
}

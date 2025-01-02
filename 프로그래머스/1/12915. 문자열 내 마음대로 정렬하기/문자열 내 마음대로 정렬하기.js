function solution(strings, n) {
    let answer = new Map();
    for (const value of strings.values()){
        answer.set(value[n], value);
    }
    let final_dap = [];
    for (const key of [...answer.keys()].sort()){
        final_dap.push(answer.get(key));
    }
    return final_dap;
}
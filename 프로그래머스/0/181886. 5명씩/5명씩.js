function solution(names) {
    const answer = [];

    while(names.length>0){
        const newArr = names.splice(0,5)
        answer.push(newArr)
           }
    return answer.map((e) => e[0]);
}
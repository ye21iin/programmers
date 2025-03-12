function solution(arr) {
    let temp = [...arr];
    let newTemp = logic(temp)
    let count = 0;
    
    while (JSON.stringify(temp) !== JSON.stringify(newTemp)){
        temp = [...newTemp];
        newTemp = logic(temp);
        count++;
    }
    
    // let answer;
    // temp.reduce((a,c) => {
    //     if(a === c){
    //         answer = c;
    //     }
    //     return c
    // })
    // return temp.indexOf(answer)+1;
    return count;
}

const logic = (target) => {
    return target.map(e => e >= 50 && e%2 === 0 ? e /= 2 : e < 50 && e%2 !== 0 ? (e *= 2)+1 : e);
}

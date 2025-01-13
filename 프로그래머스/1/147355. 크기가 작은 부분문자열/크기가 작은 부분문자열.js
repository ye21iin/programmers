function solution(t, p) {
    var answer = [];
    //slice
    let sliceArr = [];
    for (let i = 0; i< t.length - (p.length-1);i++){
        sliceArr.push(t.slice(i, i+p.length));
    }
        
    //if <= p? answer ++
    sliceArr.forEach(e => {
        if( e <= p ){
            answer ++;
        } 
    })
    return answer;
    }   
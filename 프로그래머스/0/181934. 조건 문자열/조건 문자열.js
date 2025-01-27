function solution(ineq, eq, n, m) {
    var answer = [n,ineq,eq,m];
    answer = answer.map(e=>{
        if(e==="!"){
            return;
        }else{
            return e;   
            }
        }).join('')
    return eval(answer) ? 1 : 0;
}
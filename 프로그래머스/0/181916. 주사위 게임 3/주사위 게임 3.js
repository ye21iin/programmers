function solution(a, b, c, d) {
    const sum = {1:0,2:0,3:0,4:0,5:0,6:0};
    [a,b,c,d].forEach(e=>sum[e] += 1);
    const sumArr = Object.entries(sum).filter(e => e[1] !== 0)
    if(sumArr.length === 1){ // 4
        return +sumArr[0][0] * 1111;
    }
    if(sumArr.length === 4){ // 1,1,1,1
        return Math.min(a,b,c,d);
    }
    if(sumArr.length === 3){ // 2, 1, 1
        const tmp = sumArr.filter(e=> e[1] !== 2);
        return +tmp[0][0] * +tmp[1][0];
    }
    if(sumArr.length === 2){ // 2,2 / 1,3
        if(sumArr[0][1] === 2 && sumArr[1][1] === 2){
            return (+sumArr[0][0] + +sumArr[1][0])*Math.abs(+sumArr[0][0] - +sumArr[1][0]);    
        }else{
            return sumArr[0][1] === 3 ? (+sumArr[0][0]*10 + +sumArr[1][0])**2 : (+sumArr[1][0]*10 + +sumArr[0][0])**2;
        }
    }
    return sum;
}
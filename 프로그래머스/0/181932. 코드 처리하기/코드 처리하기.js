function solution(code) {
    let ret = '';
    let mode = 0;
    [...code].forEach((e,idx) => {
        if(e === "1"){
            mode = mode === 0 ? 1 : 0;
        }
        else{
            if(mode === 0){
                ret += idx  % 2 === 0 ? e : '';
            }
            if(mode === 1){
                ret += idx % 2 !== 0 ? e : '';
            }}
    })    
    return !ret.length ? "EMPTY" : ret;
    }
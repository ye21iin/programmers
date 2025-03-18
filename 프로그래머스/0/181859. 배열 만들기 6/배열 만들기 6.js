function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length){
        if(!stk.length){
            stk.push(arr[i]);
            i++;
        } else{
            stk[stk.length-1]===arr[i]?stk.pop():stk.push(arr[i]);
            i++;
        }
    }
    return stk.length ? stk : [-1];
}
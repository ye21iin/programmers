function solution(arr, flag) {
    const ans = [];
    arr.forEach((e,idx) => {
        if(flag[idx]){
            ans.push(...new Array(2*e).fill(e));
        }else {
            for (let i=0; i<e; i++){
                ans.pop();
            }
        }
    })
    return ans;
}
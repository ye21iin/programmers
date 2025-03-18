function solution(arr, k) {
    const ans = [];
    for (let i=0; i<arr.length; i++){
        if (ans.indexOf(arr[i]) === -1) {
            ans.push(arr[i]);
        }
    }
    if(ans.length >= k){
        return ans.slice(0,k);
    }
    const tmp = new Array(k).fill(null);
    ans.forEach((e,i) => tmp[i] = e);
    return tmp.map(e => e === null ? -1 : e);
}
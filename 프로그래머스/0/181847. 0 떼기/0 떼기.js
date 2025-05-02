function solution(n_str) {
    const ans = [...n_str];
    for(i=0;i<n_str.length;i++){
        if([...n_str][i] === '0'){
            ans.shift();
        }else{
            break;
        }
    }
    return ans.join('');
}
function solution(str_list, ex) {
    let ans = ''
    str_list.forEach(e => {
        if(!e.includes(ex)){
            ans = ans+e;
        }})
        return ans;
}
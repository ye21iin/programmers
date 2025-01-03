function solution(s) {
    if(s.length === 4 || s.length === 6){
        const regEx = new RegExp('^\\d+$');
        return regEx.test(s);
    } else return false;
}
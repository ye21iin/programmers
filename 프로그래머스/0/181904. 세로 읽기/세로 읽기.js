function solution(my_string, m, c) {
    var answer = '';
    const temp = [];
    const str = [...my_string];
    for (let i=0; i<Math.floor(my_string.length/m); i++){
        temp.push(str.splice(0,m))
    }
    for (let i=0; i<Math.floor(my_string.length/m); i++){
        answer += temp[i][c-1]
    }
    return answer;
}
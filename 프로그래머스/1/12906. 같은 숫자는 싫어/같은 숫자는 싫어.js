function solution(arr)
{
    const answer = [];
    arr.forEach(e => {
        if(answer.length !== 0){
            answer[answer.length-1] === e ? '' : answer.push(e);
        } else {answer.push(e)}
    })
    return answer;
}
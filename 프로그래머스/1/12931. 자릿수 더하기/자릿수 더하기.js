function solution(n)
{
    var answer = 0; var temp = 0;
    answer += n % 10; temp = Math.floor(n/10);
    for (let i=0;temp != 0;i++){
        answer += temp % 10; 
        temp = Math.floor(temp/10); 
        if (temp == 0){
            break
        }
    }
    return answer;
}
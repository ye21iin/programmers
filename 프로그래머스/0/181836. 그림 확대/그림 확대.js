function solution(picture, k) {
    var answer = [];
    picture.forEach(e => {
        const rep = [...e].map(el => el.repeat(k)).join('');
        for(let i=0; i<k; i++){
            answer.push(rep);
        }
    })
    return answer;
}
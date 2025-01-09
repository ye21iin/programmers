function solution(s) {
    let words = s.split(' ');  // 공백을 기준으로 문자열을 분리
    let result = words.map(word => {  // 각 단어별로 처리
        let transformedWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                transformedWord += word[i].toUpperCase();  // 짝수 인덱스는 대문자
            } else {
                transformedWord += word[i].toLowerCase();  // 홀수 인덱스는 소문자
            }
        }
        return transformedWord;
    });
    return result.join(' ');  // 변환된 단어들을 공백으로 다시 합침
}

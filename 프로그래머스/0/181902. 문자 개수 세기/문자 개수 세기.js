function solution(my_string) {
    var answer = Array(52).fill(0);
    const uppercase = Array(26).fill().map((_, i) => String.fromCharCode(i + 65));
    const lowercase = Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
    const alphabet = uppercase.concat(lowercase);
    [...my_string].forEach(e=>{
        const index = alphabet.indexOf(e);
        (index !== -1) && (answer[index] += 1);
    })
    return answer;
}
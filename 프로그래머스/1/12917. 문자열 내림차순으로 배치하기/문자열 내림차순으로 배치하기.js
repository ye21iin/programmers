function solution(s) {
    // 소문자와 대문자를 분리하여 각각 정렬
    const lowerCase = [...s].filter(x => x === x.toLowerCase()).sort((a, b) => b.localeCompare(a));
    const upperCase = [...s].filter(x => x === x.toUpperCase()).sort((a, b) => b.localeCompare(a));
    
    // 정렬된 소문자와 대문자를 합침 (문제 조건에 따라 소문자가 앞에 오도록)
    return [...lowerCase, ...upperCase].join('');
}
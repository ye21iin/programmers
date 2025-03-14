function solution(myString, pat) {
    const str = [...myString];
    const p = [...pat];
    const tmp = [];
    for (let i=0; i<str.length; i++){
        tmp.push(myString.slice(i, i+p.length));
    }
    return str.slice(0,tmp.lastIndexOf(pat)+1+(p.length-1)).join("");
}
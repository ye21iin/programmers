function solution(myString, pat) {
    return +[...myString].map(e=>e==="A"?"B":"A").join("").includes(pat);
}
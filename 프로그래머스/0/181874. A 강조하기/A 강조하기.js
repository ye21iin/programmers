function solution(myString) {
    return [...myString].map(e => {
        if(e === "a") return "A";
        if(e.toLowerCase() !== e && e !== "A"){
            return e.toLowerCase();
        }
        return e;
    }).join("");
}
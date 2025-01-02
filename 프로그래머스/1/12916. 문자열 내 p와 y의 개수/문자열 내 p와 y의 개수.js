function solution(s){
    let numP = 0;
    let numY = 0;
    s.split('').forEach((x) => {
        numP += x === "p" || x === "P" ? 1 : 0;
        numY += x === "y" || x === "Y" ? 1 : 0;
    })
    return Boolean(numP === numY);
}
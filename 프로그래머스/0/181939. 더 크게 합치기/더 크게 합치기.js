function solution(a, b) {
    a = `${a}`;
    b = `${b}`;
    return +a.concat(b) > +b.concat(a) ? +a.concat(b) : +b.concat(a) ;
}
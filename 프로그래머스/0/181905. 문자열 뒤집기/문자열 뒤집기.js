function solution(str, s, e) {
    const arr = [...str]
    const pushThis = arr.splice(s,e-s+1).reverse()
    arr.splice(s,0,...pushThis)
    return arr.join('')
}
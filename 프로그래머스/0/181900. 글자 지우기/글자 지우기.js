function solution(my_string, indices) {
    const str = [...my_string];
    indices.forEach(e => {
        str.splice(e,1,'')
    })
    return str.join('');
}
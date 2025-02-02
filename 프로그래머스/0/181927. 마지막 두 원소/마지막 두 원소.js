function solution(num_list) {
    const len = num_list.length;
    const temp = num_list.slice(len-2, len);
    num_list.push(temp[0] < temp[1] ? temp[1]-temp[0]:temp[1]*2);
    return num_list;
}
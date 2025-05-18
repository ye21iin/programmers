function solution(arr) {
    const rowCnt = arr.length;
    const colCnt = arr[0].length;

    if (rowCnt > colCnt) {
        const diff = rowCnt - colCnt;
        return arr.map(row => [...row, ...Array(diff).fill(0)]);
    } else if (colCnt > rowCnt) {
        const diff = colCnt - rowCnt;
        const newRows = Array(diff).fill(0).map(() => Array(colCnt).fill(0));
        return [...arr, ...newRows];
    }

    return arr;
}

function solution(arr1, arr2) {
    var answer = [[]];
    for(let i=0;i<arr1.length;i++){
        answer[i] = [];
        for (let j=0;j<arr1[i].length;j++){
            let a = arr1[i][j];
            let b = arr2[i][j];
            let temp = a+b;
            answer[i][j] = temp;
        }
    }
    return answer;
}
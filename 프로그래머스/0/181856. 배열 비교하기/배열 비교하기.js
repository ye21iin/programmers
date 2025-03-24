function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1;
    }else{
        const sumOfArr1 = arr1.reduce((c,a)=>c+a);
        const sumOfArr2 = arr2.reduce((c,a)=>c+a);
        if(sumOfArr1 === sumOfArr2) return 0;
        else{
            return sumOfArr1 > sumOfArr2 ? 1 : -1;
        }
    }
}
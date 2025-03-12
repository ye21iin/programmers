function solution(num_list) {
    return num_list.reduce((a,c)=>{
        let tmp = c;
        let cnt = 0;
        while(tmp > 1){
            tmp = logic(tmp);
            cnt++;
        }
        return a += cnt;
    },0)
}

const logic = n => (n % 2 === 0 ? n : --n) / 2;

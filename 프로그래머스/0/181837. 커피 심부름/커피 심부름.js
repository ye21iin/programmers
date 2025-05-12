function solution(order) {
    let ans = 0;
    order.forEach(e=>{
        switch(e){
            case 'anything':
                ans += 4500;
                break;
            default:
                if(e.includes('cafelatte')){
                    ans += 5000;
                }else{
                    ans += 4500;
                }
        } 
    })
    return ans;
}
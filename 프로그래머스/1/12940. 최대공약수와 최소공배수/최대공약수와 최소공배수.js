function solution(n, m) {
    var answer = [];
    
    // 최대공약수(GCD) 구하기
    const gcd = (a, b) => {
        while(b > 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    // 최소공배수(LCM) 구하기
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    answer.push(gcd(n, m));  // 최대공약수
    answer.push(lcm(n, m));  // 최소공배수
    
    return answer;
}
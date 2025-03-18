function solution(myStr) {
    const dap = myStr.replace(/[abc]/g," ").split(" ").filter(e=>e);
    return dap.length? dap : ["EMPTY"];
}
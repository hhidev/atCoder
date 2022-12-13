function Main(input) {
    const tmp = input.split(" ");
    const N = parseInt(tmp[0], 10);
    const A = parseInt(tmp[1], 10);
    const B = parseInt(tmp[2], 10);
    const target = [];

    for(let n = 1; n <= N; n++) {
        const sArray = String(n).split('').map(Number);
        const sum = sArray.reduce((sum, ele) => sum + ele, 0);
        if (A <= sum && sum <= B) {
            target.push(n);
        }
    }

    const result = target.reduce((sum, ele) => sum + ele, 0);
    console.log(result);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
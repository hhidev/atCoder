function Main(input) {
    const tmp = input.split("\n");
    const A500 = parseInt(tmp[0], 10);
    const B100 = parseInt(tmp[1], 10);
    const C50 = parseInt(tmp[2], 10);
    const X = parseInt(tmp[3], 10);
    let count = 0;

    for (let a = 0; a <= A500; a++) {
        for (let b = 0; b <= B100; b++) {
            for (let c = 0; c <= C50; c++) {
                const sum = 500*a + 100*b + 50*c;
                if(sum === X) {
                  count++;
                }
            }
        }
    }
    console.log(count);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
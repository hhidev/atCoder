function Main(input) {
    const tmp = input.split(" ");
    const N = parseInt(tmp[0], 10);
    const Y = parseInt(tmp[1], 10);

    let x = "-1";
    let y = "-1";
    let z = "-1";

    for(let a = 0; a <= N; a++) {
        for(let b = 0; b <= N; b++) {
            const c = N-a-b;
            const sum = 10000*a + 5000*b + 1000*c;
            if(sum === Y && c >= 0) {
                x = String(a);
                y = String(b);
                z = String(N-a-b);
            }
        }
    }
    console.log(`${x} ${y} ${z}`);
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
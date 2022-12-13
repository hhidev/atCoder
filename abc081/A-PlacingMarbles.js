function Main(input) {
    input = input.split("");
    const first = parseInt(input[0],10);
    const second = parseInt(input[1], 10);
    const third = parseInt(input[2], 10);
    const sum = first+second+third;
    console.log(sum);
  }
   
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));	
function Main(input) {
    input = input.split(" ");
    const first = parseInt(input[0],10);
    const second = parseInt(input[1], 10);
    const answer = first*second;
    
    const result = answer%2
    if (result > 0) {
      console.log('Odd');
    } else {
        console.log('Even');
    }
  }

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));	
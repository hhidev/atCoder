function Main(input) {
    const tmp = input.split("\n");
    var numbers = tmp[1].split(" ");  
    var count = 0;
    var isOdd = false;
  
    while(!isOdd) {
      const newNumbers = [];
      for(const number of numbers){
        const target = parseInt(number, 10);
        if (target % 2 > 0) {
          isOdd = true;
          continue;
        }
        newNumbers.push(target/2);
      }
  
      if(newNumbers.length === numbers.length) {
        count++;
        numbers = newNumbers;
      }
    }
    console.log(count);
  }
  
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));	
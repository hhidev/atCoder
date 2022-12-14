function Main(input) {
    const tmp = input.split("\n");
    const N = parseInt(tmp[0], 10);
    const cards = tmp[1].split(" ").map(Number);
    cards.sort((a, b) => b - a); // 降順ソート
    const aliceCards = cards.filter((e, index) => index%2 === 0);
    const bobCards = cards.filter((e, index) => index%2 != 0);

    const aliceSum = aliceCards.reduce((sum, ele) => sum + ele, 0);
    const bobSum = bobCards.reduce((sum, ele) => sum + ele, 0);
    console.log(aliceSum - bobSum);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
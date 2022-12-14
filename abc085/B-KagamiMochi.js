function Main(input) {
    const tmp = input.split("\n");
    const N = parseInt(tmp[0], 10);
    const mochiList = [];
    for (let index = 0; index < N; index++) {
        mochiList.push(parseInt(tmp[index+1], 10));
    }
    mochiList.sort((a, b) => b - a); //降順ソート

    uniqList = uniq(mochiList);
    console.log(uniqList.length);
}

// 重複削除
function uniq(array) {
    const set = new Set();
    for(const ele of array) {
        set.add(ele);
    }
    return Array.from(set);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
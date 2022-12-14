function Main(input) {
    // inputを後ろから、5~7文字で区切り、textsに含まれているかをチェックしていく
    // 修了条件：inputがなくなったら or textsに含まれていない文字列が出現したら
    input = input.split("\n")[0];
    try {
        while(input.length > 0) {
            input = slicer(input);
        }
        console.log("YES");
    } catch(err) {
        console.log("NO");
    }
}


function slicer(input) {
    const texts = ["dream", "dreamer", "erase", "eraser"];
    for(let index=5; index <= 7; index++){
        const lastStr = input.slice(-index, input.length);
        if(texts.includes(lastStr)) {
            return input.slice(0, input.length-index);
        }
    }
    throw Error("not match");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
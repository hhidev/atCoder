//冗長
function Main(input) {
    const tmp = input.split("\n");
    const H = Number(tmp[0].split(" ")[0]);
    const W = Number(tmp[0].split(" ")[1]);

    // generate all pointer list
    const allPointers = [];
    for (let i = 0; i < H; i++) {
        const elements = tmp[1+i].split("");
        for (let j = 0; j < W; j++) {
            const p = {
                x: i,
                y: j,
                isBomb: elements[j] === "#",
                arroundBombs: 0
            }
            allPointers.push(p);
        }
    }

    // count bombs
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
    const newList = allPointers.map(targetP => {
        if (targetP.isBomb) {
            return targetP;
        }

        for (let i = 0; i < 8; i++) {
            let nextP = {
                x: targetP.x + dx[i],
                y: targetP.y + dy[i]
            };
            const n = allPointers.filter(e => e.x === nextP.x && e.y === nextP.y);
            if (n.length > 0 && n[0].isBomb) {
                targetP.arroundBombs = targetP.arroundBombs + 1
            }
        }
        return targetP
    });

    // W個ずつに文字列を作る（配列にしたので作りづらい
    for (let i = 0; i < H; i++) {
        let result = '';
        for (let j = 0; j < W; j++) {
            const p = newList.filter(e => e.x === i && e.y === j)[0];
            result = result + `${p.isBomb ? "#" : p.arroundBombs}`;
        }
        console.log(result);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
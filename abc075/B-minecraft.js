function Main(input) {
    const tmp = input.split("\n");
    const H = Number(tmp[0].split(" ")[0]);
    const W = Number(tmp[0].split(" ")[1]);

    // generate all pointer list
    const allPointers = [];
    for (let i = 0; i < H; i++) {
        const elements = tmp[1+i].split("");
        allPointers.push(elements);
    }
    // 結果出力用にコピーを作成
    const result = Array.from(allPointers);

    // count bombs
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (allPointers[i][j] === "#") {
                continue;
            }

            // ８方向の爆弾数を調べる
            const arroundBombs = numberOfArroundBombs(i, j, allPointers);
            result[i][j] = arroundBombs;
        }
        console.log(result[i].join("")); //１行ずつ出力
    }

}

function numberOfArroundBombs(targetH, targetW, allPointers) {
    const dh = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dw = [-1, 0, 1, -1, 1, -1, 0, 1];
    let bombs = 0;
    const maxH = allPointers.length;
    const maxW = allPointers[0].length;

    for (let i = 0; i < 8; i++) {
        const nextH = targetH+dh[i];
        const nextW = targetW+dw[i];
        if ((nextH >= 0 && nextW >= 0) && (nextH < maxH && nextW < maxW)) {
            const nextP = allPointers[nextH][nextW];
            if (nextP === "#") {
                bombs = bombs + 1;
            }    
        }
    }
    return bombs;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
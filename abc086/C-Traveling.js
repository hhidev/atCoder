/**
 * 到達可能性
 * - 奇数時間の時に、奇数地点にいること or 偶数時間のとき、偶数地点にいること
 * && 次点までの時間差 >= 距離差
 */
function Main(input) {
    const tmp = input.split("\n");
    const N = tmp[0];
    const list = [];
    for (let index = 1; index <= N; index++) {
        const row = tmp[index].split(" ");
        const prevRow = tmp[index-1].split(" ");
        const t = Number(row[0]);
        const x = Number(row[1]);
        const y = Number(row[2]);
        const p = x + y;
        let d = Math.sqrt(x*x + y*y);
        let timeDif = t;
        if (index > 1) {
            const prevT = Number(prevRow[0]);
            const prevX = Number(prevRow[1]);
            const prevY = Number(prevRow[2]);
            d = Math.sqrt((x-prevX)*(x-prevX) + (y-prevY)*(y-prevY));
            timeDif = t - prevT;
        }
        const e = {
            t: t,
            x: x,
            y: y,
            p: p,
            arrivable: d <= timeDif && ((t % 2 === 0 && p % 2 === 0) || (t % 2 != 0 && p % 2 != 0))
        };
        list.push(e);
    }
    const falsy = list.filter(e => !e.arrivable)
    if(falsy.length > 0) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
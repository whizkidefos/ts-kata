export class Point {
    L: number;
    R: number;
    M: number;

    constructor(L: number, R: number) {
        this.L = L;
        this.R = R;
    }

    draw() {
        console.log('X: ' + this.L + ', Y: ' + this.R);
    }
}

let point: Point = new Point(22, 15);
point.draw();
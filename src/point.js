"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(L, R) {
        this.L = L;
        this.R = R;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.L + ', Y: ' + this.R);
    };
    return Point;
}());
exports.Point = Point;
var point = new Point(22, 15);
point.draw();

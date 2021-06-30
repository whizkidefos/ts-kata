"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var example_1 = __importDefault(require("../src/example"));
describe("Example", function () {
    it("should do a thing", function () {
        var example = new example_1.default();
        expect(example.doAThing()).toEqual(true);
    });
});

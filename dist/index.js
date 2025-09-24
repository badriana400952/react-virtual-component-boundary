"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Virtual = exports.Boundary = void 0;
const Boundary_1 = __importDefault(require("./Boundary"));
exports.Boundary = Boundary_1.default;
const Virtual_1 = require("./Virtual");
Object.defineProperty(exports, "Virtual", { enumerable: true, get: function () { return Virtual_1.Virtual; } });
exports.default = Boundary_1.default;

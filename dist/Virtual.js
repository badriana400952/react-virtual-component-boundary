"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Virtual = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Base renderer
const VirtualBase = ({ name, children, }) => ((0, jsx_runtime_1.jsx)("section", { "data-virtual": name.toLowerCase(), children: children }));
// Proxy + type assertion untuk TypeScript
exports.Virtual = new Proxy({}, {
    get: (_, prop) => {
        return ({ children }) => ((0, jsx_runtime_1.jsx)(VirtualBase, { name: prop, children: children }));
    },
});

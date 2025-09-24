"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Virtual = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Base renderer: semua <VirtualX> akan lewat sini
const VirtualBase = ({ name, children, }) => {
    return ((0, jsx_runtime_1.jsxs)("section", { "data-virtual": name.toLowerCase(), style: {
            border: "1px dashed #888",
            borderRadius: "8px",
            padding: "12px",
            margin: "8px 0",
        }, children: [(0, jsx_runtime_1.jsx)("h3", { style: { margin: "0 0 8px", color: "#555" }, children: name }), children] }));
};
// Proxy: auto-generate semua Virtual*
exports.Virtual = new Proxy({}, {
    get: (_, prop) => {
        if (typeof prop === "string" && prop.startsWith("Virtual")) {
            const DynamicComponent = ({ children, }) => (0, jsx_runtime_1.jsx)(VirtualBase, { name: prop, children: children });
            DynamicComponent.displayName = prop;
            return DynamicComponent;
        }
        throw new Error(`Unknown component: ${String(prop)}`);
    },
});

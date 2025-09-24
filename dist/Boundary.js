"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class Boundary extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // bisa log error ke service monitoring (Sentry, LogRocket, dll)
        console.error("Error caught by Boundary:", error, errorInfo);
    }
    render() {
        var _a;
        if (this.state.hasError) {
            return this.props.fallback || ((0, jsx_runtime_1.jsxs)("div", { className: "p-6 text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold text-red-500", children: "Oops! Something went wrong." }), (0, jsx_runtime_1.jsx)("button", { onClick: () => this.setState({ hasError: false }), className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded", children: "Try Again" })] }));
        }
        return (_a = this.props.children) !== null && _a !== void 0 ? _a : null;
    }
}
exports.default = Boundary;

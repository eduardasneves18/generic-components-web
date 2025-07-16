import React from "react";
import './Button.css';
var Button = function (_a) {
    var className = _a.className, title = _a.title, action = _a.action;
    return (React.createElement("div", { className: className },
        React.createElement("button", { className: "primary", onClick: action }, title)));
};
export default Button;

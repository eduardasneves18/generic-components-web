import React from 'react';
var Modal = function (_a) {
    var isOpen = _a.isOpen, message = _a.message, onClose = _a.onClose, type = _a.type;
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "modal-overlay" },
        React.createElement("div", { className: "modal ".concat(type) },
            React.createElement("div", { className: "modal-content" },
                React.createElement("span", { className: "close", onClick: onClose }, "\u00D7"),
                React.createElement("p", null, message)))));
};
export default Modal;

import React from 'react';
var TextField = function (_a) {
    var id = _a.id, className = _a.className, label = _a.label, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", { className: "fields ".concat(className) },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { type: "text", id: id, className: "input", placeholder: placeholder, value: value, onChange: onChange })));
};
export default TextField;

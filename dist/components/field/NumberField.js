import React from 'react';
var NumberField = function (_a) {
    var id = _a.id, className = _a.className, _b = _a.value, value = _b === void 0 ? 0.00 : _b, label = _a.label, placeholder = _a.placeholder, onChange = _a.onChange;
    return (React.createElement("div", { className: "fields ".concat(className) },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { type: "number", id: id, name: "valor", value: value, min: "1.00", step: "1.00", className: "input", placeholder: placeholder, onChange: onChange })));
};
export default NumberField;

import React from 'react';
var DateField = function (_a) {
    var id = _a.id, className = _a.className, label = _a.label, placeholder = _a.placeholder, onChange = _a.onChange;
    return (React.createElement("div", { className: "fields ".concat(className) },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { type: "date", id: id, name: "data", className: "input", placeholder: placeholder, onChange: onChange })));
};
export default DateField;

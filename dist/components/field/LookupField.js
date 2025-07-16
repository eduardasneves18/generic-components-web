import React from 'react';
import './Field.css';
var LookupField = function (_a) {
    var id = _a.id, value = _a.value, className = _a.className, label = _a.label, options = _a.options, onChange = _a.onChange;
    return (React.createElement("div", { className: "fields ".concat(className) },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement("select", { id: id, className: "select", value: value, onChange: onChange }, options.map(function (option, index) { return (React.createElement("option", { key: index, value: option, style: { color: 'black' } }, option)); }))));
};
export default LookupField;

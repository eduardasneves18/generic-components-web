import React, { useState } from 'react';
import TextField from '../field/TextField';
import LookupField from '../field/LookupField';
import Button from '../button/Button';
var FilterComponent = function (_a) {
    var showFilter = _a.showFilter, okClick = _a.okClick;
    if (!showFilter)
        return null;
    var _b = useState(''), description = _b[0], setDescription = _b[1];
    var _c = useState('PIX'), type = _c[0], setType = _c[1];
    var onChangeDescription = function (event) {
        var value = event.target.value;
        setDescription(value);
    };
    var onChangeTransactionType = function (event) {
        setType(event.target.value);
    };
    return (React.createElement("div", { className: "modal-overlay" },
        React.createElement("div", { className: "modal-filter" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", null,
                    React.createElement("div", { className: "grid-filter" },
                        React.createElement(TextField, { id: "destinatario", className: "text-field", label: "Destinat\u00E1rio", placeholder: "Destinat\u00E1rio", value: description, onChange: onChangeDescription }),
                        React.createElement(LookupField, { id: "tipo-transacao", className: "lookup-field", label: "Tipo de transa\u00E7\u00E3o", options: ["PIX", "TED"], placeholder: "Tipo de transa\u00E7\u00E3o", value: type, onChange: onChangeTransactionType })),
                    React.createElement("div", { className: 'button-filter' },
                        React.createElement(Button, { className: "button", title: "Filtrar", action: function () { return okClick({ description: description, type: type }); } })))))));
};
export default FilterComponent;

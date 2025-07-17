import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
var FilterIconButton = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    var handleClick = function () {
        onClick();
    };
    return (React.createElement("div", { className: className },
        React.createElement("button", { onClick: handleClick, className: "icon-button filter-button" },
            React.createElement(FontAwesomeIcon, { icon: faFilter }))));
};
export default FilterIconButton;

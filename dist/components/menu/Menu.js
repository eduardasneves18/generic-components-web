import React from 'react';
var Menu = function (_a) {
    var items = _a.items, LinkComponent = _a.LinkComponent;
    return (React.createElement("ul", { className: "itens-menu-lateral" }, items.map(function (item) { return (React.createElement(React.Fragment, { key: item.path },
        React.createElement("li", null,
            React.createElement(LinkComponent, { href: item.path, className: "item" }, item.label)),
        item !== items[items.length - 1] && React.createElement("hr", null))); })));
};
export default Menu;

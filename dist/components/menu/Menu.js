// Menu.tsx
import React from 'react';
import Link from 'next/link';
var Menu = function (_a) {
    var items = _a.items;
    return (React.createElement("ul", { className: "itens-menu-lateral" }, items.map(function (item) { return (React.createElement(React.Fragment, { key: item.path },
        React.createElement("li", null,
            React.createElement(Link, { href: item.path, passHref: true, legacyBehavior: true },
                React.createElement("a", { className: "item" }, item.label))),
        item !== items[items.length - 1] && React.createElement("hr", null))); })));
};
export default Menu;

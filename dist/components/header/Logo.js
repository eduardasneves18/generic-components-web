import React from 'react';
var Logo = function (_a) {
    var link = _a.link, appTitlePrimary = _a.appTitlePrimary;
    return (React.createElement("a", { href: link !== null && link !== void 0 ? link : '', className: "yes-bank-header-link" },
        React.createElement("div", { className: "yes-bank-header-yes" }, appTitlePrimary)));
};
export default Logo;

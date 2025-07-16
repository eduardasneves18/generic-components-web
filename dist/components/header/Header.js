import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
var UserName = function (_a) {
    var name = _a.name;
    return (React.createElement("div", { className: "yes-bank-header-user-name" }, name !== null && name !== void 0 ? name : ""));
};
var Header = function (_a) {
    var user = _a.user, type = _a.type, userName = _a.userName, appTitlePrimary = _a.appTitlePrimary;
    if (!user || !type) {
        console.error("Missing required props: user or type");
        return null;
    }
    var renderHeaderContent = function () { return (React.createElement(React.Fragment, null,
        React.createElement(Logo, { link: "/", appTitlePrimary: appTitlePrimary }),
        React.createElement(UserName, { name: userName }),
        React.createElement("div", null,
            React.createElement("a", { href: "/user", className: "yes-bank-header-link" },
                React.createElement(FontAwesomeIcon, { icon: faUser }))))); };
    return React.createElement("header", { className: "yes-bank-header" }, renderHeaderContent());
};
export default Header;

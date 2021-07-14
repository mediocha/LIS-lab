"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var MainHeader = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nbackground-color: var(--primaria);\n\n\n\n\n"], ["\n\nbackground-color: var(--primaria);\n\n\n\n\n"
    //styled components permite que seja feita toda a alteração do css no propro javascript
    //import './styles.css';
])));
//styled components permite que seja feita toda a alteração do css no propro javascript
//import './styles.css';
function Header() {
    return (react_1["default"].createElement(MainHeader, null,
        react_1["default"].createElement("h1", null, "Cabe\u00E7alho")));
}
exports["default"] = Header;
var templateObject_1;

import {$main} from "./HtmlElements.js";
import createHtmlElement from "./HtmlElements.js";

function renderHome() {
    $main.append(createHtmlElement("h1", null, ["welcome"], "Home Page")); 

    return $main;
};

export default renderHome;
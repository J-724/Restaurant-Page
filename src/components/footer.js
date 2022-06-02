import {d, $footer} from "./HtmlElements.js";
import createHtmlElement from "./HtmlElements.js";

function renderFooter() {
    $footer.innerText = "Copyrigth"; 

    return $footer;
};

export default renderFooter;
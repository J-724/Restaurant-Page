import createHtmlElement from "./HtmlElements.js";
import {d, $header} from "./HtmlElements.js";

function navBar() {
    const navBarItems = ["Home", "Menu", "Contact Us"];
    const $nav = d.createElement("div");

    navBarItems.forEach((item) => {
        $nav.append(createHtmlElement('div', null, null, item))
        }
    );

    $nav.classList.add("nav");
    
    return $header.append($nav);  
};

export default navBar;
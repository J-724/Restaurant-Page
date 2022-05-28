import createHtmlElement from "./HtmlElements.js";
import {d, $header} from "./HtmlElements.js"

function navBar() {
    const navBarItems = ["Home", "Menu", "Contact us"];
    const $nav = d.createElement("div")

    navBarItems.forEach((item) => 
        $nav.append(createHtmlElement('div', null, null, item))
    );

    $nav.classList.add("nav");
    $header.append($nav);    
}

export function hello (name) {
    console.log("Mi perrito "+[name]);
};

export {navBar};
import _ from "lodash";
import style from "./style.css";
import navBar from "./components/header.js";
import renderHome from "./components/main_home.js";
import renderMenu from "./components/main_menu.js";
import renderContactUs from "./components/main_contactus.js";
import renderFooter from "./components/footer.js";
import {$main} from "./components/HtmlElements.js"


const LoadPage = (()=>{
    navBar();
    renderHome();
    renderFooter();

    const $nav = document.querySelector('div.nav');
    $nav.addEventListener('click', navigation); 
})();



function navigation (e) {
    console.log(e.target.textContent);

    if (e.target.textContent == "Home"){
        $main.innerHTML = "";
        renderHome();
    } else if (e.target.textContent == "Menu"){
        $main.innerHTML = "";
        renderMenu();
    } else if (e.target.textContent == "Contact Us"){
        $main.innerHTML = "";
        renderContactUs();
    };
}





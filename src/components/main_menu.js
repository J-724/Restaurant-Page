import createHtmlElement from "./HtmlElements.js"; 
import {d, $main} from "./HtmlElements.js";
// import $bruscheta from "../assets/tomato-bruschetta-600x900.jpg";
// import $chicken_parmigiana from "./assets/chicken_parmigiana.png"
// const $chicken_parmigiana = require("./assets/chicken_parmigiana.png");
// const $tiramisu = require("./assets/tiramisu.png");
let $bruscheta = "";

// Menu Elements Factory function
const MenuItem = (name, cost, info, imgSrc, imgAlt) => {
    // console.log(name, cost, info, imgSrc, imgAlt)
    const Item = createHtmlElement("div", null, ["menu-item"], null);
    const Image = createHtmlElement("img", null,  ["menu-img"], null);
            Image.src =  imgSrc;
            Image.alt = imgAlt;
    const ImageDiv = createHtmlElement("div", null, ["menu-img-wrapper"], "Image");
    const contentDiv = createHtmlElement("div", null, ["menu-content"], null);
    const contentArray = [name, cost, info];
    const contentClasses = ["item-name", "item-cost", "item-info"];

    for (let i = 0; i < 3; i++) {
        contentDiv.append(createHtmlElement("div", null, [contentClasses[i]], contentArray[i]));  
    }

    Item.append(ImageDiv, contentDiv);
    return {Item};
};

const menuData = [
    {
        name: "Tomato Bruscheta",
        cost: "$4.00",
        info: "Bread",
        imgSrc: $bruscheta,
        imgAlt: "Tomato Bruscheta",
    },
    {
        name: "Chicken Parmigiana",
        cost: "$18.00",
        info: "Chicken breast with pasta",
        imgSrc: $bruscheta,
        imgAlt: "Chicken Parmigiana",
    },
    {
        name: "Tiramisu",
        cost: "$7.00",
        info: "Layered mascarpone cheese and lady fingers with cafe",
        imgSrc: $bruscheta,
        imgAlt: "Bruscheta de Tomate",
    },
];

function renderMenu() {
    const $bienvenidos = createHtmlElement("p", null, null, "Welcome");
    const $title = createHtmlElement("h1", null, ["gray"], "Menu");
    const $hr = d.createElement("hr");
  
    $main.appendChild($bienvenidos);
    $main.appendChild($title);
    $main.appendChild($hr);
    
    menuData.forEach((item) => {
        // $main.append(MenuItem(item.name, item.cost, item.info, item.imgSrc, item.imgAlt)); 
    });

    // for (let i = 0; i < menuData.length; i++) {
    //     $main.append(MenuItem(menuData[i].name, menuData[i].cost, menuData[i].info, menuData[i].imgSrc, menuData[i].imgAlt))
    // }

    return $main;
}
  
export default renderMenu;

//guide
/* <div class="menu_item">
    <div class="menu-img">
        <img src="" alt="" class="">
    </div>
    //Organize with grid , cost must be at the same level of the name
    <div class="menu-content"> 
        <p class="name"></p>
        <p class="info"></p>
        <p class="cost"></p>
    </div>
</div> */
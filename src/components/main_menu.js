import style from "../style.css";
import createHtmlElement from "./HtmlElements.js"; 
import {d, $main} from "./HtmlElements.js";
import $bruscheta from "../assets/tomato-bruschetta-600x900.jpg";
// import $chicken_parmigiana from "./assets/chicken_parmigiana.png"
// const $chicken_parmigiana = require("./assets/chicken_parmigiana.png");
// const $tiramisu = require("./assets/tiramisu.png");
// let $bruscheta = "";

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
        imgAlt: "Tiramisu",
    },
];

const MenuItem = (name, cost, info, imgSrc, imgAlt) => {
    console.log(name, cost, info, imgSrc, imgAlt);
    console.log(typeof(name), typeof(cost), typeof(info), typeof(imgSrc), typeof(imgAlt));
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
    };
    ImageDiv.append(Image);
    Item.append(ImageDiv, contentDiv);

    return $main.append(Item);
};
 
function renderMenu() {
    const $greet = createHtmlElement("p", null, null, "Welcome");
    const $title = createHtmlElement("h1", null, null, "Menu");
    const $hr = d.createElement("hr");
  
    $main.append($greet, $title, $hr);
    
    menuData.forEach((item) => {
        let data = [item.name, item.cost, item.info, item.imgSrc, item.imgAlt];
        $main.append(MenuItem(...data));
    });

    return $main;
};

  
export {renderMenu};

// const testing = (()=>{
//     console.log(" ");

//     let item1 = menuData[0].name;
//     console.log(typeof(item1));

//     let item2 = JSON.stringify([menuData[1].name, menuData[1].cost,]);
//     console.log(typeof(item2));

//     console.log(item1);
//     console.log(menuData[0])
// })();


//HTML guide
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
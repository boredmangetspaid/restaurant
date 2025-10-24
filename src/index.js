import "./styles.css"
import { homePage } from "./homepage.js"
import {loadMenu} from"./menu.js"
import {footer} from "./footer.js"
function clearPage(){
    document.getElementById("content");
    content.innerHTML="";
    document.getElementById("footer");
    footer.innerHTML="";
}

//home button

const home = document.getElementById("homePage");
home.addEventListener("click",(e)=>{
    clearPage()
    homePage()
})

//menu button

const menu = document.getElementById("menuPage");

menu.addEventListener("click",(e)=>{
    clearPage()
    loadMenu()
})
//about button

//initial load
homePage()
footer()
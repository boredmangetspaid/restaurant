import "./styles.css"
import { homePage } from "./homepage.js"
import {loadMenu} from"./menu.js"
import {clearPage} from "./clearPage.js"

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
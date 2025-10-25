import { footer } from "./footer"
import {menuItem} from "./menuItem.js"
import plainBagelImage from "./assets/plain.png"
export const loadMenu = function loadMenu() {
   const content = document.getElementById("content")
   //container for menu
   const menuContainer = document.createElement("div");
   menuContainer.id ="menuContainer";

   //menu items
   const plainBagel= menuItem("Classic Plain Bagel","$7.60",plainBagelImage)
   menuContainer.appendChild(plainBagel)
    
   content.appendChild(menuContainer)
   footer() 
}
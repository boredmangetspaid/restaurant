import { footer } from "./footer"
import { menuItem } from "./menuItem.js"
import plainBagelImage from "./assets/plain.png"
export const loadMenu = function loadMenu() {
   const content = document.getElementById("content")
   //container for menu
   const menuContainer = document.createElement("div");
   menuContainer.id = "menuContainer";

   //menu items
   const plainBagel = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel)

   const plainBagel2 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel2)

   const plainBagel3 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel3)

   const plainBagel4 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel4)

   const plainBagel5 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel5)

   const plainBagel6 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel6)

   const plainBagel7 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel7)

   const plainBagel8 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel8)

   const plainBagel9 = menuItem("Classic Plain Bagel", "$7.60", plainBagelImage)
   menuContainer.appendChild(plainBagel9)


   content.appendChild(menuContainer)
   footer()
}
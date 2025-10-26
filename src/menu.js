import { footer } from "./footer"
import { menuItem } from "./menuItem.js"
import plainBagelImage from "./assets/plain.png"
import multiBagelImage from "./assets/multigrain.png"
import PoppyBagelImage from "./assets/poppy.png"
import cinnamonBagelImage from "./assets/cinnamon_raisin.png"
import sesameBagelImage from "./assets/sesame.png"

export const loadMenu = function loadMenu() {
   const content = document.getElementById("content")
   //container for menu
   const menuContainer = document.createElement("div");
   menuContainer.id = "menuContainer";

   //classic bagels
   const plainBagel = menuItem("Classic Plain Bagel", "$2.50", plainBagelImage);
   const multiGrainBagel= menuItem("Multi Grain Bagel", "$2.50", multiBagelImage);
   const poppyBagel= menuItem("Classic Plain Bagel", "$2.50", PoppyBagelImage);
   const cinnamonRaisinBagel= menuItem("Classic Plain Bagel", "$2.50", cinnamonBagelImage);
   const sesameBagel= menuItem("Classic Plain Bagel", "$2.50", sesameBagelImage);

   const bagelMenu = [plainBagel,multiGrainBagel,poppyBagel,cinnamonRaisinBagel,sesameBagel];
   
   for (const bagel of bagelMenu){
      menuContainer.appendChild(bagel)
   }

   //bagel sandwiches
  


   

   content.appendChild(menuContainer)
   footer()
}
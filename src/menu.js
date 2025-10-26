import { footer } from "./footer"
import { menuItem } from "./menuItem.js"
import plainBagelImage from "./assets/plain.png"
import multiBagelImage from "./assets/multigrain.png"
import PoppyBagelImage from "./assets/poppy.png"
import cinnamonBagelImage from "./assets/cinnamon_raisin.png"
import sesameBagelImage from "./assets/sesame.png"
import baconAndCheeseSandwichImage from "./assets/bacon_egg_cheese.png"
import loxSandwichImage from "./assets/lox.png"
import pulledPorkSandwichImage from "./assets/pulled_pork.png"
import turkeyClubSandwichImage from "./assets/turkey_club.png"
import bltSandwichImage from "./assets/blt.png"

export const loadMenu = function loadMenu() {
   const content = document.getElementById("content")
   //container for menu
   const menuContainer = document.createElement("div");
   menuContainer.id = "menuContainer";

   //classic bagels
   const plainBagel = menuItem("Classic Plain Bagel", "$2.50", plainBagelImage);
   const multiGrainBagel= menuItem("Multi Grain Bagel", "$2.50", multiBagelImage);
   const poppyBagel= menuItem("Poppy Bagel", "$2.50", PoppyBagelImage);
   const cinnamonRaisinBagel= menuItem("Multi-grain Bagel", "$2.50", cinnamonBagelImage);
   const sesameBagel= menuItem("Sesame Seed Bagel", "$2.50", sesameBagelImage);

   const bagelMenu = [plainBagel,multiGrainBagel,poppyBagel,cinnamonRaisinBagel,sesameBagel];
   
   for (const bagel of bagelMenu){
      menuContainer.appendChild(bagel)
   }

   //bagel sandwiches
  
   const baconAndCheese = menuItem("Bacon and Cheese Sandwich", "$5.50", baconAndCheeseSandwichImage);
   const lox = menuItem("Lox Sandwich", "$5.50", loxSandwichImage);
   const pulledPork= menuItem("Pulled Pork Sandwich", "$5.50", pulledPorkSandwichImage);
   const turkeyClub= menuItem("Turkey Club Sandwich", "$5.50", turkeyClubSandwichImage);
   const bltSandwich= menuItem("BLT Sandwich", "$5.50", bltSandwichImage);

   const sandwichMenu= [baconAndCheese,lox,pulledPork,turkeyClub,bltSandwich]
   
   for (const sandwich of sandwichMenu){
      menuContainer.appendChild(sandwich)
   }

   content.appendChild(menuContainer)
   footer()
}
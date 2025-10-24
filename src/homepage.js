import bannerImage from "../src/assets/banner.png"
import { clearPage } from "./clearPage";
import { footer } from "./footer";
import { loadMenu } from "./menu";

export const homePage = function createHomePage() {
    const content = document.getElementById("content");

    const banner = document.createElement("img");
    banner.src = bannerImage;
    content.append(banner)


    //main area

    const slogan = document.createElement("h2");
    slogan.innerHTML = "Big Fresh Bagels";
    slogan.id = "slogan";
    content.append(slogan);

    const message = document.createElement("p");
    message.innerHTML = "At The Big Bagel, every bagel is handcrafted and baked to golden perfection in our traditional wood-fired oven. Explore our menu to find your favorite flavors or treat yourself to one of our signature bagel sandwiches—fresh, hearty, and made with love."
    message.id = "message";
    content.append(message);

    const menu = document.createElement("button");
    menu.id = "menu";
    menu.innerHTML = "Explore Menu"
    content.append(menu)
    menu.addEventListener("click",(e)=>{
        clearPage();
        loadMenu();
    })
    
    footer()
}

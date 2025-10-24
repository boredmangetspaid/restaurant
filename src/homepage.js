import bannerImage from "../src/assets/banner.png"

export const homePage = function createHomePage() {

    const logo = document.createElement("h1");
    logo.innerHTML = "THE BIG BAGEL";

    const header = document.getElementById("header");
    header.insertBefore(logo, header.firstChild); //puts logo left of nav 
    
    const content = document.getElementById("content");

    const banner = document.createElement("img");
    banner.src = bannerImage;
    content.append(banner)

    
    //main area
    
    const slogan = document.createElement("h2");
    slogan.innerHTML = "Big Fresh Bagels";
    slogan.id="slogan";
    content.append(slogan);
    
    const message = document.createElement("p");
    message.innerHTML = "At The Big Bagel, every bagel is handcrafted and baked to golden perfection in our traditional wood-fired oven. Explore our menu to find your favorite flavors or treat yourself to one of our signature bagel sandwiches—fresh, hearty, and made with love."
    message.id= "message";
    content.append(message);
    
    const menu = document.createElement("p");
    menu.id="menu";
    menu.innerHTML= "Explore Menu"
    content.append(menu)
    //footer

    const footer = document.createElement("footer");
    document.body.append(footer);

    const footerLeft= document.createElement("div");
    footerLeft.id= "footerLeft";

    const contactUs = document.createElement("p");
    contactUs.innerHTML= "CONTACT US";
    footerLeft.append(contactUs);

    const footerEmail= document.createElement("p");
    footerEmail.innerHTML = "theBigBagel@BigBagel.com"

    const footerPhone =document.createElement("p");
    footerPhone.innerHTML="(555)-456-7890"

    footerLeft.append(footerEmail)
    footerLeft.append(footerPhone)
    footer.append(footerLeft);

    const footerRight= document.createElement("div");
    footerRight.id= "footerRight";
    
    const invite =document.createElement("p");
    invite.innerHTML= "VISIT US!"
    
    const hours = document.createElement("p");
    hours.innerHTML="Monday - Friday 9:00 am - 9:00pm"
    
    const location = document.createElement("p")
    location.innerHTML="111 Bagel Street"

    footerRight.append(invite);
    footerRight.append(hours)
    footerRight.append(location)
    footer.append(footerRight)
    



}

export const menuItem = function menuItem(name, price, picture) {

    const item = document.createElement("div") ;
    item.classList.add("menuItem");
    
    const bagelName = document.createElement("h2");
    bagelName.textContent=name;
    item.appendChild(bagelName);

    const bagelPrice = document.createElement("h2");
    bagelPrice.textContent= price;
    item.appendChild(bagelPrice);

    const bagelImg= document.createElement("img");
    bagelImg.src =picture;
    item.appendChild(bagelImg); 
    
    return item;

}
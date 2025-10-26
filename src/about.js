import { footer } from "./footer"
export const loadAbout = function loadAbout(){
    const content = document.getElementById("content");
    const about = document.createElement("p");
    about.innerHTML= `The purpose of this project was to learn how to dynamically generate html with javascript and learn how to use webpack to bundle together html, css, javascript and images.
    `
 
    about.classList.add("about")
    content.appendChild(about)
    footer()
}
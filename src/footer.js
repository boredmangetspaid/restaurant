export const footer = function footer(){
    //footer
    const footer = document.getElementById("footer");
    const footerLeft = document.createElement("div");
    footerLeft.id = "footerLeft";

    const contactUs = document.createElement("p");
    contactUs.innerHTML = "CONTACT US";
    footerLeft.append(contactUs);

    const footerEmail = document.createElement("p");
    footerEmail.innerHTML = "theBigBagel@BigBagel.com"

    const footerPhone = document.createElement("p");
    footerPhone.innerHTML = "(555)-456-7890"

    footerLeft.append(footerEmail)
    footerLeft.append(footerPhone)
    footer.append(footerLeft);

    const footerRight = document.createElement("div");
    footerRight.id = "footerRight";

    const invite = document.createElement("p");
    invite.innerHTML = "VISIT US!"

    const hours = document.createElement("p");
    hours.innerHTML = "Monday - Friday 9:00 am - 9:00pm"

    const location = document.createElement("p")
    location.innerHTML = "111 Bagel Street"

    footerRight.append(invite);
    footerRight.append(hours)
    footerRight.append(location)
    footer.append(footerRight)

}
const product = document.getElementById("product");
const hamburger = document.getElementsByClassName("hamburger");
const list = document.getElementsByClassName("lists");
const hamburgerClick = document.getElementById("hamburgerClick");

product.addEventListener("click", () => {
    document.getElementsByClassName("products")[0].style.visibility = "visible";
})

document.getElementsByClassName("products")[0].addEventListener("mouseleave", () => {
    document.getElementsByClassName("products")[0].style.visibility = "hidden";
})

document.getElementsByClassName("products")[0].addEventListener("click", () => {
    document.getElementsByClassName("products")[0].style.visibility = "hidden";
})

toggle = true;

hamburger[0].addEventListener("click", () => {

    toggle = !toggle

    document.getElementsByClassName("hamburgerProduct")[0].style.display = "none";

    if(toggle){

        hamburger[0].style.transform = "rotate(90deg)";
        document.getElementsByClassName("hamburgerList")[0].style.transform = "translateY(0%)";
        document.getElementsByClassName("hamburgerProduct")[0].style.transform = "translateY(-100%)";
        document.getElementsByClassName("hamburgerProduct")[0].style.display = "flex";

    }else{
        
        hamburger[0].style.transform = "rotate(0deg)";
        document.getElementsByClassName("hamburgerList")[0].style.transform = "translateY(-100%)";
        document.getElementsByClassName("hamburgerProduct")[0].style.transform = "translateY(0%)";

    }

})

list[0].addEventListener("click", () => {

    hamburger[0].style.transform = "rotate(0deg)";
    document.getElementsByClassName("hamburgerList")[0].style.transform = "translateY(-100%)";
    
})

hamburgerClick.addEventListener("click", () => {

    document.getElementsByClassName("hamburgerProduct")[0].style.transform = "translateY(0%)";

})

list[1].addEventListener("click", () => {

    hamburger[0].style.transform = "rotate(90deg)";
    document.getElementsByClassName("hamburgerProduct")[0].style.transform = "translateY(-100%)";

})

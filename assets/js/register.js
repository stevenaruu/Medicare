const fname = document.getElementById("fname");
const email = document.getElementById("regisEmail");
const password = document.getElementById("regisPass");
const confirmPass = document.getElementById("confirmPass");

fname.addEventListener("click", () => {
    document.getElementsByClassName("regisLabel")[0].style.visibility = "visible";
})

fname.addEventListener("mouseleave", () => {
    document.getElementsByClassName("regisLabel")[0].style.visibility = "hidden";
})

email.addEventListener("click", () => {
    document.getElementsByClassName("regisLabel")[1].style.visibility = "visible";
})

email.addEventListener("mouseleave", () => {
    document.getElementsByClassName("regisLabel")[1].style.visibility = "hidden";
})

password.addEventListener("click", () => {
    document.getElementsByClassName("regisLabel")[2].style.visibility = "visible";
})

password.addEventListener("mouseleave", () => {
    document.getElementsByClassName("regisLabel")[2].style.visibility = "hidden";
})

confirmPass.addEventListener("click", () => {
    document.getElementsByClassName("regisLabel")[3].style.visibility = "visible";
})

confirmPass.addEventListener("mouseleave", () => {
    document.getElementsByClassName("regisLabel")[3].style.visibility = "hidden";
})

function validate() {

    let fname = document.getElementById("fname").value.trim();
    let email = document.getElementById("regisEmail").value.trim();
    let pass = document.getElementById("regisPass").value;
    let confirmPass = document.getElementById("confirmPass").value;

    let gender = "";
    let city = "";

    let error = document.getElementsByClassName("error");
    let redInput = document.getElementsByTagName("input");

    let capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(fname === "") {

        error[0].innerHTML = "Name must be filled";
        redInput[0].style.borderBottom = "1px solid red";

        return false;
        
    }else if(fname.length < 5) {

        error[0].innerHTML = "Name must be filled at least 5 letters";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[0].innerHTML = "";
        redInput[0].style.borderBottom = "1px solid #38abab";

    }

    if(email === "") {

        error[1].innerHTML = "Email must be filled";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@").length !== 2){

        error[1].innerHTML = "Email must contain one @ only";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@")[0].length === 0){

        error[1].innerHTML = "In front of @ must have letter";
        redInput[1].style.borderBottom = "1px solid red";1
        return false;

    }else if(email.split("@")[1].length === 0){

        error[1].innerHTML = "In behind of @ must have letter";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(!email.split("@")[1].includes(".")){

        error[1].innerHTML = "In behind of @ must have .";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@")[1][0] === '.'){

        error[1].innerHTML = ". cannnot be placed after or before @";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[1].innerHTML = "";
        redInput[1].style.borderBottom = "1px solid #38abab";

    }


    if(document.getElementById("male").checked){

        gender = document.getElementById("male").value;

    }else if(document.getElementById("fmale").checked){

        gender = document.getElementById("fmale").value;

    }else if(gender === ""){

        error[2].innerHTML = "Gender must be filled";

        return false;

    }else {

        error[2].innerHTML = "";

    }

    if(document.getElementById("jkt").selected){

        city = document.getElementById("jkt").value;

    }else if(document.getElementById("jgl").selected){

        city = document.getElementById("jgl").value;

    }else if(document.getElementById("bgr").selected){

        city = document.getElementById("bgr").value

    }else if(document.getElementById("jpg").selected){

        city = document.getElementById("jpg").value

    }else if(city === ""){

        error[3].innerHTML = "City must be filled";

        return false;

    }else{

        error[3].innerHTML = "";

    }

    if(pass === ""){

        error[4].innerHTML = "Password must be filled";
        redInput[4].style.borderBottom = "1px solid red";

        return false;

    }else if(pass.length <= 8){

        error[4].innerHTML = "Password at least contains 8 letters";
        redInput[4].style.borderBottom = "1px solid red";

        return false;

    }else if(!capital.some(e => pass.includes(e))){

        error[4].innerHTML = "Password at least contains uppercase letter";
        redInput[4].style.borderBottom = "1px solid red";

        return false;

    }else if(!number.some(e => pass.includes(e))){

        error[4].innerHTML = "Password at least contains number";
        redInput[4].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[4].innerHTML = "";
        redInput[4].style.borderBottom = "1px solid #38abab";

    }

    if(confirmPass !== pass){

        error[5].innerHTML = "Password must same";
        redInput[5].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[4].innerHTML = "";
        redInput[4].style.borderBottom = "1px solid #38abab";

    }

    alert("Welcome, " + fname + " your account registered!");
    return true;

}
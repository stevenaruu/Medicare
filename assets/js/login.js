const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("click", () => {
    document.getElementsByTagName("label")[0].style.visibility = "visible";
})

email.addEventListener("mouseleave", () => {
    document.getElementsByTagName("label")[0].style.visibility = "hidden";
})

password.addEventListener("click", () => {
    document.getElementsByTagName("label")[1].style.visibility = "visible";
})

password.addEventListener("mouseleave", () => {
    document.getElementsByTagName("label")[1].style.visibility = "hidden";
})

function validate() {

    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;

    let error = document.getElementsByClassName("error");
    let redInput = document.getElementsByTagName("input");

    let capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(email === "") {

        error[0].innerHTML = "Email must be filled";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@").length !== 2){

        error[0].innerHTML = "Email must contain one @ only";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@")[0].length === 0){

        error[0].innerHTML = "In front of @ must have letter";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@")[1].length === 0){

        error[0].innerHTML = "In behind of @ must have letter";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else if(!email.split("@")[1].includes(".")){

        error[0].innerHTML = "In behind of @ must have .";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else if(email.split("@")[1][0] === '.'){

        error[0].innerHTML = ". cannnot be placed after or before @";
        redInput[0].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[0].innerHTML = "";
        redInput[0].style.borderBottom = "1px solid #38abab";

    }

    if(pass === ""){

        error[1].innerHTML = "Password must be filled";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(pass.length <= 8){

        error[1].innerHTML = "Password at least contains 8 letters";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(!capital.some(e => pass.includes(e))){

        error[1].innerHTML = "Password at least contains uppercase letter";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else if(!number.some(e => pass.includes(e))){

        error[1].innerHTML = "Password at least contains number";
        redInput[1].style.borderBottom = "1px solid red";

        return false;

    }else{

        error[0].innerHTML = "";
        redInput[0].style.borderBottom = "1px solid #38abab";

    }


    alert("Welcome back " + email + "!");
    return true;

}

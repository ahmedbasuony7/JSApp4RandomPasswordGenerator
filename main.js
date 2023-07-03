const inputSlider = document.getElementById("inputSlider");
const slidertValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEle = document.getElementById("lowercase");
const uppercaseEle = document.getElementById("uppercase");
const numbersEle = document.getElementById("numbers");
const symbolEle = document.getElementById("symbol");
const generateBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copyIcon");


const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const numbers =  "0123456789";
const symbol = "!@#$%^&*()[]{}\\|;':\",./<>?";

slidertValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    slidertValue.textContent = inputSlider.value;
});


generateBtn.addEventListener("click",()=>{
    passBox.value = gereatePassword();


});
function gereatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let passwordValue = "";

    characters += lowercaseEle.checked ? lowerCaseLetters : "";
    characters += uppercaseEle.checked ? upperCaseLetters : "";
    characters += numbersEle.checked ? numbers : "";
    characters += symbolEle.checked ? symbol : "";

    for(let i =0; i< length; i++){
        passwordValue  += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return passwordValue;

}
copyIcon.addEventListener("click",()=>{
    if(passBox.value != "" || passBox.value >= 10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "checked";
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            passBox.value = "";

        },3000);

    }

});

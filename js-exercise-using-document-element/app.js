let productName=document.getElementById("product-name");
let remainingChars=document.getElementById("remaining-chars");

let maxAllowedChars=productName.maxLength;

function countChars(event){
    let enteredText=event.target.value;
    let textlength=enteredText.length;
    remainingChars.textContent=maxAllowedChars-textlength;
}
productName.addEventListener('input',countChars);
let productName=document.getElementById("product-name");
let remainingChars=document.getElementById("remaining-chars");

let maxAllowedChars=productName.maxLength;

function countChars(event){
    let enteredText=event.target.value;
    let textlength=enteredText.length;
    remainingChars.textContent=maxAllowedChars-textlength;

    if(maxAllowedChars-textlength<=10)
    {
        remainingChars.style.color="red";
        document.querySelector("button").classList="warning";
    }
    else
    {
        remainingChars.style.color="black";
        document.querySelector("button").classList.remove("warning");
    }
       
}
productName.addEventListener('input',countChars);
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calc_display");
const all_btns = document.querySelectorAll("button");
let displayValue = "";

all_btns.forEach(button => {
    button.addEventListener("click", (e) => {
        buttonText =  e.target.innerText;
        console.log(buttonText);
        if (buttonText == "AC") {
            displayValue = "";
            display.innerHTML = displayValue;
        }
        else if (buttonText === "=") {
            display.innerHTML = eval(displayValue);
        }
        else {
            displayValue += buttonText;
            display.innerHTML = displayValue;
        }
    })
});

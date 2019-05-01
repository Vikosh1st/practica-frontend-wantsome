//iterati peste toate butoanele si pentru fiecare in parte adaugati un eventListener pentru click si o functie callback 
//care sa printeze in consola "button clicked!"

let  allButtons = document.querySelectorAll(".social-media");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", () => {
      console.log("button clicked!");
    })
}

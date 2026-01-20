const buttons = document.querySelectorAll(".subjects button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("MCQs for " + button.innerText + " coming soon on TestPoint!");
    });
});

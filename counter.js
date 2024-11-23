const countDisplay=document.getElementById("count-display")
const increaseBtn=document.querySelector(".increase")
const decreaseBtn=document.querySelector(".decrease")
const resetBtn=document.querySelector(".reset")

let count=0
function updateDisplay() {
countDisplay.textContent=count;
}

increaseBtn.addEventListener("click" ,function(){
    count++;
    updateDisplay()
});

decreaseBtn.addEventListener("click", function(){
    count--;
    updateDisplay()
});

resetBtn.addEventListener("click" ,function(){
    count=0;
    updateDisplay()
});
const increase = document.querySelector(".more");
const decrease = document.querySelector(".less");
var num = document.querySelector(".mainNum");

function increment () {
   num.innerHTML = Number(num.textContent) + 1;
}
function decrement () {
    num.innerHTML = Number(num.textContent) -1;
}

increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
let heading = document.querySelector("h3");
let box = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    rndNum1 = Math.floor((Math.random()*255));
    rndNum2 = Math.floor((Math.random()*255));
    rndNum3 = Math.floor((Math.random()*255));
    box.style.backgroundColor = `rgb(${rndNum1}, ${rndNum2}, ${rndNum3})`;
    heading.innerText = `rgb(${rndNum1}, ${rndNum2}, ${rndNum3})`;
})
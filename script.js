const input = document.querySelector("#input-box");
const h1Btn = document.querySelector("#h1-btn");
const h2Btn = document.querySelector("#h2-btn");
const h3Btn = document.querySelector("#h3-btn");
const h1Output = document.querySelector("#heading1");
const h2Output = document.querySelector("#heading2");
const h3Output = document.querySelector("#heading3");

function changeHeading1(){
  h1Output.innerHTML = input.value;
}

function changeHeading2(){
  h2Output.innerHTML = input.value;
}

function changeHeading3(){
  h3Output.innerHTML = input.value;
}

h1Btn.addEventListener("click", changeHeading1)
h2Btn.addEventListener("click", changeHeading2)
h3Btn.addEventListener("click", changeHeading3)
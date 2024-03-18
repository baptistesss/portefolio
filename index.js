const theme = document.querySelector(".theme");
const body = document.querySelector("body")

theme.addEventListener("click", function(){
    body.classList.toggle('dark');
})



let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let temperature=document.querySelector(".temperature")


btn.addEventListener("click",()=>{
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=8ca22bac8119a429ef827c189f34e63f&units=metric`
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    temperature.innerHTML=data.main.temp
  });
})
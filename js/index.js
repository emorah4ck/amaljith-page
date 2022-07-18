let togglelogo = document.getElementById('burger-menu')
let menu = document.querySelector('.nav-items')
// lern more 
let lernMore = document.querySelector('.Learn-More')
let hireMe= document.querySelector('.Hire-me')
let paraGraph= document.querySelector('.sec-cnt-para')

// function 
togglelogo.addEventListener("click",function(){
  menu.classList.toggle('isactive')
})

lernMore.addEventListener("click",function(){
  paraGraph.innerText = "use our free english to malayalam translator, just paste your english text into and translate it into malayalam.use our free english to malayalam translator, just paste your english text into and translate it into malayalam"
})
hireMe.addEventListener("click",function(){
  paraGraph.innerText = "use our free english to malayalam translator, just paste your english text into and translate it into malayalam."
})

let message=()=>{
  alert("The message option is not s working backend team working the website rebuild ")
}
let follow=()=>{
  alert("The followoption is not s working backend team working the website rebuild")
}
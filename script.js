let menu = document.querySelector(".menu_img");
let nav = document.querySelector(".menu");
let navContent = document.querySelector(".navigation");


menu.addEventListener("click",function(){
  navContent.classList.toggle("show");
})

window.onclick = function(event){
  if(!event.target.matches(".menu_img")){
    
    if(navContent.classList.contains("show")){
        navContent.classList.remove("show");
    }
  }
}


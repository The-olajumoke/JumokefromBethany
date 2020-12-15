let nav = document.getElementById("navbar");
let navTop = nav.offsetTop;

function fixedNav(){
  if (window.scrollY >= navTop){
    nav.classList.add("fixee");
  }else{
    nav.classList.remove('fixee');
  }
}
window.addEventListener("scroll", fixedNav)

//*********** */ BUTTONS

const btnArr= document.querySelectorAll(".itembtn");
const imgArr= document.querySelectorAll(".itemImg");
let allBtn= document.querySelector('#all');
let allBtnImg= document.querySelector('#all-img');
allBtnImg.style.display="block"

for(i=0; i<btnArr.length; i++){
    btnArr[i].addEventListener("click", showContent);
   }
   function showContent(x){
       btnArr[i]
    for(i=0; i<imgArr.length; i++){ 
        imgArr[i].style.display="none";
    }

imgArr.forEach(img=>{
    if(img.id=== (`${x.target.id}-img`))img.style.display="block"})
}


// TESTIMONial

jQuery(document).ready(function($) {
    "use strict";
    $('#testimonials-list').owlCarousel({
        loop: true,
        // center: true,
        items: 2,
        margin:50,
        autoplay: true,
        dots:true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 2
          }
        }
    });
});


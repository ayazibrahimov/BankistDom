'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const containerTab = document.querySelectorAll(".operations__tab-container")
const tabs = document.querySelectorAll(".operations__tab ")
const content = document.querySelectorAll(".operations__content")
const nav = document.querySelector(".nav")



const openModal = function (e) {
  
 e.preventDefault()


  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener("click",openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////

/////nav opacity


const controlHandler = function(e){
  if(e.target.classList.contains('nav__link')){
  
    const link = e.target
  
    const list = link.closest(".nav").querySelectorAll(".nav__link")
  
    const logo = link.closest(".nav").querySelector("img")
  
  
  
    list.forEach((el)=>{
      if(el!==link) el.style.opacity=this
      
    })
     
    logo.style.opacity=this
  
     
  
  }
}






nav.addEventListener("mouseover",controlHandler.bind(0.5))

nav.addEventListener("mouseout",controlHandler.bind(1))








///smooth scrool

document.querySelector('.btn--scroll-to').addEventListener('click',function(){


  let sectionScroll = document.querySelector("#section--1")

  sectionScroll.scrollIntoView({behavior:"smooth"})
})





///clicked link going to sections

document.querySelector(".nav__links").addEventListener('click',function(e){
  
  e.preventDefault()


  if(e.target.classList.contains("nav__link")){
   
   const id = e.target.getAttribute("href")

   document.querySelector(id).scrollIntoView({behavior:"smooth"})
  }

})


///////



containerTab.forEach((e)=>e.addEventListener("click",function(e){
 
  const clicked =e.target.closest(".operations__tab")

 

  if(!clicked) return


  ///remve class

  tabs.forEach((e)=>e.classList.remove("operations__tab--active"))
  content.forEach((t)=>t.classList.remove("operations__content--active"))
  ///add class

  clicked.classList.add("operations__tab--active")
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")


}))





















//
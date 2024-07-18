console.log("Welcome To Food Mania");

// sidebar
const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const sidebox = document.querySelector(".sidebox");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sideboxOpen = document.querySelector("#sideboxOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sideboxOpen.addEventListener("click", () => sidebox.classList.toggle("close"));


sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("fa-sun", "fa-moon");
  } else {
    darkLight.classList.replace("fa-moon", "fa-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
// image-slider
const slides = document.querySelectorAll('.myslides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')


let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity='1'

// positioning the slides

slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});


// move slide function

const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}

// remove dots opacity 1 from all dots

const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
  })
});

// show the previous slide

prevBtn.addEventListener('click',()=>{
  if(index===0) return index;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// show the next slide

nextBtn.addEventListener('click',()=>{
  if(index===slides.length-1) return index;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// auto play slide

const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
}

window.onload=()=>{
   setInterval(autoPlaySlide,6000);
}

//minislider auto
let slideIndex = 0;
showSlides();

function showSlides(){
  let i ;
  let slider = document.getElementsByClassName("image");
  let dott = document.getElementsByClassName("slickdot");
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slider.length) {slideIndex = 1}    
  for (i = 0; i < dott.length; i++) {
    dott[i].className = dott[i].className.replace(" active", "");
  }
  slider[slideIndex-1].style.display = "block";  
  dott[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}
// Category Search bar
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  var query = document.getElementById('searchInput').value;
  var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);

  window.open(googleSearchUrl,'_blank');
});


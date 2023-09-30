console.log("Welcome to Food Mania");

const slides= document.querySelectorAll('.item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let index = 0;

//positioning the slides
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
  });
//move the slides
  const moveSlide = () =>{
    slides.forEach((slide)=>{
      slide.style.transform=`translateX(-${index*100}%)`;
    });
  }
//previous slide
  prevBtn.addEventListener('click',()=>{
    if(index===0) return index;
    index--;
    moveSlide();
  });
//next slide
  nextBtn.addEventListener('click',()=>{
    if(index===slides.length-1) return index;
    index++;
    moveSlide();
  });
//automatic slideshow after 6 sec
  const autoPlaySlide = () =>{
    if(index===slides.length-1) index= -1;
    index++;
    moveSlide();
  }
  window.onload=()=>{
     setInterval(autoPlaySlide,6000);
  }


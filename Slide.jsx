import React from 'react'
import Wheat from './images/wheat.jpg'
import Beverage from './images/beverage.jpg'

const Slide = () => {
  return (
    <>
    <div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={Wheat} alt='IMAGE'/>
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={Beverage} alt='IMAGE2'/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={Beverage} alt='IMAGE3' />
  <div className="text">Caption Three</div>
</div>

<a className="prev" onClick="plusSlides(-1)">&#10094;</a>
<a className="next" onClick="plusSlides(1)">&#10095;</a>
</div>
<br/>

<div >
<span className="dot" onClick="currentSlide(1)"></span>
<span className="dot" onClick="currentSlide(2)"></span>
<span className="dot" onClick="currentSlide(3)"></span>
</div>

</>
  )
}
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

export default Slide
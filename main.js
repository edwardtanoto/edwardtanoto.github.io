const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
   }
  
   //Type Method
   TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
     // Get full text of current word
    const fullTxt = this.words[current];
  
    // Check if deleting
     if(this.isDeleting) {
       // Remove char
       this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
       // Add char
       this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
  
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
     // Initial Type Speed
     let typeSpeed = 300;
  
    if(this.isDeleting) {
      typeSpeed /= 2;
     }
  
     // If word is complete
     if(!this.isDeleting && this.txt === fullTxt) {
       // Make pause at end
      typeSpeed = this.wait;
       // Set delete to true
       this.isDeleting = true;
     } else if(this.isDeleting && this.txt === '') {
       this.isDeleting = false;
       // Move to next word
       this.wordIndex++;
       // Pause before start typing
       typeSpeed = 500;
     }
  
     setTimeout(() => this.type(), typeSpeed);
   };
    
    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);
    
    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
  

function sayHello(language) {
	var arrHellos = {
		"Chinese" : "你好世界",
		"Indonesian" : "Halo Dunia",
		"English" : "Hello world",
		"Japanese" : "こんにちは世界",
	};
	alert(arrHellos[language]);
}



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:500,
      loop:true,
      autoHeight:true,
      items:1,
      nav:true
      
  })

  
})

$(function(){
  $('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
&& 
location.hostname == this.hostname
) {
// Figure out element to scroll to
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// Does a scroll target exist?
if (target.length) {
// Only prevent default if animation is actually gonna happen
event.preventDefault();
$('html, body').animate({
scrollTop: target.offset().top
}, 1000, function() {
// Callback after animation
// Must change focus!
var $target = $(target);
$target.focus();
if ($target.is(":focus")) { // Checking if the target was focused
  return false;
} else {
  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  $target.focus(); // Set focus again
};
});
}
}
});
})

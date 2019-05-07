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
  



jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},8000);
	});
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:1000,
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

const language = document.getElementById('language');
const output = document.getElementById('output');

const tryme= "Language the method of human communication,<br> that has huge role to let our 'voice' out.<br><br> English is my most comfortable global language to speak with people.<br> <br>I speak anime language as well, I took Japanese language course in my high school<br><br> As for Mandarin, I speak it for daily life only, you can call me 陈 .<br>";

const indo = "Halo! Saya Edward, dari Jakarta.<br><br> Saya hobby main komputer dari SD, terutama main game. Pas SMA, saya baru mulai belajar coding.<br><br> Coding itu pertama-tama asing　karena kita di sekolah ga diajarin apa-apa, tapi setelah kita lewatin stress-stessnya, coding jadi semakin seru, tetep susah, tapi lebih seru.<br><br> Saya berharap bisa menggunakan bakat dan talenta untuk dunia yang lebih baik. ";
const english = "Hi! My name is Edward <br><br>I am 17 years old, loved computer since kids and never seen code until 16 . Wait, I typed tracert and ipconfig in cmd on 15, which made me look really cool, did that count? <br><br> My first time learning code was in an app called Sololearn in my phone, simple console.log('Hello World') until a lot of complicated things.<br><br>I also enjoy doing other stuff like video editing, playing video games, and creating cool things.";
const japanese = "はじめまして、エドワドと申します。<br><br>私はじゅうななさい、  <br><br> インドネシアからきました、<br><br> コンピュウタプログラミングが大好き、 <br><br> よろしくおねがいします。 ";
const mandarin = "您好，我的名字是陈永德。<br><br>我来自印尼 . 我想成为程序员。<br><br>我喜欢玩电脑和听音乐。<br><br>祝你今天愉快.";


language.addEventListener('change',sayHello)

function sayHello(language) {
    language = document.getElementById('language').value
    if(language === "English"){
        output.innerHTML = english;
    } else if(language === "Japanese"){
        output.innerHTML = japanese;
    }
      else if(language === "Chinese"){
        output.innerHTML = mandarin;
    }
      else if(language === "Indonesian"){
        output.innerHTML = indo;
    }
      else if(language === "Try me"){
        output.innerHTML = tryme;
  }
}
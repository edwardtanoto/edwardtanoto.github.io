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
     let typeSpeed = 200;
  
    if(this.isDeleting) {
      typeSpeed /= 2;
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
       
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } 
      });
    });


    function buttonOne(){
      
      if(true){
        document.getElementById('change_color').style.color = 'red'
      }
    }
      
    
    function buttonTwo(){
      if(document.getElementById('change_color').style.color === 'red'){
        if(true){
          document.getElementById('change_color').style.color = 'white'
        }
      } else{
        alert("You can't lost something you haven't gained")
      }
    }

    function buttonThree(){
      if(true){document.getElementById('light').style.color = 'red'}
      
      document.body.style.color="white";
      setInterval(function(){ alert("Thy shalt return to time without chaos, restart this whole creation the developer made. Bring back the dark fonts. Only you are capable of saving this web."); }, 5000);
    }

    function buttonFour(){
      if(document.getElementById('asd').value == 'I want to fly across the galaxy')
      {
        document.getElementById('asd').style.color = "red"
        document.getElementById('asd').value = 'Let the dark magic flows through me one last time'

      } else{
        alert("No magic can be invoked")
      }
      
    }
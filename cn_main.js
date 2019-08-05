//Loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 7000);
  setTimeout(typeAnim, 7000);
  
}

init();


//Day and Night Toggle
let wallpaper = ["url('images/night.jpg')","url('images/bg2.jpg')","url('images/bg3-night.jpg')","url('images/bg3.jpg')","url('images/bg4.2_2.jpg')","url('images/bg4-night.jpg')"]
var checkbox = document.querySelector("input[type=checkbox]");

function toggleWallpaper(element,dayOrNight){
    document.querySelector(element).style.backgroundImage = wallpaper[dayOrNight]
    document.querySelector(element).style.WebkitTransition = "all 2s"
    document.querySelector(element).style.transition = "all 2s"
}

if(checkbox){
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            toggleWallpaper('.main',0)
            toggleWallpaper('.skill',2)
            toggleWallpaper('#profile-section',5)
        } else {
            toggleWallpaper('.main',1)
            toggleWallpaper('.skill',3)
            toggleWallpaper('#profile-section',4)
        }
    });
    
}

const date = new Date();

console.log(date.getHours())

function toggleTime(){
    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 18

    if(!isDayTime){
        checkbox.checked = true
        toggleWallpaper('.main',0)
        toggleWallpaper('.skill',2)
        toggleWallpaper('#profile-section',5)
    } else {
        checkbox.checked = false;
        toggleWallpaper('.main',1)
        toggleWallpaper('.skill',3)
        toggleWallpaper('#profile-section',4)
    }
}

window.addEventListener('DOMContentLoaded',toggleTime)

//Type Animation
let summary = document.querySelector('.about');

let htmlSummaryText = `<div class="summary"></div>`
summary.innerHTML+= htmlSummaryText;

let summaryTextValue = `你好，世界! 我叫 Edward,我是 University of Nottingham Ningbo 的计算机科学的学生，也是多情的程序员。<br><br> 我来这里要一起帮助更好的改变，也要一起学习.`

let summaryText = document.querySelector(".summary");
summaryText.innerHTML = '';

//type animation summary
let wordIndex = 0;

function typeAnim(){
    let text = '';
    text = summaryTextValue.substring(0, text.length + wordIndex);
    summaryText.innerHTML = text
    if(wordIndex!=summaryTextValue.length){
        setTimeout(typeAnim, 50);
        wordIndex++;
    }
}

//Side Bar
$(document).ready(function(){
    $(".toggle_menu").click(function(){
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
	});
	$(".fa-times").click(function(){
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
	});

	
});
$('.port-item').click(function(){
    $('.collapse').collapse('hide');
  });

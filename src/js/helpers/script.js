// AOS ANIMATIONS
$(document).ready(function(){
  AOS.init({
 duration: 1300
});
});

// ROTATE MENU EFFECT
$(function(){
  $('.menu').click(function(){
    $('.menu').toggleClass('rotateEffect');
  });
});

// TOGGLE MENU BUTTON
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

// SCROLL TO HASH
$(document).ready(function(){
  $('a[href*="#"]').on('click', function(event){

    $('#overlay').removeClass("open");
    $('.menu').toggleClass('rotateEffect');
    // event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  });
});
// $(document).ready(function(){
// var Vue = require('vue');
// var VueScrollTo = require('vue-scrollto');
//
// Vue.use(VueScrollTo)
//
// // You can also pass in the default options
// VueScrollTo.setDefaults({
//     container: "body",
//     duration: 500,
//     easing: "ease",
//     offset: 0,
//     cancelable: true,
//     onStart: false,
//     onDone: false,
//     onCancel: false,
//     x: false,
//     y: true
// })
//  })
//  });

// BACKGROUND SLIDE COLOR CHANGE
$(document).ready(function() {

    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {

          var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

        }
      });

  });


// ROTATING WORDS
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

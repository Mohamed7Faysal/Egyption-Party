/// <reference types="../@types/jquery" />

const textarea = document.getElementById('myTextarea');
const charCountMessage = document.getElementById('charCountMessage');
const maxCharCount = 100;

window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.loading-screen').style.display = 'none';
  }, 1000);
});

// openNav
  $(".openNav").on("click",function(){
    $("#leftMenu").animate({width: "250px"} , 1000)
    $("#home-content").animate({marginLeft: "250px"} , 1000)
    console.log("done");
  })

  // closeNav
  $(".closebtn").on("click",function(){
    $("#leftMenu").animate({width: "0"} , 1000)
    $("#home-content").animate({marginLeft: "0px"} , 1000)

    console.log("done");
  })

// =============================

  $(".toggle").on("click",function(){
    var toggleDiv = $(this).next('.inner');
            toggleDiv.slideToggle();
            $(".inner").not(toggleDiv).slideUp()
  })

// =============================

// (document).ready
$(function() {
  var endDate = new Date("2026/12/31 00:00:00").getTime();

  var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = endDate - now;
    console.log(now);
    console.log(endDate);


    if (distance < 0) {
      clearInterval(countdown);
      console.log('EXPIRED');
    } else {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')+ ' D';
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')+ ' H';
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')+ ' M';
      var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')+ ' S';

      console.log('Days: ' + days + ', Hours: ' + hours + ', Minutes: ' + minutes + ', Seconds: ' + seconds);
      $('.days').text(days);
      $('.hours').text(hours);
      $('.minutes').text(minutes);
      $('.seconds').text(seconds);
    }
  }, 10);
});

// ========================

textarea.addEventListener('input', function() {
    const remainingChars = maxCharCount - textarea.value.length;

    charCountMessage.textContent = `You have ${remainingChars} characters remaining `;

    if (remainingChars <= 0) {
        textarea.value = textarea.value.slice(0, maxCharCount);
        charCountMessage.textContent = `You have reached the character limit`;
    }
});

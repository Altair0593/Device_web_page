// categore toggle menu

$(function() {
    $(".main-navigation__btn").click(function() {
      $(this).toggleClass("active");
      $('.catalog-container').toggleClass("open");
      // $('.main-header').toggleClass("main-header-height");
    });
  });

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let radio = document.getElementsByClassName("slider-radio");


  // propery for arrow control
  // if (n > slides.length) {slideIndex = 1}

  // if (n < 1) {
  //   slideIndex = slides.length
  // }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < radio.length; i++) {
    radio[i].className = radio[i].className.replace(" slider-radio__active", "");
  }
  slides[slideIndex-1].style.display = "block";
  radio[slideIndex-1].className += " slider-radio__active";
}

// Fitures 

let fituresIndex = 1;
showFitures(fituresIndex);

function currentFitures(n) {
  showFitures(fituresIndex = n);
}

function showFitures(n) {
  let i;
  let fitures = document.getElementsByClassName("fitures-info__item");
  let fituresBtn = document.getElementsByClassName("btn-fitures");
  let fituresItem = document.getElementsByClassName("fiures-item");


  // propery for arrow control

  for (i = 0; i < fitures.length; i++) {
    fitures[i].style.display = "none";
  }
  for (i = 0; i < fituresBtn.length; i++) {
    fituresBtn[i].className = fituresBtn[i].className.replace(" btn-fitures__active ", "");
  }
  for (i = 0; i < fituresItem.length; i++) {
    fituresItem[i].className = fituresItem[i].className.replace(" fitures-item__active", "");
  }

  fitures[fituresIndex-1].style.display = "inline-flex";
  fituresBtn[fituresIndex-1].className += " btn-fitures__active ";
  fituresItem[fituresIndex-1].className += " fitures-item__active";
}

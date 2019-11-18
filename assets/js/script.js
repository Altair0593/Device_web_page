$(function() {
    $(".main-navigation__btn").click(function() {
      $(this).toggleClass("active");
      $('.catalog-container').toggleClass("open");
      // $('.main-header').toggleClass("main-header-height");
    });
  });
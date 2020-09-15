// Card slidToggle
$(document).ready(function () {
  $(".service").click(function () {
    $(".service-list").slideToggle();
    $(".plan-tour").slideToggle();
  });

  $(".benefits").click(function () {
    $(".benefits-list").slideToggle();
    $(".book-tour").slideToggle();
  });

  $(".about").click(function () {
    $(".about-list").slideToggle();
    $(".about-us").slideToggle();
  });

  $(".contact").click(function () {
    $(".contact-list").slideToggle();
    $(".contact-us").slideToggle();
  });
});

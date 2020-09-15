// Change P function and line progress
$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".st-step").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".nd-step").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".ed-step").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".th-step").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".fi-step").addClass("active").siblings().removeClass("active");
});

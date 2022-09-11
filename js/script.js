$(".toggle").click(function () {
  $(".navigation").toggleClass("active");
});

const body = document.querySelector("body");

$(".theme").click(function () {
  $(".theme").removeClass("select");
  $(this).addClass("select");
});

$(".dark").click(function () {
  $("body").removeClass("lighted");
  $("body").removeClass("purpled");
  $("body").addClass("darked");
});

$(".light").click(function () {
  $("body").removeClass("purpled");
  $("body").removeClass("dark");
  $("body").addClass("lighted");
});

$(".purple").click(function () {
  $("body").removeClass("lighted");
  $("body").removeClass("darked");
  $("body").addClass("purpled");
});

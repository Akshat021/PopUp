$(document).ready(() => {
  $("#clickMe").on("click", function () {
    $("#signup_box").toggleClass("appear");
  });
  $("#cancel_button").on("click", function () {
    $("#signup_box").removeClass("appear");
  });
});

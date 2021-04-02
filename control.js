$(document).ready(function () {
  var checkshow = false;

  // $("asset").css({ "background-color": "#2F3240", color: "#ED8F21" });
  // $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
  // $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
  // $(".datachangeorderBook").hide();
  // $(".main__right").show();
  // $(".datachangeMenu").hide();

  $("#orderBook").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".data1").show();

    $(".datachangeorderBook").show();
    $("#datachangeasset").hide();
    $(".datachangeMenu").hide();
    $(".footer").css({ width: "396px" });
  });

  $("#listfooter").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".footer").css({ width: "396px" });
    $(".data1").show();

    $(".datachangeorderBook").hide();
    $("#datachangeasset").hide();
    $(".datachangeMenu").show();
  });

  $("#asset").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main__right").show();
    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".footer").css({ width: "396px" });
    $(".datachangeorderBook").hide();
    $("#datachangeasset").show();
    $(".datachangeMenu").hide();
  });

  $(".hideTabRight").click(function () {
    checkshow = true;
    $(".main__right").hide();
    $(".main").css({
      "grid-template-columns": "1fr",
    });
    $(".footer--scare").css({
      display: "block",
    });
    $(".main__left").css({ "grid-template-columns": "1fr 396px" });
    $(".footer").css({ width: "396px" });

    $("#asset").css({ "background-color": "#2F3240", color: "#131722" });
    $("#orderBook").css({ "background-color": "#2F3240", color: "#131722" });
    $("#listfooter").css({ "background-color": "#2F3240", color: "#131722" });

    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });
  });

  // action show
  $(window).resize(() => {
    if ($(window).width() < 1024) {
      $(".main").css({ "grid-template-columns": "1fr" });
      $(".main__right").css({ display: "none" });
      $(".footer").css({ width: "396px" });
      $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
      $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
      $("#asset").css({ "background-color": "#131722", color: "#ffffff" });
    } else {
      $(".footer").css({ width: "396px" });
    }
  });
});

$(document).ready(function () {
  $("taisan").css({ "background-color": "#2F3240", color: "#ED8F21" });
  $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
  $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
  $(".datachangesolenh").hide();
  $(".datachangeMenu").hide();

  $("#solenh").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
    $("#taisan").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").hide();
    $(".datachangesolenh").show();
    $(".datachangeMenu").hide();
  });

  $("#danhmuc").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
    $("#taisan").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").hide();
    $(".datachangesolenh").hide();
    $(".datachangeMenu").show();
  });

  $("#taisan").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
    $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").show();
    $(".datachangesolenh").hide();
    $(".datachangeMenu").hide();
  });

  $(".hideTabRight").click(function () {
    $(".main__right").hide();
    $(".main").css({
      "grid-template-columns": "1fr",
    });
    $(".footer--scare").css({
      display: "block",
    });
  });

  // action show
  $(".solenh").click(function () {
    $(".main__right").show();

    $(".footer--scare").css({
      display: "none",
    });
    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });

    $("#solenh").trigger("click");
  });

  $(".danhmuc").click(function () {
    $(".main__right").show();

    $(".footer--scare").css({
      display: "none",
    });
    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $("#danhmuc").trigger("click");
  });

  $(".taisan").click(function () {
    $(".main__right").show();

    $(".footer--scare").css({
      display: "none",
    });
    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $("#taisan").trigger("click");
  });
});

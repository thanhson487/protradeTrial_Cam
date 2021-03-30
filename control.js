$(document).ready(function () {
  $("taisan").css({ "background-color": "#2F3240", color: "#ED8F21" });
  $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
  $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
  $(".datachangesolenh").hide();
  $("#solenh").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
    $("#taisan").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").hide();
    $(".datachangesolenh").show();
  });

  $("#danhmuc").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
    $("#taisan").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").hide();
    $(".datachangesolenh").show();
  });

  $("#taisan").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#solenh").css({ "background-color": "#131722", color: "#ffffff" });
    $("#danhmuc").css({ "background-color": "#131722", color: "#ffffff" });
    $("#datachangetaisan").show();
    $(".datachangesolenh").hide();
  });
});

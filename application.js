$(document).ready(function(){

  for (var i = 0; i < 465; i++) {
    $("article").append("<p class=\"block\"></p>");
  }

  $(".block").on("mouseenter", function(){
    $(this).addClass("hide")
  });

});
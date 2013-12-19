for (var i = 0; i < 1023; i++) {
    $("article").append("<p class=\"block\"></p>");
  }

$(document).ready(function(){

  $(".block").on("mouseenter", function(){
    $(this).addClass("hide")
  });

});
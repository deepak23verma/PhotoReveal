for (var i = 0; i < 1023; i++) {
  $(".picture-column3").append("<p class=\"block_small\"></p>");
}

for (var i = 0; i < 960; i++) {
  $(".picture-column1").append("<p class=\"block_large\"></p>");
}

$(document).ready(function(){

  $(".block_small, .block_large").on("mouseenter", function(){
    $(this).addClass("hide")
  });

});
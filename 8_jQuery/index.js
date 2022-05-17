//$(document).ready(function(){
  $("h1").addClass("big-title margin-50");
//});
// $("h1").css("font-size", "5rem");
//
// $("h1").text("Bye");
// $("h1").html("<em>Hey</em>");
//
// $("a").attr("href", "http://www.yahoo.com");

$("button").click(function(){
  $("h1").css("color", "purple");
});

$(document).keypress(function(event){
  $("h1").html(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
})

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("h1").remove();

$("button").on("click", function(){
  //$("h1").hide();
  // $("h1").toggle();
  // $("h1").fadeOut();
  //$("h1").faceIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();
  // $("h1").animate({opacity: 0.5});
  $("h1").slideUp().slideDown().animate({opacity:0.5});
})

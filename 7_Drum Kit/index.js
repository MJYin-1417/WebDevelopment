// var drumSet = document.querySelectorAll(".drum");
// drumSet.forEach((drum) => {
//   drum.addEventListener("click", function(){
//     alert('I got clicked');
//   });
// });

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;
    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "j":
      var hihat = new Audio('sounds/hihat.mp3');
      hihat.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var keyList = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
  if (keyList.includes(currentKey)) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

var noOfButtons = document.querySelectorAll(".drum").length;

//Detecting button press
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //this.style.color = "white";
    var btn = this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn);
  });
};

//detecting key press
document.addEventListener("keydown", function() {
  //console.log(event.key);
  var btn = event.key;
  makeSound(btn);
  buttonAnimation(btn);
});

//making corrosponding sound
function makeSound(btn) {
  if (btn === 'w') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (btn === 'a') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (btn === 's') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (btn === 'd') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (btn === 'j') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (btn === 'k') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (btn === 'l') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (btn === 'W') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (btn === 'A') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (btn === 'S') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (btn === 'D') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (btn === 'J') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (btn === 'K') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (btn === 'L') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else {
    console.log(btn);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

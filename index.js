
alert(`you can play the drums by pressing the letters on your keyboard!`)

//////////////////// SECTION ///////////////////////////////////////////////
////////// DETECTING HTML BUTTON PRESS ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var drums = document.querySelectorAll(".drum");
for (var i=0; i<drums.length; i++){
  drums[i].addEventListener("click", handleClick); 
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML; // from the clicked btn we take the >text<
  var audio = new Audio('sounds/'+buttonInnerHTML+'.mp3');
  audio.play();
  buttonAnimation(buttonInnerHTML);
}
//////////////////// SECTION ///////////////////////////////////////////////
////////// DETECTING KEYBOARD PRESS ////////////////////////////////////////

document.addEventListener("keydown", function(event) {//function(event) is a CALL-BACK func
  var keyboardKeys = ["w","a","s","d","j","k","l"];
  for (var i = 0; i < keyboardKeys.length; i++) {
    if (keyboardKeys[i] === event.key) {
      var keyboardAudio = new Audio('sounds/' + keyboardKeys[i] + '.mp3');
      keyboardAudio.play();
      buttonAnimation(event.key);
    }
  }
});

//////////////////// SECTION ///////////////////////////////////////////////
////////// CREATE ANIMATION ////////////////////////////////////////
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); //we add the class .pressed whichhas a seperate style
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

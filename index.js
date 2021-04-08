
alert(`you can play the drums by pressing the letters on your keyboard!`)

//////////////////// SECTION ///////////////////////////////////////////////
////////// DETECTING HTML BUTTON PRESS ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var drums = document.querySelectorAll(".drum");
// as firt parameter in the parenthesis we add the event type.
// the second parameter is the listener, which is tha js function that is going
// to be called when the event (e.g. click) occurs.
for (var i=0; i<drums.length; i++){
  drums[i].addEventListener("click", handleClick); //with NAMED FUNC
}
// keyword THIS shows us which button is cklicked form user each time
function handleClick() {
  var buttonInnerHTML = this.innerHTML; // from the clicked btn we take the >text<
  var audio = new Audio('sounds/'+buttonInnerHTML+'.mp3');
  audio.play();
  buttonAnimation(buttonInnerHTML);
}
//////////////////// SECTION ///////////////////////////////////////////////
////////// DETECTING KEYBOARD PRESS ////////////////////////////////////////
// how to add events to the keybord instead of the html buttons:
// simply by adding the event to the entire HTML document
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

/////////////////////////// alternative: ANONYMOUS FUNC ///////////
// alternatively we can write this by calling the previous
// handleClick() as an anonymous function and integrating it into the for loop:

// for (var i=0; i<drums.length; i++){
//   drums[i].addEventListener("click", function() {
//     alert("I got clicked!");
//   });
// }
/////////////// end of alternative ///////////////////

/** Display of date and time */

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();


  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]} 
  ${date.getDate()} 
  ${MONTHS[date.getMonth()]} 
  ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);


// Drumkit

var numberOfDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    makeSound(this.innerHTML.toLowerCase());

    buttonAnimation(this.innerHTML.toLowerCase());

  });
}

document.addEventListener("keydown", function (event) {

  makeSound(event.key.toLowerCase());

  buttonAnimation(event.key.toLowerCase());

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("../sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("../sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('../sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('../sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('../sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('../sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('../sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
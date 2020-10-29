console.log("hello");

let rollDice = document.querySelector("#roll-button");
let totalNumRolls = document.querySelector("#Total-rolls");
let veiwRolls = document.querySelector("#show-all-rolls");
let diceRolling = document.querySelector("#diceroll");
let orderList = document.querySelector("#orderd-list");
let everyRoll = [];
let reset = document.querySelector("Reset");

function giveMeRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

rollDice.addEventListener("click", function () {
  console.log(everyRoll);
  everyRoll.push(+giveMeRandomNumber());
  //everyRoll = [];
  let maxRoll = Number(diceroll.value);
  let count = 0;
  while (count > maxRoll) count++;
  count = 0;

  let total = 0;
  while (everyRoll.length > count) {
    total = total + everyRoll[count];
    count++;
  }
});

veiwRolls.addEventListener("click", function () {
  console.log("im working");
  orderList.innerHTML = "";
  let count = 0;
  while (everyRoll.length > count) {
    console.log(everyRoll[count]);
    orderList.innerHTML += "<li>" + everyRoll[count] + "</li>";
    count++;
  }
});
//reset.addEventListener("click", function () {
// document.getElementById();
//});

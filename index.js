"use strict";
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const randomDice = document.querySelectorAll(".dice");
// use for loop to control & manipulet the class
for (let i = 0; i < randomDice.length; i++) {
  randomDice[i].addEventListener("click", function () {
    const img1 = Math.trunc(Math.random() * 6) + 1;
    console.log(img1);
    const img2 = Math.trunc(Math.random() * 6) + 1;
    console.log(img2);
    dice1.src = `images/dice${img1}.png`;
    dice2.src = `images/dice${img2}.png`;

    if (img1 > img2) {
      document.querySelector("#head").textContent = "player 1 Win";
    } else if (img1 < img2) {
      document.querySelector("#head").textContent = "player 2 Win";
    } else if (img1 === img2) {
      document.querySelector("#head").textContent = "Drow";
    }
  });
}

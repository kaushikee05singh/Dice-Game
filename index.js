var randomnumber1 = Math.floor( Math.random()*6 + 1);

var diceimageSrc = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", diceimageSrc);

var randomNumber2 = Math.floor( Math.random()*6 + 1);

var diceImageSrc2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll(".img2")[0];

image2.setAttribute("src", diceImageSrc2);

if (randomnumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
    
} else {
    document.querySelector("h1").innerHTML=" Player 2 wins! 🚩";

}
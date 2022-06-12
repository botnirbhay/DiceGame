var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceimg1="dice" + randomNumber1 + ".png";
var randomImagesrc1="images/" + randomDiceimg1;
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceimg2="dice"+randomNumber2+".png";
var randomImagesrc2="images/"+randomDiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins !!!!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins !!!!";
}
else{
    document.querySelector("h1").innerHTML="It's a draw , roll your luck again";
}


function closePopup(){
document.getElementById("popup").style.display = "none";
}

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = "24px";
heart.style.animation = "floatUp 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,800);

const message = "Happy Birthday!";
let index = 0;

function typeText(){

if(index < message.length){
document.getElementById("typing").innerHTML += message.charAt(index);
index++;
setTimeout(typeText,120);
}

}

typeText();

window.onload = function(){

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
});

}

function createSparkle(){

const sparkle = document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";
sparkle.style.left = Math.random()*100 + "vw";
sparkle.style.top = Math.random()*100 + "vh";
sparkle.style.fontSize = "18px";

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},2000);

}

setInterval(createSparkle,500);

function createBalloon(){

const balloon = document.createElement("div");

balloon.innerHTML = "🎈";

balloon.style.position = "fixed";
balloon.style.left = Math.random()*100 + "vw";
balloon.style.bottom = "-40px";
balloon.style.fontSize = "40px";
balloon.style.animation = "floatUp 8s linear";

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},8000);

}

setInterval(createBalloon,2000);

function showSecret(){

document.getElementById("secretMessage").innerHTML =
"You are loved more than words can ever explain. Happy Birthday to the best sister in the world ❤️";

}

function openLetter(){

const letter = document.getElementById("letter");

if(letter.style.display === "block"){
letter.style.display = "none";
}
else{
letter.style.display = "block";

confetti({
particleCount:150,
spread:90
});

}

}
/* Birthday Countdown */

const birthdayTime = new Date("March 16, 2026 09:00:00").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();

const distance = birthdayTime - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdownTimer").innerHTML =
days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds ";

if(distance < 0){

clearInterval(countdown);

document.getElementById("countdownScreen").style.display = "none";

confetti({
particleCount:300,
spread:150,
origin:{y:0.6}
});

}

},1000);
const welcometext = ["Cześć👋", "Witaj ponownie👋", "Co słychać?🎯"];
const welcometextevening = ["Dobry wieczór🌙", "Dobrej nocy🌃"];
const welcometextmorning = ["Dzień dobry!🌄", "Miłego dnia☀️"];
let hellotext = document.getElementById('hello-text');

const d = new Date();
const hour = d.getHours()

console.log(d.getHours)
if(hour >= 5 && hour <= 10 ){

    var randomNumber = Math.floor(Math.random()*welcometextmorning.length);

hellotext.innerHTML = welcometextmorning[randomNumber];
}
else if(hour >= 18 && hour <= 23 ){

    var randomNumber = Math.floor(Math.random()*welcometextevening.length);

hellotext.innerHTML = welcometextevening[randomNumber];
}
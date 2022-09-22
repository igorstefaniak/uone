const welcometext = ["Cześć👋", "Witaj ponownie👋", "Co słychać?🎯"];
const welcometextevening = ["Dobry wieczór🌙", "Dobrej nocy🌃"];
const welcometextmorning = ["Dzień dobry!🌄", "Miłego dnia☀️"];
let hellotext = document.getElementById('hello-text');

const d = new Date();

switch(true){
    case d.getHours() >= 5 && d.getHours() <= 10:
        var randomNumber = Math.floor(Math.random()*welcometextmorning.length);
        hellotext.innerHTML = welcometextmorning[randomNumber];
        break;
    case d.getHours() >= 18 && d.getHours() <= 23:
        var randomNumber = Math.floor(Math.random()*welcometextevening.length);
        hellotext.innerHTML = welcometextevening[randomNumber];
        break;
    default:
        var randomNumber = Math.floor(Math.random()*welcometext.length);
        hellotext.innerHTML = welcometext[randomNumber];
        break;
}
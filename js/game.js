


// let score = 0;
// let clickerCost = 15;
// let clickers = 0;
// let multiplierCost = 10;
// let multipliers = 1;
// let clickPower = 1;
// let multiplyCalc = 0;

// function addToScore(){
//     score = score + clickPower;
//     document.getElementById("score").innerHTML = score;
// }


// function buyClicker(){
//     if(score>=clickerCost){
//         score = score - clickerCost;
//         clickers = clickers +1;
//         clickerCost = Math.round(clickerCost*1.10)
//         document.getElementById("score").innerHTML = score;
//         document.getElementById("cost").innerHTML = clickerCost;
//         document.getElementById("clickers").innerHTML = clickers;
//     }
// }
// function buyMultiplier(){
//     if(score>=multiplierCost){
//         score = score - multiplierCost;
//         multipliers = multipliers + 1;
//         multiplyCalc = Math.pow(1.2,multipliers)
//         clickPower = clickPower * multiplyCalc;
//         multiplierCost = Math.round(multiplierCost*1.10)
//         document.getElementById("score").innerHTML = score;
//         document.getElementById("multiplyCost").innerHTML = multiplierCost;
//         document.getElementById("multiple").innerHTML = multipliers;

//     }
// }







import gameclass from "/js/gameclass.js";

const newGame = new gameclass();

newGame.getValues();

const clickBtn = document.querySelector('#buyClickers');
clickBtn.addEventListener("click", () => {
    newGame.buyClicker();
})

const multBtn = document.querySelector('#buyMultipliers');
multBtn.addEventListener("click", () => {
    newGame.buyMultiplier();
})

const donutBtn = document.querySelector('.donut');
donutBtn.addEventListener("click", () => {
    newGame.addToScore();
})

const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener("click", () => {
    location.reload();
})

setInterval(() => {
    newGame._score = newGame._score + (newGame._clickers * newGame._clickPower) / 20;
    newGame.getValues();
    if(newGame._clickers >0){
        const numClickers = 1 - (newGame._clickers/10);
    const t3 = gsap.timeline({defaults: {duration: `${numClickers}`, repeat: -1}})
    t3.to('.donut' , {rotation: '+=360deg'})
    }
}, 50)



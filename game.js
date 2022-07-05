let score = 0;
let clickerCost = 15;
let clickers = 0;
let multiplierCost = 10;
let multipliers = 1;
let clickPower = 1;
let multiplyCalc = 0;

function addToScore(){
    score = score + clickPower;
    document.getElementById("score").innerHTML = score;
}


function buyClicker(){
    if(score>=clickerCost){
        score = score - clickerCost;
        clickers = clickers +1;
        clickerCost = Math.round(clickerCost*1.10)
        document.getElementById("score").innerHTML = score;
        document.getElementById("cost").innerHTML = clickerCost;
        document.getElementById("clickers").innerHTML = clickers;
    }
}
function buyMultiplier(){
    if(score>=multiplierCost){
        score = score - multiplierCost;
        multipliers = multipliers + 1;
        multiplyCalc = Math.pow(1.2,multipliers)
        clickPower = clickPower * multiplyCalc;
        multiplierCost = Math.round(multiplierCost*1.10)
        document.getElementById("score").innerHTML = score;
        document.getElementById("multiplyCost").innerHTML = multiplierCost;
        document.getElementById("multiple").innerHTML = multipliers;

    }
}

setInterval(function() {
    score = score + (clickers*clickPower)/20;
    document.getElementById("score").innerHTML = score;
}, 50)
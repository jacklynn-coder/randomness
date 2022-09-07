let dice1Img = document.getElementById("dice1");
let dice2Img = document.getElementById("dice2");
let competeBtn = document.getElementById("compete-btn");

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let resultDiv = document.getElementById("result-div");
let p1Name, p2Name;
let rolledNum;


function rollDice() {
    let number = 1 + Math.floor(Math.random() * 6);
    return number;
}

function checkWinner(num1, num2) {
    if (num1 === num2) {
        return "Match";
    } else if (num1 > num2) {
        return "Winner is " + p1Name;
    }
    return "Winner is " + p2Name;
}

function animateDoubleDice(num1, num2) {
    p1Name = player1.value;
    p2Name = player2.value;
    let winnerStr = checkWinner(num1,num2);
    console.log(winnerStr);
    setTimeout(()=>
    {
      resultDiv.innerText = winnerStr;
    },3000);
    var startTime = new Date().getTime();
    dice1Img.classList.remove("beforeDice");
    dice2Img.classList.remove("beforeDice");


    if (dice1Img.classList.length !== 2) {
        dice1Img.classList.add("afterDice");
        dice2Img.classList.add("afterDice");
    }
    var interval = setInterval(() => {
        if (new Date().getTime() - startTime > 3000) {
            clearInterval(interval);
            dice1Img.classList.remove("afterDice");
            dice2Img.classList.remove("afterDice");
            dice1Img.setAttribute("src", "../assests/dice/" + num1 + "_dice.svg");
            dice2Img.setAttribute("src", "../assests/dice/" + num2 + "_dice.svg");
            // dice1Img.classList.add("beforeDice");
            // dice2Img.classList.add("beforeDice");
        } else if (new Date().getTime() - startTime < 2500) {
            let tempNum1 = rollDice();
            let tempNum2 = rollDice();
            dice1Img.src = "../assests/dice/" + tempNum1 + "_dice.svg";
            dice2Img.src = "../assests/dice/" + tempNum2 + "_dice.svg";
        }
    }, 380);
}

competeBtn.addEventListener("click", function () {
    rolledNum1 = rollDice();
    rolledNum2 = rollDice();
    animateDoubleDice(rolledNum1,rolledNum2);
  });

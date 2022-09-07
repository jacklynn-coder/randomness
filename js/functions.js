  let textDiv = document.getElementById("info-text");
  let rollBtn = document.getElementById("roll-btn");
  let diceImg = document.getElementById("dice");
  let rolledNum;

  function rollDice() {
    let number = 1 + Math.floor(Math.random() * 6);
    return number;
  }

  function fetchJSON(number) {
    fetch('../assests/numbers-info.json')
      .then(response => response.json())
      .then(
        data => setInfo(data["facts"][number - 1]["info"])
      );
  }

  function setInfo(text) {

    textDiv.innerText = text;
  }

  function animateDice(number) {
    var startTime = new Date().getTime();
    dice.classList.remove("beforeDice");
    if (dice.classList.length !== 1) {
      dice.classList.add("afterDice");
    }
    var interval = setInterval(() => {
      if (new Date().getTime() - startTime > 3000) {
        clearInterval(interval);
        dice.classList.remove("afterDice");
        fetchJSON(rolledNum);
        dice.setAttribute("src", "../assests/dice/" + (rolledNum) + "_dice.svg");
        dice.classList.add("beforeDice");
      }
      else if(new Date().getTime() - startTime < 2500)
      {
        let tempNum = rollDice();
        dice.src = "../assests/dice/" + tempNum + "_dice.svg";
      }
    }, 380);
  }


  rollBtn.addEventListener("click", function () {
    rolledNum = rollDice();
    animateDice(rolledNum);
  });

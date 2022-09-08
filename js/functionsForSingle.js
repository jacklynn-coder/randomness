  let textDiv = document.getElementById("info-text");
  let rollBtn = document.getElementById("roll-btn");
  let diceImg = document.getElementById("dice");


  function rollDice() {
    let number = 1 + Math.floor(Math.random() * 6);
    return number;
  }

  function fetchJSON(number) {
    fetch('../assests/numbers-info.json',{credentials: 'same-origin'})
      .then(response => response.json())
      .then(
        data => setInfo(data["facts"][number - 1]["info"])
      );
  }

  function setInfo(text) {
    textDiv.innerText = text;
  }

  function animateSingleDice(number) {
    var startTime = new Date().getTime();
    diceImg.classList.remove("beforeDice");
    if (diceImg.classList.length !== 2) {
      diceImg.classList.add("afterDice");
    }
    var interval = setInterval(() => {
      if (new Date().getTime() - startTime > 3000) {
        clearInterval(interval);
        diceImg.classList.remove("afterDice");
        fetchJSON(rolledNum);
        diceImg.setAttribute("src", "../assests/dice/" + (rolledNum) + "_dice.svg");
        diceImg.classList.add("beforeDice");
      }
      else if(new Date().getTime() - startTime < 2500)
      {
        let tempNum = rollDice();
        diceImg.src = "../assests/dice/" + tempNum + "_dice.svg";
      }
    }, 380);
  };




  rollBtn.addEventListener("click", function () {
    rolledNum = rollDice();
    animateSingleDice(rolledNum);
  });

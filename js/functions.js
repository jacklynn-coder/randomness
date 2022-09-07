  let textDiv = document.getElementById("info-text");
  let rollBtn = document.getElementById("roll-btn");
  let diceImg = document.getElementById("dice");

function rollDice()
{
  let number = 1+Math.floor(Math.random()*6);
  return number;
}
function fetchJSON(number)
{
  fetch('../assests/numbers-info.json')
  .then(response => response.json())
  .then
  (
    data =>  setInfo(data["facts"][number-1]["info"])
  );
}

function setInfo(text)
{

  textDiv.innerText = text;
}

function animateDice(number)
{
  var startTime = new Date().getTime();
  dice.classList.remove("beforeDice");
  if(dice.classList.length!==1)
  {
    dice.classList.add("afterDice");
  }
  var interval = setInterval(()=>
{
    if(new Date().getTime() - startTime > 3000){
       clearInterval(interval);
        fetchJSON(number);
       dice.src = "../assests/dice/"+number+"_dice.svg";
       dice.classList.remove("afterDice");
       dice.classList.add("beforeDice");
     }
    let tempNum = rollDice();
    dice.src = "../assests/dice/"+tempNum+"_dice.svg";
},380);
}


rollBtn.addEventListener("click",function()
{
  let num = rollDice();
  animateDice(num);
});

let numbers = document.querySelector("h2");
let buttons = document.querySelectorAll(".btn");
let release = document.getElementsByTagName("h2");
const timeLeft = document.getElementById("timeLeft");

console.log(buttons);

let tempNumber = 0;
timeLeft.style.color = '#fff'
timeLeft.textContent = `you have 5 seconds left` 

const releaseFunc = () =>{
    release.addEventListener('mouseout', ()=>{
        numbers.textContent = 0;
    })
};

buttons[0].addEventListener("click", () => {
  tempNumber--;
  numbers.textContent = tempNumber;
  console.log(tempNumber);
});

buttons[1].addEventListener("click", () => {
  tempNumber = 0;
  numbers.textContent = tempNumber;
  console.log(tempNumber);
});

let timeInterval
let numberOfClicks = 0;
const game = ()=>{
  tempNumber = 5;
  numberOfClicks++
  numbers.textContent = `CLICK${numberOfClicks}`
  timeLeft.textContent = `You have ${tempNumber} second(s) left`
  clearInterval(timeInterval);

  timeInterval = setInterval(()=>{
    if(tempNumber < 1){
      clearInterval(timeInterval)
      numberOfClicks = 0
      numbers.textContent = numberOfClicks
    }
    if(tempNumber > 0){
      tempNumber --;
      timeLeft.textContent = `You have ${tempNumber} second(s) left`
    }
  }, 1000);


};

buttons[2].addEventListener("click", game);




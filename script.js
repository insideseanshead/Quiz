//variables for pages. Start
var startPage = document.querySelector('.startScreen')
var quizPage = document.querySelector('.quizPage')
var scorePage = document.querySelector('.scorePage')
var gameOver = document.querySelector('.gameOver')


var countDown = document.querySelector('.countDown')

// log high scores

var score = localStorage.getItem('scores');

if(score){
  score = JSON.parse(score);
} else {
  score = [];
}






// Make variables that I will call uppon.
var questionText = document.querySelector("#theQuestion");
var questionIndex = 0;
var startBtn = document.querySelector("#start");
var answerSelect = document.querySelectorAll(".answerSelect")

var oneImg = document.querySelector("#imgOne");
var oneText = document.querySelector("#pOne");
var oneTrue = " ";

var twoImg = document.querySelector("#imgTwo");
var twoText = document.querySelector("#pTwo");
var twoTrue = " ";

var threeImg = document.querySelector("#imgThree");
var threeText = document.querySelector("#pThree");
var threeTrue = " ";

var fourImg = document.querySelector("#imgFour");
var fourText = document.querySelector("#pFour");
var fourTrue = " ";

// Game Timer
var timeLeft = 31;

function setTimer() {
  var timeInt = setInterval(function() {
    timeLeft--;
    countDown.textContent = "Time Remaining " + timeLeft;

    if(timeLeft === 0){
      clearInterval;
      quizPage.style.display = "none";
      scorePage.style.display = "block";
    }

  }, 1000)
}

// create an array of objects which consists of questions and answers.

var theBatman = [
  {
    question:"In Batman the Animated Series who was the original voice of the joker?",
    correctAnswerId: "answerThree",
    answerOneImg: "images/MarkHammil.jpg",
    answerOneText: "Mark Hammil",
    answerTwoImg: "images/HankAzaria.jpg",
    answerTwoText: "Hank Azaria",
    answerThreeImg: "images/TimCurry.jpg",
    answerThreeText: "Tim Curry",
    answerFourImg: "images/TonyShaloub.jpg",
    answerFourText: "Tony Shaloub",
  },
  {
    question: "Who has not been the voice of Batman?",
    correctAnswerId: "answerFour",
    answerOneImg: "images/KevinConroy.jpg",
    answerOneText: "Kevin Conroy",
    answerTwoImg: "images/DiedrichBader.jpg",
    answerTwoText: "Diedrich Bader",
    answerThreeImg: "images/WillFriedle.jpg",
    answerThreeText: "Will Fridele",
    answerFourImg: "images/CaseyKasem.jpg",
    answerFourText: "Casey Kasem", 
  },
  {
    question: "Who is Colin Farrell playing in 'The Batman'?",
    correctAnswerId: "answerThree",
    answerOneImg: "images/Joker.jpg",
    answerOneText: "The Joker?",
    answerTwoImg: "images/TwoFace.jpg",
    answerTwoText: "Two Face",
    answerThreeImg: "images/Penguin.jpg",
    answerThreeText: "The Penguin",
    answerFourImg: "images/CondimentKing.jpg",
    answerFourText: "Condiment King",
    
  },
  {
    question: "Who has not been the voice of Batman?",
    correctAnswerId: "answerFour",
    answerOneImg: "images/KevinConroy.jpg",
    answerOneText: "Kevin Conroy",
    answerTwoImg: "images/DiedrichBader.jpg",
    answerTwoText: "Diedrich Bader",
    answerThreeImg: "images/WillFriedle.jpg",
    answerThreeText: "Will Fridele",
    answerFourImg: "images/CaseyKasem.jpg",
    answerFourText: "Casey Kasem", 
  }
];

//Start Game
quizPage.style.display = "none";
scorePage.style.display = "none";
gameOver.style.display = "none";

function newQuestion(){
    // Put Question in Jumbotron
    questionText.textContent = theBatman[questionIndex].question;
    // fill first answer elements
    oneImg.src = theBatman[questionIndex].answerOneImg;
    oneText.textContent = theBatman[questionIndex].answerOneText;

    // fill second answer elements
    twoImg.src = theBatman[questionIndex].answerTwoImg;
    twoText.textContent = theBatman[questionIndex].answerTwoText;
   
    // fill third answer elements
    threeImg.src = theBatman[questionIndex].answerThreeImg;
    threeText.textContent = theBatman[questionIndex].answerThreeText;
    
    //fill fourth answer elements
    fourImg.src = theBatman[questionIndex].answerFourImg;
    fourText.textContent = theBatman[questionIndex].answerFourText;
    
}

startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    setTimer();
    newQuestion();
});

//answer buttons functions

answerSelect.forEach(function(answerBtn){
  
  
  answerBtn.addEventListener("click", function(event){
    var answerElement = event.target.closest(".answerSelect")
    // if(answerElement.id === theBatman[questionIndex].correctAnswerId){
    //   console.log('hopefully this works')
    // }
    


    if(questionIndex < theBatman.length-1){
      if(answerElement.id === theBatman[questionIndex].correctAnswerId){
        
      } else {
        timeLeft -= 10;
      }
      console.log('hopefully this works')
      questionIndex++
      newQuestion()
      
    } else {
      //stop and log time.
      //close quiz page.
      //open score page.
      // var userScore = timeLeft;
      
      quizPage.style.display="none";
      scorePage.style.display="block"
      youWin()
    }
  })

})


function youWin(){
  var userScore = timeLeft;
  var playerInfo = prompt(("Please enter your name."))
  var playerObject = {
    playerName: playerInfo,
    playerScore: userScore
  }

  score.push(playerObject);

  localStorage.setItem('scores', JSON.stringify(score))


}


//

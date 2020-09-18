//variables for pages. Start
var startPage = document.querySelector('.startScreen')
var quizPage = document.querySelector('.quizPage')
var scorePage = document.querySelector('.scorePage')
var gameOver = document.querySelector('.gameOver')




var countDown = document.querySelector('.countDown')





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

    if(timeLeft <= 0){

      clearInterval(timeInt);
      countDown.textContent = "";
      quizPage.style.display = "none";
      scorePage.style.display = "block";
    }         

    if(questionIndex > theBatman.length){
      clearInterval(timeInt);
      countDown.textContent = "";
    }

  }, 1000)
}
 //local scores
 var score = []
var scoreObject = ""
var playerScore = []

playerScore.push(scoreObject);

localStorage.setItem("playerscore", JSON.stringify(playerScore));

// function retrieveScores(){
//   var localScores = JSON.parse(localStorage.getItem("playerScore"))
//   console.log(localScores)
//   console.log(retrieveScores)
//   if(localScores===null){
//     localScores=[];
//   }
// [{playerInfo: "sean",
// userScore: 4564,
// }].forEach(function(scoreObject){
//   var scoreBoard = document.createElement("p");
//   scoreBoard.textContent= `${scoreObject.playerInfo} - ${scoreObject.userScore}`
//   document.querySelector(".scoreCard").appendChild(scoreBoard)
// })
// }

function retrieveScores(){
  var localScores = JSON.parse(localStorage.getItem("playerScore"))
  console.log(localScores)
  console.log(retrieveScores)
  if(localScores===null){
    localScores=[];
  }
playerInfo.forEach(function(scoreObject){
  var scoreBoard = document.createElement("p");
  scoreBoard.textContent= `${scoreObject.playerInfo} - ${scoreObject.userScore}`
  document.querySelector(".scoreCard").appendChild(scoreBoard)
})
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
    question: "Who is the Son of Bruce Wayne?",
    correctAnswerId: "answerOne",
    answerOneImg: "images/damien.jpg",
    answerOneText: "Damien",
    answerTwoImg: "images/dick.jpg",
    answerTwoText: "Dick",
    answerThreeImg: "images/jason.jpg",
    answerThreeText: "Jason",
    answerFourImg: "images/tim.jpg",
    answerFourText: "Tim", 
  },
  {
    question: "Who wrote the soundtrack for Tim Burtons 1989 Batman film?",
    correctAnswerId: "answerTwo",
    answerOneImg: "images/u2.jpg",
    answerOneText: "U2",
    answerTwoImg: "images/prince.jpg",
    answerTwoText: "Prince",
    answerThreeImg: "images/seal.jpg",
    answerThreeText: "Seal",
    answerFourImg: "images/oingoBoingo.jpg",
    answerFourText: "Oingo Boingo", 
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
      
     
      
      youWin()
    }
  })

})



function youWin(){
  quizPage.style.display="none";
  scorePage.style.display="block"
  
  

  var userScore = timeLeft;
  var playerInfo = prompt(("Please enter your name."))
  var scoreObject = {
    playerName: playerInfo,
    playerScore: userScore
  }

  score.push(scoreObject);

  localStorage.setItem('scores', JSON.stringify(score))

  retrieveScores()
}

// var scoreObject = ""
// var playerScore = []

// playerScore.push(scoreObject);

// localStorage.setItem("playerscore", JSON.stringify(playerScore));

// function retrieveScores(){
//     var localScores = JSON.parse(localStorage.getItem("playerScore"))
//     console.log(localScores)
//     console.log(retrieveScores)
//     if(localScores===null){
//       localScores=[];
//     }
//   [playerInfo:].forEach(function(scoreObject){
//     var scoreBoard = document.createElement("p");
//     scoreBoard.textContent= `${scoreObject.playerInfo} - ${scoreObject.userScore}`
//     document.querySelector(".scoreCard").appendChild(scoreBoard)
//   })
// }




// log high scores

// var playerScore = []

// var score = localStorage.getItem('scores');

// if(score){
//   score = JSON.parse(score);
// } else {
//   score = [];
// }

// function logScores(){
//   var savedScores = document.createElement("p")
//   savedScores.textContent = `${scoreObject.playerInfo} - ${scoreObject.userScore}`
// }
//  logScores()

//

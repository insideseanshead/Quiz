// Make variables that I will call uppon.
var questionText = document.querySelector("#theQuestion");
var questionArray = 0;
var startBtn = document.querySelector("#start")

var oneImg = document.querySelector("#imgOne");
var oneText = document.querySelector("#pOne");
var oneTrue = " "

var twoImg = document.querySelector("#imgTwo");
var twoText = document.querySelector("#pTwo");
var twoTrue = " "

var threeImg = document.querySelector("#imgThree");
var threeText = document.querySelector("#pThree");
var threeTrue = " "

var fourImg = document.querySelector("#imgFour");
var fourText = document.querySelector("#pFour");
var fourTrue = " "

// create an array of objects which consists of questions and answers.

var theBatman = [
    {
        question: "In Batman the Animated Series who was the original voice of the joker?",
        answerOneImg: "images/MarkHammil.jpg",
        answerOneText: "Mark Hammil",
        oneCorrect: false,
        answerTwoImg: "images/HankAzaria.jpg",
        answerTwoText: "Hank Azaria",
        twoCorrect: false,
        answerThreeImg: "images/TimCurry.jpg",
        answerThreeText: "Tim Curry",
        threeCorrect: true,
        answerFourImg: "images/TonyShaloub.jpg",
        answerFourText: "Tony Shaloub",
        fourCorrect: false,
    },
    {
        question: "Who has not been the voice of Batman?",
        answerOneImg: "images/KevinConroy.jpg",
        answerOneText: "Kevin Conroy",
        oneCorrect: false,
        answerTwoImg: "images/DiedrichBader.jpg",
        answerTwoText: "Diedrich Bader",
        twoCorrect: false,
        answerThreeImg: "images/WillFriedle.jpg",
        answerThreeText: "Will Fridele",
        threeCorrect: false,
        answerFourImg: "images/CaseyKasem.jpg",
        answerFourText: "Casey Kasem",
        fourCorrect: true,
    },
    {
        question: "Who is Colin Farrell playing in 'The Batman'?",
        answerOneImg:  "images/Joker.jpg",
        answerOneText: "The Joker?",
        oneCorrect: false,
        answerTwoImg:  "images/TwoFace.jpg",
        answerTwoText: "Two Face",
        twoCorrect: false,
        answerThreeImg: "images/Penguin.jpg",
        answerThreeText: "The Penguin",
        threeCorrect: true,
        answerFourImg: "images/CondimentKing.jpg",
        answerFourText: "Condiment King",
        fourCorrect: false,
    }     
]



startBtn.addEventListener("click", function(){
    if(questionArray === 0){
        // Put Question in Jumbotron
        questionText.textContent = theBatman[questionArray].question;
        // fill first answer elements
        oneImg.src = theBatman[questionArray].answerOneImg;
        oneText.textContent = theBatman[questionArray].answerOneText;
        oneTrue = theBatman[questionArray].oneCorrect;
        // fill second answer elements
        twoImg.src = theBatman[questionArray].answerTwoImg;
        twoText.textContent = theBatman[questionArray].answerTwoText;
        twoTrue = theBatman[questionArray].twoCorrect
        // fill third answer elements
        threeImg.src = theBatman[questionArray].answerThreeImg;
        threeText.textContent = theBatman[questionArray].answerThreeText;
        threeTrue = theBatman[questionArray].threeCorrect;
        //fill fourth answer elements
        fourImg.src = theBatman[questionArray].answerFourImg;
        fourText.textContent = theBatman[questionArray].answerFourText;
        fourTrue = theBatman[questionArray].fourCorrect;
    }
})


// questionText.textContent = "asdjfdsafj"
// oneImg.src = "images/TimCurry.jpg"
// oneText.textContent = "ds;fdsak;f"

console.log(theBatman)

//  
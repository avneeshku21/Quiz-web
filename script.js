let timeLeft=document.querySelector('.time-left')
let quizContainer=document.getElementById('container')
let nextBtn=document.getElementById('next-button')
let countofQuestion=document.querySelector('.number-of-question')
let displayContainer=document.getElementById('display-conatainer')
let scoreContainer=document.querySelector('.score-conatainer')
let restart=document.getElementById('restart')
let userScore=document.getElementById('user-score')
let startScreen=document.querySelector('start-screen')
let startButton=document.getElementById('start-button')
let questionCount;
let scoreCount=0
let count=11
let countdown;

const quizArray=[
    {
        id:'1',
        question: "Full form of Html?",
        options: ["Hello to my world",
         "Hey text my language",
         "Hyper text Markup language",
         "Hyper text Makeup language"],
        correct: "answer3",
      },
      {
        id:'2',
        question: "why do we use ReactJs?",
    options: ["For building UI's",
         "For back-end",
         "For data-bases",
         "It's nothing."],
        correct: "answer1",
      },
      {
        id:'3',
        question: "Which tag is incorrect?",
        option1: ["<kbd>",
         "<html>",
         "<abbr>",
         "All are correct"],
         correct: "answer4",
      },
      {
        id:'4',
        question: "which is wrong here?",
        options: ["var x = 10;",
       "x = 10",
         "let x = 10;",
        "const x = 10;"],
        correct: "answer2",
      },
      {
        id:'5',
        question: "What is git?",
        options: ["version control system",
        "A ugly thing",
       "Distributed version control system",
         "A useful stuff"],
        correct: "answer3",
      },
      {
        id:'6',
        question: "Which is correct?",
        options: ["<html><body>...</body></html>",
         "<body><html>...</html></body>",
       "<script><head>...</head></script>",
         "All are correct."],
         correct: "answer1",
      },
      {
        id:'7',
        question: "Which is unchangeable",
        options: ["var x = 10;",
         "let x = 10;",
         "const x = 10;",
         "All are unchangeable."],
         correct: "answer3",
      },
      {
        id:'8',
        question: "How many kinds of loops are here in js?",
        options: ["2",
         "6",
        "1",
         "5"],
        correct: "answer4",
      },
      {
        id:'9',
        question: "What does an array called in js?",
        options:[ "Array",
        "Object",
         "String",
        "Boolean"],
        correct: "answer2",
      },
      {
        id:'10',
        question: "Which is the best js Library?",
        options: ["ReactJs",
         "JQuery",
         "Angular",
        "Vue"],
        correct: "answer1",
      },
    ];
    restart.addEventListener('click',()=>{
        initial();
        displayContainer.classList.remove('hide')
        scoreContainer.classList.add('hide')
    })
    nextBtn.addEventListener('click',(displayNext=()=>{
questionCount+=1
if(questionCount==quizArray.length){
    displayContainer.classList.add('hide')
    scoreContainer.classList.remove('hide')
    userScore.innerHTML="Your Score is"+ scoreCount+ "out of " + questionCount;
}
else{
    countofQuestion.innerHTML=questionCount+1+"of"+ quizArray.length+"Question";
    quizeDisplay(questionCount);
    count=11;
    clearInterval(countdown)
    timerDisplay();
}
    })
);
 
const timerDisplay=()=>{
    countdown=setInterval(()=>{
        count--;
        timeLeft.innerHTML=`${count}s`;
        if(count==0){
            clearInterval(countdown);
            displayNext();
        }
    })
}

    
    
    
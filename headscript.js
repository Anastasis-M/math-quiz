//--------------------------------------------------------------GLOBAL--------------------------------------------------------------

//Elements and variables
const quizContent = document.getElementById("quiz-content");
const timerText = document.getElementById("timer-text");
const questiontimer = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const questions = [];
let currentQuestion = 0;
let timerStatus = false;
let questionStatus = [
  {
    question: 1,
    submitStatus: false,
    timerStatus: false
  },
  {
    question: 2,
    submitStatus: false,
    timerStatus: false
  },
  {
    question: 3,
    submitStatus: false,
    timerStatus: false
  },
  {
    question: 4,
    submitStatus: false,
    timerStatus: false
  },
  {
    question: 5,
    submitStatus: false,
    timerStatus: false
  },
  {
    question: 6,
    submitStatus: false,
    timerStatus: false
  }

];
let catholicTimer;
let catholicTimerText = "";
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let sumTimeText = "";


//Function for quiz timer
function quizTimer() {
  let counter = 0;
  catholicTimer = setInterval(function () {
    if (counter < 10) {
      catholicTimerText = "00:0" + counter;
    } else if (counter < 60) {
      catholicTimerText = "00:" + counter;
    } else if (counter > 60) {
      if (counter % 60 > 10) {
      catholicTimerText = (counter - (counter % 60)) / 60 + ":" + counter % 60;
      } else { 
        catholicTimerText = (counter - (counter % 60)) / 60 + ":0" + counter % 60;
      }
    }
    counter++;
  }
    , 1000);
}


//Function for creating the question based on the type
function createQuestion() {
  document.getElementById("question-title").innerHTML = (currentQuestion + 1);
  quizContent.innerHTML = "";
  if (questions[currentQuestion] == 1) {
    createQuestionOfType1();
    currentQuestion++;
  } else if (questions[currentQuestion] == 2) {
    createQuestionOfType2();
    currentQuestion++;
  } else if (questions[currentQuestion] == 3) {
    createQuestionOfType3();
    currentQuestion++;
  } else if (questions[currentQuestion] == 4) {
    createQuestionOfType4();
    currentQuestion++;
  } else if (questions[currentQuestion] == 5) {
    createQuestionOfType5();
    currentQuestion++;
  } else if (questions[currentQuestion] == 6) {
    createQuestionOfType6();
    currentQuestion++;
  }
  if ((currentQuestion - 1) == 0) {
    $("#previous-btn").css({ pointerEvents: "none", opacity: 0.6 });
  } else if (currentQuestion == questions.length) {
    checkBtn.style.display = "inline-block";
    $("#next-btn").css({ pointerEvents: "none", opacity: 0.6 });
    $("#check-btn").css("pointer-events", "auto");
  }
}

//Function for going to the previous question
function previousQuestion() {
  $("#next-btn").css({ pointerEvents: "auto", opacity: 1 });
  if (currentQuestion > 1) {
    if (!questionStatus[currentQuestion - 1].timerStatus) {
      submitAnswers();
    }
    if (questions[currentQuestion - 1] == 1) {
      randomQuestionsOfType1Index--;
    } else if (questions[currentQuestion - 1] == 2) {
      randomQuestionsOfType2Index--;
    } else if (questions[currentQuestion - 1] == 3) {
      randomQuestionsOfType3Index--;
    } else if (questions[currentQuestion - 1] == 4) {
      randomQuestionsOfType4Index--;
    } else if (questions[currentQuestion - 1] == 5) {
      randomQuestionsOfType5Index--;
    } else if (questions[currentQuestion - 1] == 6) {
      randomQuestionsOfType6Index--;
    }
    currentQuestion -= 2;
    if (currentQuestion == 0) {
      $("#previous-btn").css({ pointerEvents: "none", opacity: 0.6 });
    }
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);
    clearInterval(timer5);
    clearInterval(timer6);
    document.getElementById("question-title").innerHTML = (currentQuestion + 1);
    quizContent.innerHTML = "";
    if (questions[currentQuestion] == 1) {
      randomQuestionsOfType1Index--;
      createQuestionOfType1();
      currentQuestion++;
    } else if (questions[currentQuestion] == 2) {
      randomQuestionsOfType2Index--;
      createQuestionOfType2();
      currentQuestion++;
    } else if (questions[currentQuestion] == 3) {
      randomQuestionsOfType3Index--;
      createQuestionOfType3();
      currentQuestion++;
    } else if (questions[currentQuestion] == 4) {
      randomQuestionsOfType4Index--;
      createQuestionOfType4();
      currentQuestion++;
    } else if (questions[currentQuestion] == 5) {
      randomQuestionsOfType5Index--;
      createQuestionOfType5();
      currentQuestion++;
    } else if (questions[currentQuestion] == 6) {
      randomQuestionsOfType6Index--;
      createQuestionOfType6();
      currentQuestion++;
    }
  }
}

//Function for next question button
function nextQuestion() {
  $("#previous-btn").css({ pointerEvents: "auto", opacity: 1 });
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);
  clearInterval(timer4);
  clearInterval(timer5);
  clearInterval(timer6);
  if (!questionStatus[currentQuestion - 1].timerStatus) {
    submitAnswers();
  }
  createQuestion();
}

//Function for creatting the quiz
function createQuiz() {
  //Choosing the type of the six questions and their order
  let questionType = 0;
  let questionTypeCounter1 = 0;
  var questionTypeCounter2 = 0;
  var questionTypeCounter3 = 0;
  let questionTypeCounter4 = 0;
  let questionTypeCounter5 = 0;
  let questionTypeCounter6 = 0;
  while (questions.length < 6) {
    questionType = Math.floor(Math.random() * 6) + 1;
    if (questionType == 1 && questionTypeCounter1 < 3) {
      questions.push(questionType);
      questionTypeCounter1++;
    } else if (questionType == 2 && questionTypeCounter2 < 3) {
      questions.push(questionType);
      questionTypeCounter2++;
    } else if (questionType == 3 && questionTypeCounter3 < 3) {
      questions.push(questionType);
      questionTypeCounter3++;
    } else if (questionType == 4 && questionTypeCounter4 < 3) {
      questions.push(questionType);
      questionTypeCounter4++;
    } else if (questionType == 5 && questionTypeCounter5 < 3) {
      questions.push(questionType);
      questionTypeCounter5++;
    } else if (questionType == 6 && questionTypeCounter6 < 3) {
      questions.push(questionType);
      questionTypeCounter6++;
    }
  }
  //console.log(questions);

  //Initializing all questions
  randomQuestions1()
  randomQuestions2()
  randomQuestions3()
  randomQuestions4();
  randomQuestions5();
  randomQuestions6();

  //Change from welcome card to quiz card
  document.getElementById("welcome-card-border").style.animation = "slideOutTopwithFade 0.8s ease-in-out";
  document.getElementById("welcome-card-border").style.animationFillMode = "forwards";
  setTimeout(function () {
    document.getElementById("welcome-card-border").style.display = "none";
    document.getElementById("quiz-border").style.display = "flex";
    document.getElementById("quiz-border").style.animation = "popInwithwobble 0.8s ease-in-out";
  }, 850);
  //Initializing first question type and catholic timer
  setTimeout(function () {
    createQuestion();
    quizTimer();
  }, 850);
}

//Function for submitting the answers
function submitAnswers() {
  if (questions[currentQuestion - 1] == 1) {
    submitAnswerOfType1(randomQuestionsOfType1Index - 1, userAnswersOfType1[randomQuestionsOfType1Index - 1].answer);
    //console.log(userAnswersOfType1[randomQuestionsOfType1Index - 1].answer);
  } else if (questions[currentQuestion - 1] == 2) {
    submitAnswerOfType2(randomQuestionsOfType2Index - 1, userAnswersOfType2[randomQuestionsOfType2Index - 1].answer);
    //console.log(userAnswersOfType2[randomQuestionsOfType2Index - 1].answer);
  } else if (questions[currentQuestion - 1] == 3) {
    submitAnswerOfType3(randomQuestionsOfType3Index - 1, userAnswersOfType3[randomQuestionsOfType3Index - 1].answer);
    //console.log(userAnswersOfType3[randomQuestionsOfType3Index - 1].answer);
  } else if (questions[currentQuestion - 1] == 4) {
    submitAnswerOfType4(randomQuestionsOfType4Index - 1);
    //console.log(userAnswersOfType4);
  } else if (questions[currentQuestion - 1] == 5) {
    submitAnswerOfType5(randomQuestionsOfType5Index - 1);
    //console.log(userAnswersOfType5);
  } else if (questions[currentQuestion - 1] == 6) {
    submitAnswerOfType6(randomQuestionsOfType6Index - 1);
    //console.log(userAnswersOfType6);
  }

}


//Function for checking all answers of every question type
function checkAnswers() {
  clearInterval(catholicTimer);
  //Check if submitted status of every question is true
  if (currentQuestion == 6) {
    submitAnswers();
    //console.log(questionStatus);
  }
  for (let i = 0; i < questionStatus.length; i++) {
    if (!questionStatus[i].submitStatus) {
      alert("Δες όλες τις ερωτήσεις");
      return;
    }
  }
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);
  clearInterval(timer4);
  clearInterval(timer5);
  clearInterval(timer6);

  checkAnswersOfType1();
  checkAnswersOfType2();
  checkAnswersOfType3();
  checkAnswersOfType4();
  checkAnswersOfType5();
  checkAnswersOfType6();

  saveAvailableTimeOfType1();
  saveAvailableTimeOfType2();
  saveAvailableTimeOfType3();
  saveAvailableTimeOfType4();
  saveAvailableTimeOfType5();
  saveAvailableTimeOfType6();

  //Sum all time
  let sumTime = availableTimeOfType1 + availableTimeOfType2 + availableTimeOfType3 + availableTimeOfType4 + availableTimeOfType5 + availableTimeOfType6;

  if (sumTime < 10) {
    sumTimeText = "00:0" + sumTime;
  } else if (sumTime < 60) {
    sumTimeText = "00:" + sumTime;
  } else if (sumTime > 60) {
    if (sumTime % 60 > 10) {
      sumTimeText = (sumTime - (sumTime % 60)) / 60 + ":" + sumTime % 60;
    } else {
      sumTimeText = (sumTime - (sumTime % 60)) / 60 + ":0" + sumTime % 60;
    }
  }

  //Sum all correct answers
  let correctAnswers = correctAnswersOfType1 + correctAnswersOfType2 + correctAnswersOfType3 + correctAnswersOfType4 + correctAnswersOfType5 + correctAnswersOfType6;

  //Change from quiz card to result card
  document.getElementById("quiz-border").style.animation = "slideOutTopwithFade 0.8s ease-in-out";
  document.getElementById("quiz-border").style.animationFillMode = "forwards";
  setTimeout(function () {
    document.getElementById("quiz-border").style.display = "none";
    document.getElementById("results-modal-container").style.display = "flex";
    document.getElementsByClassName("results-modal-border")[0].style.animation = "popInwithwobble 0.8s ease-in-out";
  }, 850);

  let successPrecentage = ((correctAnswers / 6) * 100).toFixed(2);

  //Display the result
  document.getElementById("correct-answers").innerHTML = correctAnswers;
  document.getElementById("wrong-answers").innerHTML = 6 - correctAnswers;
  document.getElementById("success-rate").innerHTML = successPrecentage;
  document.getElementById("total-time").innerHTML = catholicTimerText;
  document.getElementById("available-time").innerHTML = sumTimeText;
}

//--------------------------------------------------------------TYPE 4 QUESTIONS-----------------------------------------------------------------

//Questions
const questionsOfType4 = [
  {
    question: "Το τριώνυμο αx^2+ βx+ γ , α≠0 έχει μια διπλή ρίζα όταν Δ <input type=\"text\" id=\"input\" placeholder=\"______\"  maxlength=\"20\" oninput=\"this.size = this.value.length\"/>.",
    correctAnswer: ">0",
    time: 30
  },
  {
    question: "Οι απέναντι πλευρές παραλληλογράμμου είναι παράλληλες και <input type=\"text\" id=\"input\" placeholder=\"______\"  maxlength=\"20\" oninput=\"this.size = this.value.length\"/>.",
    correctAnswer: "ίσες",
    time: 30
  },
  {
    question: "Αν α*β = 0 τότε α=0 <input type=\"text\" id=\"input\" placeholder=\"______\" maxlength=\"20\" oninput=\"this.size = this.value.length\"/> β=0.",
    correctAnswer: "ή",
    time: 30
  }
];

//User's answers
let userAnswersOfType4 = [];

//Elements and variables
let randomQuestionsOfType4 = [];
let randomQuestionsOfType4Index = 0;
let correctAnswersOfType4 = 0;
var input;
let availableTimeOfType4 = 0;

//Function for choosing random questions based on the number of type 4 in the questions array
function randomQuestions4() {
  let questionsOfType4Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 4) {
      questionsOfType4Counter++;
    }
  }


  while (randomQuestionsOfType4.length < questionsOfType4Counter) {
    let randomQuestion4 = questionsOfType4[Math.floor(Math.random() * questionsOfType4.length)];
    if (!randomQuestionsOfType4.includes(randomQuestion4)) {
      randomQuestionsOfType4.push(randomQuestion4);
    }
  }
}

//Function for "printing" the questions
function createQuestionOfType4() {
  let div = document.createElement("div");
  div.setAttribute("id", "question");
  quizContent.appendChild(div);
  const question = randomQuestionsOfType4[randomQuestionsOfType4Index].question;
  document.getElementById("question").innerHTML = question;
  input = document.getElementById("input");
  input.setAttribute("size", input.getAttribute("placeholder").length);
  if (randomQuestionsOfType4[randomQuestionsOfType4Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType4[randomQuestionsOfType4Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }
  const currentIndex4 = randomQuestionsOfType4Index;
  countdownTimer4(currentIndex4);
  if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType4[currentIndex4].length > 0)) {
    input.value = userAnswersOfType4[currentIndex4];
    input.disabled = true;
  } else if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType4[currentIndex4].length == 0)) {
    input.value = "- - - -";
    input.disabled = true;
  } else if ((questionStatus[currentQuestion].submitStatus == true) && (userAnswersOfType4[currentIndex4].length > 0)) {
    input.value = userAnswersOfType4[currentIndex4];
  } else {
    input.focus();
  }
  randomQuestionsOfType4Index++;
}

//Function for question countdown timer
function countdownTimer4(currentIndex4) {
  time = randomQuestionsOfType4[currentIndex4].time;
  timer4 = setInterval(function () {
    if (time > 0) {
      time--;
      randomQuestionsOfType4[currentIndex4].time = time;
      questiontimer.innerHTML = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      clearInterval(timer4);
      questiontimer.innerHTML = "-";
      input.disabled = true;
      questionStatus[currentQuestion - 1].timerStatus = true;
      submitAnswerOfType4(currentIndex4);
      return;
    }
  }, 1000);
}

//Function for submitting the answer
function submitAnswerOfType4(currentIndex4) {
  userAnswersOfType4[currentIndex4] = input.value;
  if (input.value == "") {
    input.value = "- - - -";
  }
  questionStatus[currentQuestion - 1].submitStatus = true;
  //console.log("Type4Q " + (currentIndex4 + 1) + " userAnswer: " + userAnswersOfType4[currentIndex4]);
  //console.log(userAnswersOfType4);
}

//Function for checking all answers of type 4
function checkAnswersOfType4() {
  for (let i = 0; i < randomQuestionsOfType4.length; i++) {
    if (userAnswersOfType4[i] == randomQuestionsOfType4[i].correctAnswer) {
      correctAnswersOfType4++;
    }
  }
  //console.log("Correct answers of type 4: " + correctAnswersOfType4);
}

//Function for saving the available time of type 4
function saveAvailableTimeOfType4() {
  for (let i = 0; i < randomQuestionsOfType4.length; i++) {
    availableTimeOfType4 += randomQuestionsOfType4[i].time;
  }
  //console.log("Available time of type 4: " + availableTimeOfType4);
}

//--------------------------------------------------------------TYPE 5 QUESTIONS-----------------------------------------------------------------

const questionsOfType5 = [
  {
    question: "Αν 0 < α < 1 να διατάξετε από το μικρότερο προς το μεγαλύτερο τους αριθμούς:",
    image: "",
    initialIndexes: [1, 2, 3],
    correctIndexes: [2, 3, 1],
    time: 60
  },
  {
    question: "Aν f συνάρτηση γνησίως αύξουσα με πεδίο ορισμού το R, να διατάξετε από τη μικρότερη προς τη μεγαλύτερη τις τιμές:",
    image:"",
    initialIndexes: [4, 5, 6],
    correctIndexes: [5, 4, 6],
    time: 60
  },
  {
    question: "Αν f η συνάρτηση της εικόνας να διατάξετε από το μικρότερο προς το μεγαλύτερο τις τιμές της:",
    image: "συνάρτηση.png",
    initialIndexes: [7, 8, 9],
    correctIndexes: [9, 7, 8],
    time: 60
  }
];

//User's answers
const userAnswersOfType5 = [
  {
    question: 1,
    modifiedIndexes: []
  },
  {
    question: 2,
    modifiedIndexes: []
  },
  {
    question: 3,
    modifiedIndexes: []
  }
];

//Elements and variables
let randomQuestionsOfType5 = [];
let randomQuestionsOfType5Index = 0;
let correctAnswersOfType5 = 0;
let unansweredQuestionsOfType5 = 0;
var sortable;
let availableTimeOfType5 = 0;

//Function for choosing random questions based on the number of type 5 in the questions array
function randomQuestions5() {
  //count the 5s in the questions array
  let questionsOfType5Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 5) {
      questionsOfType5Counter++;
    }
  }

  //push random questions to the randomQuestionsOfType5 array based on the number of 5s
  while (randomQuestionsOfType5.length < questionsOfType5Counter) {
    let randomQuestion5 = questionsOfType5[Math.floor(Math.random() * questionsOfType5.length)];
    if (!randomQuestionsOfType5.includes(randomQuestion5)) {
      randomQuestionsOfType5.push(randomQuestion5);
    }
  }


  // suffle initial indexes of the chosen questions
  for (let i = 0; i < randomQuestionsOfType5.length; i++) {
    randomQuestionsOfType5[i].initialIndexes.sort(function () { return 0.5 - Math.random() });
  }
}

//Function for printing the "questions"
function createQuestionOfType5() {

  if (randomQuestionsOfType5[randomQuestionsOfType5Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType5[randomQuestionsOfType5Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }
  const currentIndex5 = randomQuestionsOfType5Index;
  countdownTimer5(currentIndex5);

  //console.log(questionStatus[currentQuestion].timerStatus + " " + userAnswersOfType5[currentIndex5].modifiedIndexes.length);
  if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType5[currentIndex5].modifiedIndexes.length == 0)) {
    //print questionAndDragContainer
    let container = document.createElement("div");
    container.setAttribute("id", "questionAndDragContainer");
    quizContent.appendChild(container);
    //print the question
    let question = document.createElement("p");
    question.innerHTML = randomQuestionsOfType5[randomQuestionsOfType5Index].question;
    question.setAttribute("id", "question");
    container.appendChild(question);
    if (randomQuestionsOfType5[randomQuestionsOfType5Index].image != "") {
      let div = document.createElement("div");
      div.setAttribute("id", "questionImage");
      container.appendChild(div);
      let image = document.createElement("img");
      image.setAttribute("src","./Images/"+ randomQuestionsOfType5[randomQuestionsOfType5Index].image);
      div.appendChild(image);
    }

    let divcontainer = document.createElement("div");
    divcontainer.setAttribute("id", "drag-container");
    container.appendChild(divcontainer);
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + randomQuestionsOfType5[randomQuestionsOfType5Index].initialIndexes[i] + ".png");
      //console.log("Initial images: ./Images/" + randomQuestionsOfType5[randomQuestionsOfType5Index].initialIndexes[i] + ".png");
      div.appendChild(img);
    }
    var dragContainer = document.getElementById('drag-container');
    //Drag & drop
    sortable = new Sortable(dragContainer, {
      animation: 150
    });
  } else if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType5[currentIndex5].modifiedIndexes.length > 0)) {
    //print questionAndDragContainer
    let container = document.createElement("div");
    container.setAttribute("id", "questionAndDragContainer");
    quizContent.appendChild(container);
    //print the question
    let question = document.createElement("p");
    question.innerHTML = randomQuestionsOfType5[randomQuestionsOfType5Index].question;
    question.setAttribute("id", "question");
    container.appendChild(question);

    if (randomQuestionsOfType5[randomQuestionsOfType5Index].image != "") {
      let div = document.createElement("div");
      div.setAttribute("id", "questionImage");
      container.appendChild(div);
      let image = document.createElement("img");
      image.setAttribute("src","./Images/"+ randomQuestionsOfType5[randomQuestionsOfType5Index].image);
      div.appendChild(image);
    }

    let divcontainer = document.createElement("div");
    divcontainer.setAttribute("id", "drag-container");
    container.appendChild(divcontainer);
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + userAnswersOfType5[currentIndex5].modifiedIndexes[i] + ".png");
      //console.log("/Images/" + userAnswersOfType5[currentIndex5].modifiedIndexes[i] + ".png");
      
      div.appendChild(img);
    }
    var dragContainer = document.getElementById('drag-container');
    //Drag & drop
    sortable = Sortable.create(dragContainer, {
      animation: 150
    });
  } else if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType5[currentIndex5].modifiedIndexes.length > 0)) {
    //print questionAndDragContainer
    let container = document.createElement("div");
    container.setAttribute("id", "questionAndDragContainer");
    quizContent.appendChild(container);
    //print the question
    let question = document.createElement("p");
    question.innerHTML = randomQuestionsOfType5[randomQuestionsOfType5Index].question;
    question.setAttribute("id", "question");
    container.appendChild(question);

    let divcontainer = document.createElement("div");
    divcontainer.setAttribute("id", "drag-container");
    container.appendChild(divcontainer);
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + userAnswersOfType5[currentIndex5].modifiedIndexes[i] + ".png");
      //console.log("/Images/" + userAnswersOfType5[currentIndex5].modifiedIndexes[i] + ".png");
      div.appendChild(img);
    }
    $(".draggable-item").css({ "pointer-events": "none" , "opacity": "0.6"});
  } else if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType5[currentIndex5].modifiedIndexes.length == 0)) {
    //print questionAndDragContainer
    let container = document.createElement("div");
    container.setAttribute("id", "questionAndDragContainer");
    quizContent.appendChild(container);
    //print the question
    let question = document.createElement("p");
    question.innerHTML = randomQuestionsOfType5[randomQuestionsOfType5Index].question;
    question.setAttribute("id", "question");
    container.appendChild(question);

    let divcontainer = document.createElement("div");
    divcontainer.setAttribute("id", "drag-container");
    container.appendChild(divcontainer);
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + randomQuestionsOfType5[randomQuestionsOfType5Index].initialIndexes[i] + ".png");
      div.appendChild(img);
    }
    $(".draggable-item").css({ "pointer-events": "none", "opacity": "0.6" });
  }
  randomQuestionsOfType5Index++;
}

//Function for question countdown timer
function countdownTimer5(currentIndex5) {
  time = randomQuestionsOfType5[currentIndex5].time;
  timer5 = setInterval(function () {
    if (time > 0) {
      time--;
      questiontimer.innerHTML = time;
      randomQuestionsOfType5[currentIndex5].time = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      $(".draggable-item").css({ "pointer-events": "none", "opacity": "0.6" });
      submitAnswerOfType5(currentIndex5);
      sortable.option("disabled", true);
      questionStatus[currentQuestion - 1].timerStatus = true;
      //console.log("Timer5 stopped");
      clearInterval(timer5);
      questiontimer.innerHTML = "-";
      return;
    }
  }, 1000);
}

//Function for submitting the answer
function submitAnswerOfType5(currentIndex5) {
  questionStatus[currentQuestion - 1].submitStatus = true;
  let divs = document.getElementsByClassName("draggable-item");
  userAnswersOfType5[currentIndex5].modifiedIndexes = [];
  for (let i = 0; i < divs.length; i++) {
    let img = divs[i].getElementsByTagName("img")[0].getAttribute("src").slice(9, 10);
    //console.log(img);
    userAnswersOfType5[currentIndex5].modifiedIndexes.push(img);
  }
  //console.log("Type5Q answers" + userAnswersOfType5[currentIndex5].modifiedIndexes);
  //console.log(userAnswersOfType5);
}

//Function for checking all answers of type 5
function checkAnswersOfType5() {
  for (let i = 0; i < randomQuestionsOfType5.length; i++) {
    if (userAnswersOfType5[i].modifiedIndexes.toString() == randomQuestionsOfType5[i].correctIndexes.toString()) {
      correctAnswersOfType5++;
    }
  }
  //console.log("Correct answers of type 5: " + correctAnswersOfType5);
}

//Function for saving the available time of type 5
function saveAvailableTimeOfType5 () {
  for (let i = 0; i < randomQuestionsOfType5.length; i++) {
    availableTimeOfType5 += randomQuestionsOfType5[i].time;
  }
  //console.log("Available time of type 5: " + availableTimeOfType5);
}

//--------------------------------------------------------------TYPE 6 QUESTIONS-----------------------------------------------------------------

const questionsOfType6 = [
  {
    question: 1,
    matchingIndexes: [10, 11, 12],
    initialIndexes: [13, 14, 15],
    correctIndexes: [14, 15, 13],
    time: 60
  },
  {
    question: 2,
    matchingIndexes: [16, 17, 18],
    initialIndexes: [20, 19, 21],
    correctIndexes: [20, 19, 21],
    time: 60
  },
  {
    question: 3,
    matchingIndexes: [22, 23, 24],
    initialIndexes: [27, 25, 26],
    correctIndexes: [26, 27, 25],
    time: 60
  }
];

//User's answers
const userAnswersOfType6 = [
  {
    question: 1,
    modifiedIndexes: []
  },
  {
    question: 2,
    modifiedIndexes: []
  },
  {
    question: 3,
    modifiedIndexes: []
  }
];

//Elements and variables
let randomQuestionsOfType6 = [];
let randomQuestionsOfType6Index = 0;
var sortable1;
var sortable2;
let correctAnswersOfType6 = 0;
let availableTimeOfType6 = 0;

//Function for choosing random questions based on the number 6s in the questions array
function randomQuestions6() {
  //count the 6s in the questions array
  let questionsOfType6Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 6) {
      questionsOfType6Counter++;
    }
  }


  //push random questions to the randomQuestionsOfType6 array based on the number of 6s
  while (randomQuestionsOfType6.length < questionsOfType6Counter) {
    let randomQuestion6 = questionsOfType6[Math.floor(Math.random() * questionsOfType6.length)];
    if (!randomQuestionsOfType6.includes(randomQuestion6)) {
      randomQuestionsOfType6.push(randomQuestion6);
    }
  }


  // suffle initial indexes of the chosen questions
  for (let i = 0; i < randomQuestionsOfType6.length; i++) {
    randomQuestionsOfType6[i].initialIndexes.sort(function () { return 0.5 - Math.random() });
  }
}

//Function for printing the "questions"
function createQuestionOfType6() {
  let instruction = document.createElement("div");
  instruction.setAttribute("id", "question");
  instruction.innerHTML = "Αντιστοιχίστε τις εικόνες τις 2ης σειράς με αυτές της πρώτης τοποθετώντας τις κάτω από το σωστό βέλος.";
  quizContent.appendChild(instruction);
  let matchingContainer = document.createElement("div");
  matchingContainer.setAttribute("id", "matching-container");
  quizContent.appendChild(matchingContainer);
  for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "matching-item");
    document.getElementById("matching-container").appendChild(div);
    let img = document.createElement("img");
    img.setAttribute("src", "./Images/" + randomQuestionsOfType6[randomQuestionsOfType6Index].matchingIndexes[i] + ".png");
    div.appendChild(img);
  }
  currentIndex6 = randomQuestionsOfType6Index;
  let arrowLine = document.createElement("div");
  arrowLine.setAttribute("id", "arrow-line");
  quizContent.appendChild(arrowLine);
  for (let i = 0; i < randomQuestionsOfType6[currentIndex6].initialIndexes.length; i++) {
    let arrow = document.createElement("i");
    arrow.classList.add("fa-solid", "fa-arrow-down-long");
    arrow.setAttribute("id", "arrow");
    arrowLine.appendChild(arrow);
  }


  if (randomQuestionsOfType6[randomQuestionsOfType6Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType6[randomQuestionsOfType6Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }

  countdownTimer6(currentIndex6);


  if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType6[currentIndex6].modifiedIndexes.length == 0)) {
    let divcontainer1 = document.createElement("div");
    divcontainer1.setAttribute("id", "drag-container1");
    quizContent.appendChild(divcontainer1);

    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container1").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + randomQuestionsOfType6[randomQuestionsOfType6Index].initialIndexes[i] + ".png");
      //console.log("Image:" + img);
      div.appendChild(img);
    }
    //Drag & drop
    $('#drag-container1').sortable({
      animation: 150
    });
  } else if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType6[currentIndex6].modifiedIndexes.length > 0)) {
    let divcontainer1 = document.createElement("div");
    divcontainer1.setAttribute("id", "drag-container1");
    quizContent.appendChild(divcontainer1);
    for (let i = 0; i < userAnswersOfType6[currentIndex6].modifiedIndexes.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container1").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + userAnswersOfType6[currentIndex6].modifiedIndexes[i] + ".png");
      div.appendChild(img);
      //console.log("Image:" + img);
    }

    //Drag & drop;
    $('#drag-container1').sortable({
      animation: 150
    });
  } else if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType6[currentIndex6].modifiedIndexes.length > 0)) {
    let divcontainer1 = document.createElement("div");
    divcontainer1.setAttribute("id", "drag-container1");
    quizContent.appendChild(divcontainer1);
    for (let i = 0; i < userAnswersOfType6[currentIndex6].modifiedIndexes.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container1").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + userAnswersOfType6[currentIndex6].modifiedIndexes[i] + ".png");
      div.appendChild(img);
      //console.log("Image:" + img);
    }
    $(".draggable-item").css({ "pointer-events": "none" , "opacity": "0.6"});
  } else if ((questionStatus[currentQuestion].timerStatus == true) && (userAnswersOfType6[currentIndex6].modifiedIndexes.length == 0)) {
    let divcontainer1 = document.createElement("div");
    divcontainer1.setAttribute("id", "drag-container1");
    quizContent.appendChild(divcontainer1);
    
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "draggable-item");
      document.getElementById("drag-container1").appendChild(div);
      let img = document.createElement("img");
      img.setAttribute("src", "./Images/" + randomQuestionsOfType6[randomQuestionsOfType6Index].initialIndexes[i] + ".png");
      div.appendChild(img);
    }
    $(".draggable-item").css({ "pointer-events": "none" , "opacity": "0.6"});
  }

  randomQuestionsOfType6Index++;
}

//Function for countdown timer
function countdownTimer6(currentIndex6) {
  time = randomQuestionsOfType6[currentIndex6].time;
  timer6 = setInterval(function () {
    if (time > 0) {
      time--;
      questiontimer.innerHTML = time;
      randomQuestionsOfType6[currentIndex6].time = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      questionStatus[currentQuestion - 1].timerStatus = true;
      submitAnswerOfType6(currentIndex6);
      $('#drag-container1').sortable('destroy');
      $('#drag-container2').sortable('destroy');
      $(".draggable-item").css({ "pointer-events": "none" , "opacity": "0.6"});
      clearInterval(timer6);
      questiontimer.innerHTML = "-";
      return;
    }
  }, 1000);
}

//Submit answer of type 6
function submitAnswerOfType6(currentIndex6) {
  questionStatus[currentQuestion - 1].submitStatus = true;
  //Get the indexes of the user's answers thar are in dragContainer1 and push them to the userAnswersOfType6 array
  let dragContainer1 = document.getElementById("drag-container1");
  userAnswersOfType6[currentIndex6].modifiedIndexes = [];
  for (let i = 0; i < dragContainer1.children.length; i++) {
    let itemName = document.getElementById("drag-container1").children[i].children[0].src.slice(-6, -4);
    userAnswersOfType6[currentIndex6].modifiedIndexes.push(itemName);
    //console.log(itemName);

  }
  //console.log("Type6Q answers: " + userAnswersOfType6[currentIndex6].modifiedIndexes);
}

//Check answers of type 6
function checkAnswersOfType6() {
  for (let i = 0; i < randomQuestionsOfType6.length; i++) {
    if (userAnswersOfType6[i].modifiedIndexes.toString() == randomQuestionsOfType6[i].initialIndexes.toString()) {
      correctAnswersOfType6++;
    }
  }
  //console.log("Correct answers of type 6: " + correctAnswersOfType6);
}

//Function for saving the available time of type 6
function saveAvailableTimeOfType6() {
  for (let i = 0; i < randomQuestionsOfType6.length; i++) {
    availableTimeOfType6 += randomQuestionsOfType6[i].time;
  }
  //console.log("Available time of type 6: " + availableTimeOfType6);
}

//--------------------------------------------------------------TYPE 1-----------------------------------------------------------------

const questionsOfType1 = [
  {
    question: "Η ανίσωση αx+β>0 έχει άπειρες λύσεις για α=0 και β<0.",
    answer: "False",
    time: 30,
  },
  {
    question: "Αν α > 3 και β > 2, τότε αβ > 6.",
    answer: "True",
    time: 30,
  },
  {
    question: "Αν α > β και γ > δ τοτε α-γ > β-δ.",
    answer: "False",
    time: 30,
  }
];

const userAnswersOfType1 = [
  {
    answer: "",
  },
  {
    answer: "",
  },
  {
    answer: "",
  }
];

//Elements and variables
let randomQuestionsOfType1 = [];
let randomQuestionsOfType1Index = 0;
let correctAnswersOfType1 = 0;
let availableTimeOfType1 = 0;

//function for choosing random questions based on the number of type 1 questions in the questions array
function randomQuestions1() {
  //count the 1s in the questions array
  let questionsOfType1Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 1) {
      questionsOfType1Counter++;
    }
  }

  //push random questions to the randomQuestionsOfType1 array based on the number of 1s
  while (randomQuestionsOfType1.length < questionsOfType1Counter) {
    let randomQuestion1 = questionsOfType1[Math.floor(Math.random() * questionsOfType1.length)];
    if (!randomQuestionsOfType1.includes(randomQuestion1)) {
      randomQuestionsOfType1.push(randomQuestion1);
    }
  }
}

//Function for creating the questions of type 1
function createQuestionOfType1() {
  let div = document.createElement("div");
  div.setAttribute("id", "question");
  quizContent.appendChild(div);
  const question = randomQuestionsOfType1[randomQuestionsOfType1Index].question;
  document.getElementById("question").innerHTML = question;
  let answerContainer = document.createElement("div");
  answerContainer.setAttribute("id", "answer-container");
  quizContent.appendChild(answerContainer);

  let divTrue = document.createElement("div");
  divTrue.setAttribute("id", "true");
  answerContainer.appendChild(divTrue);
  let iconTrue = document.createElement("i");
  iconTrue.setAttribute("class", "fas fa-check");
  divTrue.appendChild(iconTrue);
  divTrue.innerHTML += " Σωστό";


  let divFalse = document.createElement("div");
  divFalse.setAttribute("id", "false");
  answerContainer.appendChild(divFalse);
  let iconFalse = document.createElement("i");
  iconFalse.setAttribute("class", "fas fa-times");
  divFalse.appendChild(iconFalse);
  divFalse.innerHTML += " Λάθος";


  if (randomQuestionsOfType1[randomQuestionsOfType1Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType1[randomQuestionsOfType1Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }
  const currentIndex1 = randomQuestionsOfType1Index;
  countdownTimer1(currentIndex1);

  if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType1[currentIndex1].answer.length >= 0)) {
    if (userAnswersOfType1[currentIndex1].answer == "True") {
      $("#true").css({ "color": "white", "background-color": "#FE8882" });
    } else if (userAnswersOfType1[currentIndex1].answer == "False") {
      $("#false").css({ "color": "white", "background-color": "#FE8882" });
    }

    
    divTrue.addEventListener("click", function () {
      $("#true").css({ "color": "white", "background-color": "#FE8882" });
      $("#false").css({ "color": "#FE8882", "background-color": "white" });
      submitAnswerOfType1(currentIndex1, "True");
    });
    
    divFalse.addEventListener("click", function () {
      $("#false").css({ "color": "white", "background-color": "#FE8882" });
      $("#true").css({ "color": "#FE8882", "background-color": "white" });
      submitAnswerOfType1(currentIndex1, "False");
    });
  } else if (questionStatus[currentQuestion].timerStatus == true) {
    $("#answer-container").css({ "pointer-events": "none", "opacity": "0.5" });
    if (userAnswersOfType1[currentIndex1].answer == "True") {
      $("#true").css({ "color": "white", "background-color": "#FE8882" });
    } else if (userAnswersOfType1[currentIndex1].answer == "False") {
      $("#false").css({ "color": "white", "background-color": "#FE8882" });
    }
  }

  randomQuestionsOfType1Index++;
}

//Function for countdown timer
function countdownTimer1(currentIndex1) {
  time = randomQuestionsOfType1[currentIndex1].time;
  timer1 = setInterval(function () {
    if (time > 0) {
      time--;
      questiontimer.innerHTML = time;
      randomQuestionsOfType1[currentIndex1].time = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      questionStatus[currentQuestion - 1].timerStatus = true;
      clearInterval(timer1);
      questiontimer.innerHTML = "-";
      submitAnswerOfType1(currentIndex1, userAnswersOfType1[currentIndex1].answer);
      $("#answer-container").css({ "pointer-events": "none", "opacity": "0.5" });
      return;
    }
  }, 1000);
}

//Submit answer of type 1
function submitAnswerOfType1(currentIndex1, answer) {
  //console.log("Current Index1:" + currentIndex1)
  questionStatus[currentQuestion - 1].submitStatus = true;
  userAnswersOfType1[currentIndex1].answer = answer;
  //console.log("Type1Q answer: " + userAnswersOfType1[currentIndex1].answer);
  //log user answers
  for (let i = 0; i < userAnswersOfType1.length; i++) {
    //console.log("User answers: " + userAnswersOfType1[i].answer);
  }
}

//Check answers of type 1
function checkAnswersOfType1() {
  for (let i = 0; i < randomQuestionsOfType1.length; i++) {
    if (randomQuestionsOfType1[i].answer == userAnswersOfType1[i].answer) {
      correctAnswersOfType1++;
    }
  }
  //console.log("Correct answers of type 1: " + correctAnswersOfType1);
}

//Function for saving the available time of type 1 
function saveAvailableTimeOfType1() {
  for (let i = 0; i < randomQuestionsOfType1.length; i++) {
    availableTimeOfType1 += randomQuestionsOfType1[i].time;
  }
  //console.log("Available time of type 1: " + availableTimeOfType1);
}

//--------------------------------------------------------------TYPE 2-----------------------------------------------------------------

//Multiple choice questions

const questionsOfType2 = [
  {
    question: "x^2-4x=",
    choices: ["x(x-4)", "x(x-2)", "x(x-2)∙(x+2)", "x(x-4)∙(x+2)"],
    answer: "x(x-4)",
    time: 45
  },
  {
    question: "Οι λύσεις της εξίσωσης (χ+3)(χ-2) = 0 είναι:",
    choices: ["χ=3 ή χ=2", "χ=-3 ή χ=2", "χ=-3 ή χ=-2", "χ=3 ή χ=-2"],
    answer: "χ=-3 ή χ=2",
    time: 45
  },
  {
    question: "Αν την ανισότητα -4 > -8 τη διαιρέσουμε με -8, θα προκύψει η ανισότητα:",
    choices: ["1/2 < 1", "1/2 > 1", "-1/2 > 1", "-1/2 > -1"],
    answer: "1/2 < 1",
    time: 45
  }
];

const userAnswersOfType2 = [
  {
    answer: ""
  },
  {
    answer: ""
  },
  {
    answer: ""
  }
];

//Elements and variables
let randomQuestionsOfType2 = [];
let randomQuestionsOfType2Index = 0;
let correctAnswersOfType2 = 0;
let availableTimeOfType2 = 0;

//function for choosing random questions based on the number of type 2 questions in the questions array
function randomQuestions2() {
  //count the 2s in the questions array
  let questionsOfType2Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 2) {
      questionsOfType2Counter++;
    }
  }

  //push random questions to the randomQuestionsOfType1 array based on the number of 2s
  while (randomQuestionsOfType2.length < questionsOfType2Counter) {
    let randomQuestion2 = questionsOfType2[Math.floor(Math.random() * questionsOfType2.length)];
    if (!randomQuestionsOfType2.includes(randomQuestion2)) {
      randomQuestionsOfType2.push(randomQuestion2);
    }
  }

  //console.log(randomQuestionsOfType2);
  //randomize the order of the choices
  for (let i = 0; i < randomQuestionsOfType2.length; i++) {
    randomQuestionsOfType2[i].choices.sort(() => Math.random() - 0.5);
  }
}

//Function for creating the questions of type 2
function createQuestionOfType2() {
  //Create the question
  let div = document.createElement("div");
  div.setAttribute("id", "question");
  quizContent.appendChild(div);
  document.getElementById("question").innerHTML = randomQuestionsOfType2[randomQuestionsOfType2Index].question;
  let div2 = document.createElement("div");
  div2.setAttribute("id", "choices");
  quizContent.appendChild(div2);

  //Create the choices
  for (let i = 0; i < randomQuestionsOfType2[randomQuestionsOfType2Index].choices.length; i++) {
    let choice = document.createElement("div");
    choice.setAttribute("class", "btn btn-outline-primary btn-lg btn-block");
    choice.setAttribute("id", "choice" + i);
    document.getElementById("choices").appendChild(choice);
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-regular fa-circle");
    document.getElementById("choice" + i).appendChild(icon);
    let choiceText = document.createElement("span");
    choiceText.setAttribute("class", "choice-text"); 
    choiceText.innerHTML = randomQuestionsOfType2[randomQuestionsOfType2Index].choices[i];
    choice.appendChild(choiceText);
  }

  if (randomQuestionsOfType2[randomQuestionsOfType2Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType2[randomQuestionsOfType2Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }
  const currentIndex2 = randomQuestionsOfType2Index;
  countdownTimer2(currentIndex2);

  //Add event listener to the choices
  for (let i = 0; i < randomQuestionsOfType2[randomQuestionsOfType2Index].choices.length; i++) {
    document.getElementById("choice" + i).addEventListener("click", function () {
      let answer = randomQuestionsOfType2[currentIndex2].choices[i];
      $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" })
      //change icon to check circle
      let icon = document.getElementsByClassName("fa-regular")[i];
      icon.setAttribute("class", "fa-regular fa-check-circle");
      //chagen the color of the other choices and remove check circle
      for (let j = 0; j < randomQuestionsOfType2[currentIndex2].choices.length; j++) {
        if (j != i) {
          $("#choice" + j).css({ "color": "#FE8882", "background-color": "white" })
          let icon = document.getElementsByClassName("fa-regular")[j];
          icon.setAttribute("class", "fa-regular fa-circle");
        }
      }
      submitAnswerOfType2(currentIndex2, answer);
    });
  }

  if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType2[currentIndex2].answer.length >= 0)) {
    for (let i = 0; i < randomQuestionsOfType2[currentIndex2].choices.length; i++) {
      if (userAnswersOfType2[currentIndex2].answer == randomQuestionsOfType2[currentIndex2].choices[i]) {
        $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" });
        let icon = document.getElementsByClassName("fa-regular")[i];
        icon.setAttribute("class", "fa-regular fa-check-circle");
      }
    }
  } else if (questionStatus[currentQuestion].timerStatus == true) {
    $("#choices").css({ "pointer-events": "none", "opacity": "0.6" });
    for (let i = 0; i < randomQuestionsOfType2[currentIndex2].choices.length; i++) {
      if (userAnswersOfType2[currentIndex2].answer == randomQuestionsOfType2[currentIndex2].choices[i]) {
        $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" });
        let icon = document.getElementsByClassName("fa-regular")[i];
        icon.setAttribute("class", "fa-regular fa-check-circle");
      }
    }
  }

  randomQuestionsOfType2Index++;
}

//Function for the countdown timer of type 2
function countdownTimer2(currentIndex2) {
  time = randomQuestionsOfType2[currentIndex2].time;
  timer2 = setInterval(function () {
    if (time > 0) {
      time--;
      questiontimer.innerHTML = time;
      randomQuestionsOfType2[currentIndex2].time = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      questionStatus[currentQuestion - 1].timerStatus = true;
      $("#choices").css({ "pointer-events": "none", "opacity": "0.6" });
      clearInterval(timer2);
      questiontimer.innerHTML = "-";
      submitAnswerOfType2(currentIndex2, userAnswersOfType2[currentIndex2].answer);
      return;
    }
  }, 1000);
}

//Submit answer of type 2
function submitAnswerOfType2(currentIndex2, answer) {
  questionStatus[currentQuestion - 1].submitStatus = true;
  userAnswersOfType2[currentIndex2].answer = answer;
  //console.log("Type2Q " + (currentIndex2 + 1) + ": " + userAnswersOfType2[currentIndex2].answer);
}

//Check answer of type 2
function checkAnswersOfType2() {
  for (let i = 0; i < randomQuestionsOfType2.length; i++) {
    if (userAnswersOfType2[i].answer == randomQuestionsOfType2[i].answer) {
      correctAnswersOfType2++;
    }
  }
  //console.log("Correct answers of type 2: " + correctAnswersOfType2);
}

//Function for saving the available time of type 2
function saveAvailableTimeOfType2() {
  for (let i = 0; i < randomQuestionsOfType2.length; i++) {
    availableTimeOfType2 += randomQuestionsOfType2[i].time;
  }
  //console.log("Available time of type 2: " + availableTimeOfType2);
}

//--------------------------------------------------------------TYPE 3-----------------------------------------------------------------

//Multiple choice with multiple answers

const questionsOfType3 = [
  {
    question: "Η εξίσωση 4χ - 2 = 6 είναι ισοδύναμη με την εξίσωση: (2Α)",
    choices: ["2χ - 1 = 5", "4χ + 4 = 12", "3χ - 5 = 4", "8χ - 4 = 12"],
    answer: ["4χ + 4 = 12", "8χ - 4 = 12"],
    time: 60
  },
  {
    question: "Η ευθεία 3y+6x=12 είναι παράλληλη στην ευθεία: (2Α)",
    choices: ["y=2x+6", "y=-2x+13", "y=4x", "y=(18/9)x -10"],
    answer: ["y=2x+6", "y=(18/9)x -10"],
    time: 60
  },
  {
    question: "Αν ισχύει 2 < χ < 4 τότε: (2Α)",
    choices: ["-2 < -χ < -4", "4 < 2χ < 8", "-1 > χ-1 > -3", "-16 > -8χ > -32"],
    answer: ["4 < 2χ < 8", "-16 > -8χ > -32"],
    time: 60
  }
];

const userAnswersOfType3 = [
  {
    answer: []
  },
  {
    answer: []
  },
  {
    answer: []
  }
];

//Elements and variables
let randomQuestionsOfType3 = [];
let randomQuestionsOfType3Index = 0;
let correctAnswersOfType3 = 0;
let clickedChoicesOfType3 = [
  {
    choice: []
  },
  {
    choice: []
  },
  {
    choice: []
  }
];
let availableTimeOfType3 = 0;

//function for choosing random questions based on the number of type 3 questions in the questions array
function randomQuestions3() {
  //count the 3s in the questions array
  let questionsOfType3Counter = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 3) {
      questionsOfType3Counter++;
    }
  }

  //push random questions to the randomQuestionsOfType1 array based on the number of 2s
  while (randomQuestionsOfType3.length < questionsOfType3Counter) {
    let randomQuestion3 = questionsOfType3[Math.floor(Math.random() * questionsOfType3.length)];
    if (!randomQuestionsOfType3.includes(randomQuestion3)) {
      randomQuestionsOfType3.push(randomQuestion3);
    }
  }

  //console.log(randomQuestionsOfType3);
  //randomize the order of the choices
  for (let i = 0; i < randomQuestionsOfType3.length; i++) {
    randomQuestionsOfType3[i].choices.sort(() => Math.random() - 0.5);
  }
}

//Function for creating the questions of type 2
function createQuestionOfType3() {
  const currentIndex3 = randomQuestionsOfType3Index;
  //create the question
  let div = document.createElement("div");
  div.setAttribute("id", "question");
  div.innerHTML = randomQuestionsOfType3[currentIndex3].question;
  quizContent.appendChild(div);

  //create the choices container
  let choices = document.createElement("div");
  choices.setAttribute("id", "choices");
  quizContent.appendChild(choices);
  //create the choices
  for (let i = 0; i < randomQuestionsOfType3[currentIndex3].choices.length; i++) {
    let choice = document.createElement("div");
    choice.setAttribute("class", "choice");
    choice.setAttribute("id", "choice" + i);
    let choiceText = document.createElement("span");
    choiceText.setAttribute("class", "choice-text"); 
    choiceText.innerHTML = randomQuestionsOfType3[randomQuestionsOfType3Index].choices[i];
    choice.appendChild(choiceText);
    choices.appendChild(choice);
  }

  //create the check circle
  for (let i = 0; i < randomQuestionsOfType3[currentIndex3].choices.length; i++) {
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-regular fa-circle");
    icon.setAttribute("id", "icon" + i);
    $("#choice" + i).prepend(icon);
  }

  if (randomQuestionsOfType3[randomQuestionsOfType3Index].time > 0) {
    questiontimer.innerHTML = randomQuestionsOfType3[randomQuestionsOfType3Index].time;
  } else {
    questiontimer.innerHTML = "-";
  }
  countdownTimer3(currentIndex3);
  
  for (let i = 0; i < randomQuestionsOfType3[currentIndex3].choices.length; i++) {
    $("#choice" + i).on("click", function () {
      //push the clicked choices to the clickedChoicesOfType3 array
      if (clickedChoicesOfType3[currentIndex3].choice.includes(randomQuestionsOfType3[currentIndex3].choices[i])) {
        clickedChoicesOfType3[currentIndex3].choice.splice(clickedChoicesOfType3[currentIndex3].choice.indexOf(randomQuestionsOfType3[currentIndex3].choices[i]), 1);
        //console.log(clickedChoicesOfType3[currentIndex3].choice);
        //change icon to check circle and background color
        let icon = document.getElementsByClassName("fa-regular")[i];
        if (icon.getAttribute("class") == "fa-regular fa-circle") {
          icon.setAttribute("class", "fa-regular fa-check-circle");
          $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" })
        } else {
          icon.setAttribute("class", "fa-regular fa-circle");
          $("#choice" + i).css({ "color": "#FE8882", "background-color": "white" })
        }
        submitAnswerOfType3(currentIndex3, clickedChoicesOfType3);
      } else if (clickedChoicesOfType3[currentIndex3].choice.length < randomQuestionsOfType3[currentIndex3].answer.length) {
        clickedChoicesOfType3[currentIndex3].choice.push(randomQuestionsOfType3[currentIndex3].choices[i]);
        //change icon to check circle and background color
        let icon = document.getElementsByClassName("fa-regular")[i];
        if (icon.getAttribute("class") == "fa-regular fa-circle") {
          icon.setAttribute("class", "fa-regular fa-check-circle");
          $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" })
        } else {
          icon.setAttribute("class", "fa-regular fa-circle");
          $("#choice" + i).css({ "color": "#FE8882", "background-color": "white" })
        }
        submitAnswerOfType3(currentIndex3, clickedChoicesOfType3[currentIndex3].choice);
      }

    });
  }


  if ((questionStatus[currentQuestion].timerStatus == false) && (userAnswersOfType3[currentIndex3].answer.length >= 0)) {
    for (let i = 0; i < randomQuestionsOfType3[currentIndex3].choices.length; i++) {
      for (let j = 0; j < userAnswersOfType3[currentIndex3].answer.length; j++) {
        if (randomQuestionsOfType3[currentIndex3].choices[i] == userAnswersOfType3[currentIndex3].answer[j]) {
          let icon = document.getElementsByClassName("fa-regular")[i];
          icon.setAttribute("class", "fa-regular fa-check-circle");
          $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" })
        }
      }
    }
  } else if (questionStatus[currentQuestion].timerStatus == true) {
    $("#choices").css({ "pointer-events": "none", "opacity": "0.6" });
    //change the color of the clicked choices
    for (let i = 0; i < randomQuestionsOfType3[currentIndex3].choices.length; i++) {
      for (let j = 0; j < userAnswersOfType3[currentIndex3].answer.length; j++) {
        if (randomQuestionsOfType3[currentIndex3].choices[i] == userAnswersOfType3[currentIndex3].answer[j]) {
          let icon = document.getElementsByClassName("fa-regular")[i];
          icon.setAttribute("class", "fa-regular fa-check-circle");
          $("#choice" + i).css({ "color": "white", "background-color": "#FE8882" })
        }
      }
    }
  }

  randomQuestionsOfType3Index++;
}

//Function for the countdown timer of type 3
function countdownTimer3(currentIndex3) {
  time = randomQuestionsOfType3[currentIndex3].time;
  timer3 = setInterval(function () {
    if (time > 0) {
      time--;
      questiontimer.innerHTML = time;
      randomQuestionsOfType3[currentIndex3].time = time;
    } else if (time == 0 && questionStatus[currentQuestion - 1].timerStatus == false) {
      questionStatus[currentQuestion - 1].timerStatus = true;
      $("#choices").css({ "pointer-events": "none", "opacity": "0.6" });
      clearInterval(timer3);
      questiontimer.innerHTML = "-";
      submitAnswerOfType3(currentIndex3, userAnswersOfType3[currentIndex3].answer);
      return;
    }
  }, 1000);
}

//Submit answers of type 3
function submitAnswerOfType3(currentIndex3, answers) {
  questionStatus[currentQuestion - 1].submitStatus = true;
  userAnswersOfType3[currentIndex3].answer = answers;
  //console.log("Type3Q " + (currentIndex3 + 1) + ": " + userAnswersOfType3[currentIndex3].answer);
}

//Check answers of type 3
function checkAnswersOfType3() {
  let counter = 0;
  for (let i = 0; i < randomQuestionsOfType3.length; i++) {
    for (let j = 0; j < randomQuestionsOfType3[i].answer.length; j++) {
      if (userAnswersOfType3[i].answer.includes(randomQuestionsOfType3[i].answer[j])) {
        counter++;
      }
    }
    if (counter == randomQuestionsOfType3[i].answer.length) {
      correctAnswersOfType3++;
    }
    counter = 0;
    //console.log("Type3Q " + (i + 1) + ": " + userAnswersOfType3[i].answer);
    //console.log("Type3Q " + (i + 1) + " correct answer: " + randomQuestionsOfType3[i].answer);
  }
  //console.log("Correct answers of type 3: " + correctAnswersOfType3);
}

//Function for saving the available time of type 3
function saveAvailableTimeOfType3 () {
  for (let i = 0; i < randomQuestionsOfType3.length; i++) {
    availableTimeOfType3 += randomQuestionsOfType3[i].time;
  }
  //console.log("Available time of type 3: " + availableTimeOfType3);
}


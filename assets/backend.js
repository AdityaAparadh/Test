window.onload = function () {
    var time = 10800, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};


var currentQuestion = 0;
var currentSubject="Mathematics";
var currentOption = "N";


nextQuestion();


timer();




function displayQuestion(){
    document.getElementById('subject').innerHTML= currentSubject;
    document.getElementById('questionNumber').innerHTML= currentQuestionDisplay();    

    document.getElementById('mainQuestionDisplay').src = currentQuestionDirectory(); 
}

function nextQuestion(){
    if(currentQuestion<30){
    resetOption();
    currentQuestion++;
    displayQuestion();
    }
}

function previousQuestion(){
    if(currentQuestion>1){
        resetOption();
        currentQuestion--;
        displayQuestion();
        }
}

function goToQuestion(qno){
    resetOption();
    setCurrentQuestion(qno);
    displayQuestion();

}

function setCurrentQuestion(no){
currentQuestion = no;
}


function currentQuestionDisplay(){
    return "Question Number: " + currentQuestion;
}
function currentQuestionDirectory(){
    return"assets/questions/" + currentSubject + "/" + currentQuestion +".png";
}

function setCurrentOption(op){
    resetOption();

    currentOption = op;
    console.log(currentOption);
    document.getElementById("option"+op).style.background= "#5dfc8d";
}

function resetOption(){
    document.getElementById("optionA").style.background= "#e6e2c3";
    document.getElementById("optionB").style.background= "#e6e2c3";
    document.getElementById("optionC").style.background= "#e6e2c3";
    document.getElementById("optionD").style.background= "#e6e2c3";
    
    currentOption = "N";
}



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time Remaining- " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}


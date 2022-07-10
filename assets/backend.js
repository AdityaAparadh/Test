
window.onload = function () {
        initializer();
    var time = localStorage.getItem('timer'), // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);

};



var currentQuestion = 0;
var currentSubject="Mathematics";
var currentOption = "N";
var currentSubjectCode = "m"

nextQuestion();


timer();




function displayQuestion(){
    document.getElementById('subject').innerHTML= currentSubject;
    document.getElementById('questionNumber').innerHTML= currentQuestionDisplay();    
    document.getElementById('mainQuestionDisplay').src = currentQuestionDirectory(); 

    var ans = localStorage.getItem(currentSubject+currentQuestion);
    document.getElementById("option"+ans).style.background= "#5dfc8d";
}

function nextQuestion(){
    if(currentQuestion<30){
    currentQuestion++;
    resetOption();
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
    
    setCurrentQuestion(qno);
    conditionalResetOption();
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
    document.getElementById("savebutton").disabled = false;
    currentOption = op;
    console.log(currentOption);
    document.getElementById("option"+op).style.background= "#5dfc8d";
}

function resetOption(){
    document.getElementById("optionA").style.background= "#e6e2c3";
    document.getElementById("optionB").style.background= "#e6e2c3";
    document.getElementById("optionC").style.background= "#e6e2c3";
    document.getElementById("optionD").style.background= "#e6e2c3";
    document.getElementById("savebutton").disabled = true;
    currentOption = "N";
    localStorage.setItem(currentSubject+currentQuestion, currentOption);
    document.getElementById("m"+currentQuestion).style.background= "#00ffff" ;
}

function conditionalResetOption(){

    if(localStorage.getItem(currentSubject+currentQuestion) = "N"){
        resetOption();
    } else{
        document.getElementById("optionA").style.background= "#e6e2c3";
        document.getElementById("optionB").style.background= "#e6e2c3";
        document.getElementById("optionC").style.background= "#e6e2c3";
        document.getElementById("optionD").style.background= "#e6e2c3";
        document.getElementById("savebutton").disabled = true;
        localStorage.setItem(currentSubject+currentQuestion, currentOption);
        document.getElementById("m"+currentQuestion).style.background= "#00ffff" ;
    }
}

function saveOption(){
    localStorage.setItem(currentSubject+currentQuestion, currentOption);
    document.getElementById("m"+currentQuestion).style.background= "#8bfa50";
    nextQuestion();
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
        localStorage.setItem('timer', timer);
    }, 1000);
}

function initializer(){
    var a = 1;
    var b = 1;
    var c= 1;

    

    while(a<=30){
        localStorage.setItem("Mathematics"+a, 'N'); 
        a++;
    }

    while(b<=30){
        localStorage.setItem("Physics"+b, 'N');
        b++;
    }
    while(c<=30){
        localStorage.setItem("Chemistry"+c, 'N');
        c++;
    }
}

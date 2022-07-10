var currentQuestion = 0;
var currentSubject="Mathematics";



goToQuestion(2);








function displayQuestion(){
    document.getElementById('subject').innerHTML= currentSubject;
    document.getElementById('questionNumber').innerHTML= currentQuestionDisplay();    

    document.getElementById('mainQuestionDisplay').src = currentQuestionDirectory(); 
}

function nextQuestion(){
    currentQuestion++;
    displayQuestion();

}

function previousQuestion(){
    currentQuestion--;
    displayQuestion();
}

function goToQuestion(qno){

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
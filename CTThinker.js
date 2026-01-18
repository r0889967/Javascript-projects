var selectedExerciseIdx = 0;
var chosenExercises = [];
var chosenExercisesCount = 4;


function loadMainMenu(){
    let mainmenu = getElem("mainmenu");
    let html = "";
    html += "<h1>CTThinker</h1>";
    html += "<p>A great tool to boost computional thinking</p>";
    html += "<p>Made by David Jiawei Wang and Senne Bosmans</p>";
    html += "<br>";
    html += "<br>";
    html += "<br>";
    html += "<button onclick=\"loadLevelSelection()\" class=\"button1\">Start Game</button>";
    html += "<br>";
    html += "<br>";
    html += "<br>";
    html += "<br>";
    html += "<button onclick=\"loadInfo()\" class=\"button1\">About CTThinker</button>";
    mainmenu.innerHTML = html;
}

function getElem(id){
    return document.getElementById(id);
}

function toNextLevel(){
    selectedExerciseIdx++;
    if(selectedExerciseIdx < chosenExercisesCount) {
        loadExerciseContents();
    }else{
        loadFinishedScreen();
    }
}

function loadFinishedScreen(){

}

function checkAnswerA(choices){
    let exercise = chosenExercises[selectedExerciseIdx];
    let markedIdxs = [];
    let showAnswer = getElem("showanswer");
    for(let i = 0; i < exercise.choices.length; i++){
        if(getElem(i).classList.contains("marked")){
            markedIdxs.push(i);
        }
    }
    if(markedIdxs.toString()===exercise.correctAnswers.toString()){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "The answer is correct!";
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "The answer is incorrect!";
    }
    showAnswer.innerHTML += `<button class="button1" onclick="toNextLevel()">Next Level</button>`;

}

function checkAnswerB(input){
    let exercise = chosenExercises[selectedExerciseIdx];
    let showAnswer = getElem("showanswer");
    if(input===exercise.correctAnswer){
        showAnswer.style.color = "green";
        showAnswer.innerHTML = "The answer is correct!";
    }else{
        showAnswer.style.color = "red";
        showAnswer.innerHTML = "The answer is incorrect!";
    }
    showAnswer.innerHTML += `<button class="button1" onclick="toNextLevel()">Next Level</button>`;
}


function pickExercises(moduleIdx){
    selectedExerciseIdx = 0;
    chosenExercises = [];
    for(var i = 0; i < chosenExercisesCount; i++){
        let randomExerciseIdx = Math.floor(Math.random()*(Exercises[moduleIdx].length));
        let exercise = Exercises[moduleIdx][randomExerciseIdx];
        while(chosenExercises.includes(exercise)){
            randomExerciseIdx = Math.floor(Math.random()*(Exercises[moduleIdx].length));
            exercise = Exercises[moduleIdx][randomExerciseIdx];
        }
        chosenExercises.push(exercise)
    }
}

function loadTypeAExercise(choices){
    let html = "";
    html += `<p>Please mark the correct boxes</p>`;
    html += "<br>"
    let buttonIdx = 0;
    for(let choice of choices) {
        html += `<button class="button2" id=${buttonIdx} onclick="getElem(${buttonIdx}).classList.toggle('marked')">${choice}</button>`;
        html += "<br>";
        buttonIdx++;
    }
    html += "<br>";
    html += `<button class="button3" id="checkbutton" 
onclick="checkAnswerA(${choices});getElem('checkbutton').disabled=true">Check</button></p>`;
    return html;
}

function loadTypeBExercise(){
    let html = "";
    html += `<p>Please enter your answer:<input class="input1" id="inputprompt" 
><button class="button3" id="checkbutton" 
onclick="checkAnswerB(getElem('inputprompt').value);getElem('checkbutton').disabled=true">Check</button></p>`;
    return html;
}

function loadExerciseContents(){
    let exercise = chosenExercises[selectedExerciseIdx]
    let level = getElem("level");
    let html = "";
    if(exercise != null){
        getElem("levelselection").innerHTML = "";
        html += `<h1>${exercise.title}</h1>`
        for (let line of exercise.text) {
            html += `<p>${line}</p>`;
        }
        html += "<br>";
        if(exercise.type==='A'){
            html += loadTypeAExercise(exercise.choices);
        }
        else if(exercise.type==='B') {
            html += loadTypeBExercise();
        }
        html += "<br>";
        html += `<p id="showanswer"></p>`;
        html += "<br>";
        html += "<br>";
        html += "<br>";
        html += "<button onclick=\"returnToLevelSelection()\" class=\"button1\">Level Selection</button>";
        level.innerHTML = html;
    }
}

function returnToLevelSelection(){
    getElem("level").innerHTML = "";
    loadLevelSelection();
}


function loadLevelSelection(index){
    getElem("mainmenu").innerHTML = "";
    let levelselection = getElem("levelselection");
    let html = "";
    html += "<h1>Level Selection</h1>"
    html += "<p>Please select a module to play</p>";
    html += "<br>";
    html += "<p>Module 1: Abstraction</p>";
    html += `<button class="button1">Start Abstraction Exercises</button>`;

    html += "<br>";
    html += "<br>";
    html += "<p>Module 2: Decomposition</p>";
    html += `<button class="button1">Start Decomposition Exercises</button>`;

    html += "<br>";
    html += "<br>";
    html += "<p>Module 3: Pattern recognization</p>";
    html += `<button class="button1" onclick="pickExercises(2);loadExerciseContents()">Start Pattern Exercises</button>`;

    html += "<br>";
    html += "<br>";
    html += "<p>Module 4: Algorithmic thinking</p>";
    html += `<button class="button1">Start Algoritms Exercises</button>`;

    html += "<br>";
    html += "<br>";
    html += "<p>Module 5: Integrated exercisesDatabase</p>";
    html += `<button class="button1">Start Integrated Exercises</button>`;

    html += "<br>";
    html += "<br>";
    html += "<button onclick=\"returnToMainMenu()\" class=\"button1\">Main Menu</button>";

    levelselection.innerHTML = html;
}

function loadInfo(){
    getElem("mainmenu").innerHTML = "";
    let info = getElem("info");
    let html = "";
    html += "<h1>About CTThinker</h1>";
    html += "<p>CTThinker is a tool developed to teach students vital computational thinking skills.</p>";
    html += "<p>The tool contains 5 modules with 15 levels in each module.<\p>"
    html += "<br>"
    html += "<p>Module 1 focuses on abstraction<\p>"
    html += "<p>Module 2 focuses on decomposition<\p>"
    html += "<p>Module 3 focuses on patterns<\p>"
    html += "<p>Module 4 focuses on algorithmic thinking<\p>"
    html += "<p>Module 5 combines the previous 4 skills<\p>"
    html += "<br>"
    html += "<p>You can choose a module to start</p>"
    html += "<p>You will then be presented with a few random exercisesDatabase from that module</p>"
    html += "<p>There are different types of exercisesDatabase</p>"
    html += "<br>"
    html += "<p>Type A: Mark one or more answers from the given options</p>";
    html += "<p>Type B: Enter the correct answer inside an input prompt</p>";
    html += "<p>Type C: Drag a few blocks into the right order</p>";
    html += "<br>";
    html += "<p>The tool also provides feedbacks after completing each exercise<\p>"
    html += "<p>to help students understand the solution.</p>"
    html += "<button onclick=\"returnToMainMenu()\" class=\"button1\">Main Menu</button>";
    info.innerHTML = html;
}

function returnToMainMenu() {
    getElem("info").innerHTML = "";
    getElem("levelselection").innerHTML = "";
    getElem("level").innerHTML = "";
    loadMainMenu();
}







var selectedModuleId;
var selectedExerciseId;
var progress = 1;
var chosenExercisesCount = 5;
var chosenExercises = [];

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
    progress++;
    loadLevelContents(selectedModuleId,progress);
}


function checkAnswer(input){
    let exercise = chosenExercises[progress-1];
    if(input===exercise.correctAnswer){
        getElem("correctanswer").innerHTML = "The answer is correct!"+
        `<button class="button3" onclick="toNextLevel()">Next Level</button>`;
    }else{
        getElem("correctanswer").innerHTML = "The answer is incorrect!";
    }
}

function pickExercises(midx){
    let module = Exercises[midx];
    let pickedExercises = [];
    while(pickedExercises.length<chosenExercisesCount){
        let eidx = Math.floor(Math.random()*module.length);
        let exercise = Exercises[midx][eidx];
        if(!pickedExercises.includes(exercise)){
            pickedExercises.push(module[eidx]);
        }else{
            eidx = Math.floor(Math.random()*module.length);
        }
    }
    chosenExercises = pickedExercises;
}

function loadLevelContents(midx,progress){
    let exercise = chosenExercises[progress-1];
    selectedModuleId = midx;
    selectedExerciseId = progress-1;
    let level = getElem("level");
    let html = "";
    if(exercise != null){
        getElem("levelselection").innerHTML = "";
        html += `<h1>${exercise.title}</h1>`
        for (let line of exercise.text) {
            html += `<p>${line}</p>`;
        }
        html += "<br>";
        if(exercise.type==='B') {
            html += `<p>Please enter your answer:<input class="input1" id="inputprompt" 
><button class="button3" onclick="checkAnswer(getElem('inputprompt').value)">Check</button></p>`;
        }
        html += "<br>";
        html += `<p id="correctanswer"></p>`;
        html += "<br>";
        html += "<br>";
        html += `<p>${progress}/${chosenExercisesCount}</p>`;
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
    html += `<button class="button1" onclick="
pickExercises(2);
loadLevelContents(2,progress)">Start Pattern Exercises</button>`;

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

window.loadMainMenu = loadMainMenu;
window.loadInfo = loadInfo;
window.loadLevelContents = loadLevelContents;
window.loadLevelSelection = loadLevelSelection;
window.returnToMainMenu = returnToMainMenu;
window.returnToLevelSelection = returnToLevelSelection;
window.checkAnswer = checkAnswer;
window.toNextLevel = toNextLevel;
window.getElem = getElem;
window.Exercises= Exercises;



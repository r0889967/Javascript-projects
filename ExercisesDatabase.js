const Exercises = [];

const abstractionExercises = [];
const decompositionExercises = [];
const patternExercises = [];
const algorithmExercises = [];
const IntegratedExercises = [];

Exercises.push(abstractionExercises);
Exercises.push(decompositionExercises);
Exercises.push(patternExercises);
Exercises.push(algorithmExercises);
Exercises.push(IntegratedExercises);



let exercise3_1 = {
    title: "Next number in sequence",
    text : ["Given the following sequence of numbers.",
        "2,5,10,17,28,41,58,77,100,129,?",
        "What is the next number in the sequence? Please enter the answer below.",
        "Hint: it has something to do with prime numbers.",],
    type:"B",
    correctAnswer : "160",
}

let exercise3_2 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "What is the next string in the sequence? Please enter the answer below.",],
    type:"B",
    correctAnswer : "eeeeecccabbddddffffff",
}

let exercise3_3 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "5738, 121011, 33112, 6423, 1065, ?",
        "What is the next number in the sequence? Please enter the answer below.",],
    type:"B",
    correctAnswer : "1611",
}

let exercise3_4 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "27, 9279, 27927927, ?",
        "What is the next number in the sequence? Please enter the answer below."],
    type:"B",
    correctAnswer : "812792792781",
}
let exercise3_5 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
    "a, ab, adad, ahahahah",
    "What is the next string in the sequence? Please enter the answer below.",],
    type:"B",
    correctAnswer : "apapapapapapapap",

}

let exercise3_6 = {
    title: "Find non-pattern sequences",
    text:["Observe the following sequences carefully.",
    "Which sequence(s) have no patterns?"],
    type:"A",
    choices: ["1,2,0,3,-1,4,-2,5,-3","1,2,6,24,48,144,576,1152,3456","1,6,7,9,16,17,19,27,29,31",
        "1,3,6,10,15,21,28,36,45","1,121,1331,14441,155551,1666661","1,15,10,115,110,155,150,515,510","1,4,14,414,14414,41414414"],
    correctAnswers : [2,5],
}

let exercise3_7 = {
    title: "Find pattern sequences",
    text:["Observe the sequences below carefully."," " +
    "which sequence(s) have a pattern inside them?"],
    type:"A",
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
    "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

patternExercises.push(exercise3_1);
patternExercises.push(exercise3_2);
patternExercises.push(exercise3_3);
patternExercises.push(exercise3_4);
patternExercises.push(exercise3_5);
patternExercises.push(exercise3_6);
patternExercises.push(exercise3_7);
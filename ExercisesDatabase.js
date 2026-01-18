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

let exercise1_1 = {
    title: "Sarah and the Grim Reaper",
    text:["The Grim Reaper has arrived to take Sarah's life, but Sarah didn't want to die yet, so she begged the Grim Reaper",
    "to let her live longer by lighting up a candle and saying 'Let me live until you see candle burns up one day.'",
    "The grim reaper agreed and left the scene. Sarah them immediately extinguished the candle by blowing at it.",
    "Surprisely, even after many years, the Grim Reaper never came again to take Sarah's life.",
    "How did Sarah escape her death? Please mark the correct box."],
    type : "A",
    choices : ["The Grim Reaper wanted to stay away from candles.","The Grim Reaper decided that Sarah can live forever.","The Grim Reaper was afraid to return to Sarah once more.",
    "The Grim Reaper never saw the candle burning up.","The Grim Reaper forgot about Sarah.","The Grim Reaper was killed by something or someone."],
    correctAnswers : [3],
}

let exercise1_2 = {
    title:"",
    text:[],
    type : "B",
    correctAnswer : "",
}

let exercise1_3 = {
    title:"",
    text:[],
    type : "A",
    choices : [],
    correctAnswers : [],

}

let exercise1_4 = {
    title:"Who is the culprit?",
    text:["Sarah put a beautiful vase on a table touching the front door of her home. She then invited her friends Alice, Bob, Carole,",
    "Dilan and Eva to come and play with her inside her bedroom. The 5 friends all came rushing into her home through the",
    "front door. When night came, her friends left once again. But when Sarah woke up and went downstairs the next morning, she",
    "found her vase broken on the ground. Sarah suspect that her friends might have broken her vase yesterday by accident.",
    "Which of Sarah's friends might be the culprits?"],
    type : "A",
    choices : ["Alice","Bob","Carole","Dilan","Eva"],
    correctAnswers : [0,1,2,3,4],
}

let exercise3_1 = {
    title: "Next number in sequence",
    text : ["Given the following sequence of numbers.",
        "2,5,10,17,28,41,58,77,100,129,?",
        "What is the next number in the sequence?",
        "Hint: it has something to do with prime numbers.",],
    type:"B",
    correctAnswer : "160",
}

let exercise3_2 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
        "a, abb, cccabb, cccabbdddd, eeeeecccabbdddd, ?",
        "What is the next string in the sequence?",],
    type:"B",
    correctAnswer : "eeeeecccabbddddffffff",
}

let exercise3_3 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "5738, 121011, 33112, 6423, 1065, ?",
        "What is the next number in the sequence?",],
    type:"B",
    correctAnswer : "1611",
}

let exercise3_4 = {
    title: "Next number in sequence",
    text:["Given the following sequence of numbers.",
        "27, 9279, 27927927, ?",
        "What is the next number in the sequence?"],
    type:"B",
    correctAnswer : "812792792781",
}
let exercise3_5 = {
    title: "Next string in sequence",
    text:["Given the following sequence of strings.",
    "a, ab, adad, ahahahah",
    "What is the next string in the sequence?",],
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
    text:["Observe the sequences below carefully.",
    "Which sequence(s) have a pattern inside them?"],
    type:"A",
    choices: ["1,123,12345,1234567,123456789","1,10,101,1001,10010,100101,1001011","1,2,4,8,17,33,64,128,256,513","1,10,5,2,11,6,3,12,7,4",
    "1,12,412,4128,164128,16412832","1,8,56,2,7,5,3,9,12,200","1,20,300,4000,50001,600000,7000000"],
    correctAnswers : [0,3,4],
}

let exercise3_8 = {
    title: "Find non-pattern sequences",
    text:["Observe the sequences below carefully.",
    "Which sequence(s) have no patterns?"],
    type:"A",
    choices:["a,ab,abe,abec,abeci,abecid,abecido","abab,cbcb,cdcd,eded,efef,gfgf","a,bbbb,cc,ddddddd,eeee,fffff,gggggg","a,bab,cbabc,dcbabcd,dcbabcdee",
    "aaa,aab,abb,bbb,bbc,bcc,ccc,ccd","a,b,c,d,e,f,g,h,j,i,k,l,n,m","a,aa,aaa,aaaa,aaaaa,aaaaaa","a,ab,abc,d,de,def,g,gh,ghi"],
    correctAnswers : [2,3,5],
}

abstractionExercises.push(exercise1_1);
abstractionExercises.push(exercise1_2);
abstractionExercises.push(exercise1_3);
abstractionExercises.push(exercise1_4);

patternExercises.push(exercise3_1);
patternExercises.push(exercise3_2);
patternExercises.push(exercise3_3);
patternExercises.push(exercise3_4);
patternExercises.push(exercise3_5);
patternExercises.push(exercise3_6);
patternExercises.push(exercise3_7);
patternExercises.push(exercise3_8);
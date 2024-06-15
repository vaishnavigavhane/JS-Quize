const quizeData = [
    {
        question: "1. HTML stand for?",
        options: [
            "HighText Machine Language",
            "HyperText and links Markup Language",
            "HyperText Markup Language",
            "None of these"
        ],
        correct:2,
},
{
    question: "2. The correct sequence of HTML tags for starting a webpage is -",
    options: [
        "Head, Title, HTML, body",
        "HTML, Body, Title, Head",
        "HTML, Head, Title, Body",
        "HTML, Head, Title, Body"
    ],
    correct:3,
},
{
    question: "3.  Which of the following HTML attribute is used to define inline styles?",
    options: [
        "style",
        "type",
        "class",
        "None of the above"
    ],
    correct:0,
},
{
    question: "4. CSS stands for-",
    options: [
        "Cascade style sheets",
        "Color and style sheets",
        "Cascading style sheets",
        "None of the above"
    ],
    correct:2,
},
{
    question: "5. The CSS property used to control the element's font-size is -",
    options: [
        "text-style",
        "text-size",
        "font-size",
        "None of the above"
    ],
    correct:2,
},
{
    question: "6. What type of language is PHP?",
    options: [
        "Server-side scripting",
        "Client-side scripting",
        "User-side scripting",
        "None"
    ],
    correct:0,
},
{
    question: "7. Is PHP variable case sensitive?",
    options: [
        "True",
        "False",
        "Depends on Variable",
        "None"
    ],
    correct:0,
},
{
    question: "8. Total types of the array in PHP is?",
    options: [
        "2",
        "3",
        "4",
        "5"
    ],
    correct:1,
},
{
    question: "9. Which type of JavaScript language is-",
    options: [
        "Object-Oriented",
        "Object-Based",
        "Assembly-language",
        "High-level"
    ],
    correct:1,
},
{
    question: "10. In the JavaScript, which one of the following is not considered as an error:",
    options: [
        "Syntax error",
        "Missing of semicolons",
        "Division by zero",
        "Missing of Bracket"
    ],
    correct:2,
},
];


// Javascript Initialization

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4 ] = document.querySelectorAll(".question, #option_1, #option_2, #option_3, #option_4");

const submitBtn = document.querySelector("#submit");

let currentQuize = 0;
let score = 0;

// Load Quize Function 

const loadQuize = () => {
    const { question, options} = quizeData[currentQuize];
    console.log(question);

    questionElm.innerText = question;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));

};

loadQuize();


// Selected answer on button click
const getSelectedOption = () => {
let answerElement = Array.from(answerElm);
return answerElement.findIndex((curElm) => curElm.checked);
};


const deselectedAnswers = () => {
    answerElm.forEach((curElm) => curElm.checked = false);
};

submitBtn.addEventListener('click', () => {
    const SelectedOptionIndex = getSelectedOption();
    console.log(SelectedOptionIndex);

    if (SelectedOptionIndex == quizeData[currentQuize].correct){
        score = score+1;
    }

        currentQuize++;

        if (currentQuize < quizeData.length){
            deselectedAnswers();   
            loadQuize();   
        }
        else{
            quize.innerHTML = `
            <div class = "result">
            <h3>🏆 Your Score : ${score}/${quizeData.length} </h3>
            <h6>Congratulations on completing the quize!🏆🎉</h6>
            <button class = "reload-button" onclick = "location.reload()">Play Again </button>
            </div>`;
            
        }

});
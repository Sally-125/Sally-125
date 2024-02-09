
/* creates an array of objects .Each object has a quiz with multiple choice questions with properties"a","b","c","d"
the corredt answer is designated by the correct property*/
let quizData = [
    {
        question: "What is the capital city of Kenya?",
        a: "Nairobi",
        b: "Mombasa",
        c: "Kisumu",
        d: "Nakuru",
        correct: "a"


    },
    {
        question: "What is the largest animal in the world?",
        a: "Elephant",
        b: "Whale",
        c: "Giraffe",
        d: "Dinosaur",
        correct: "b"
    }
];
/*innitialize some variables to access elements in the html document
you refer with specific ids
variable “currentQuiz” is set to 0 to keep track of the current quiz question.
variable “score” is initialized to 0 to keep track of the number of correct answers.*/
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

/*This function delects any previously selected answer options in a quiz.
It does so by looping through all elements with class “answer” using the “querySelectorAll” method, and sets the “checked” property of each element to “false”.
This function is used to clear the previous selection before displaying a new quiz question.*/
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

/*This function returns the selected answer in a quiz,by looping through all elements with class “answer” using the “querySelectorAll” method and
checking the “checked” property of each element.When an element is found with the “checked” property set to “true”, its “id” property is assigned 
to the “answer” variable.The “answer” variable is then returned as the selected answer.*/
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

/*This function named displays the current quiz question and answer options. It first calls the “deselectAnswers” function to clear any previous selection
then accesses the current quiz data from the “quizData” array using the “currentQuiz” variable as the index.*/
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

//The function is immediately invoked after it is defined to load the first quiz question of this JavaScript Quiz App.
loadQuiz();

/*When the submit button is clicked, the function it triggers does the following:
It calls the “getSelected” function to retrieve the selected answer.
If a selection has been made (i.e., “answer” is truthy), it checks if the selected answer is correct by comparing it to the correct answer stored in the 
“quizData” array.If the answer is correct, it increments the “score” variable.The “currentQuiz” variable is incremented to move on to the next question.
If there are still quiz questions remaining, the “loadQuiz” function is called to display the next question.
If all questions have been answered, the text content of the “quiz” element is replaced with a message displaying the number of correct answers 
and a “Play Again” button.*/
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
                <h2>You Got ${score}/${quizData.length}</h2>
                <button onclick="history.go(0)">Play Again</button>
            `
        }
    }
});



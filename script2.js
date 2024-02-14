//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 21;
let countdown;
//Questions and Options array
const quizArray = [
    {
        id: "0",
        question: "What does typography refer to in web design?",
        options: ["The size and color of text", "The arrangement and appearance of text characters", "The type of images used on a webpage", "The overall layout of a webpage"],
        correct: "The arrangement and appearance of text characters",
    },
    {
        id: "1",
        question: "What does the &lt;strike&gt; tag do to text?",
        options: ["Displays it with a red underline", "Strikes a line through the text", "Italicizes the text", "Strikes a line through the text"],
        correct: "Strikes a line through the text",
    },
    {
        id: "2",
        question: "Which tag displays text in a monospaced font?",
        options: ["&lt;pre&gt;", "&lt;code&gt;", "&lt;tt&gt;", "&lt;font&gt;"],
        correct: "<tt>",
    },
    {
        id: "3",
        question: "How can you make a specific piece of text stand out visually on a webpage?",
        options: ["Increase the font size significantly.", "Use a different font color than the surrounding text.", "Apply bold or italic styling.", "All of the above"],
        correct: "All of the above",
    },
    {
        id: "4",
        question: "What are the main benefits of using different font styles and effects in web design?",
        options: ["To make the webpage look more stylish", "To improve the readability and clarity of content", "To emphasize important information", "All of the above "],
        correct: "All of the above",
    },
    {
        id: "5",
        question: "Which HTML tag makes text bold?",
        options: ["&lt;b&gt;", "&lt;i&gt;", "&lt;u&gt;", "&lt;bold&gt;"],
        correct: "<b>",
    }, {
        id: "6",
        question: "Which font style would be most appropriate for the body text of a webpage?",
        options: ["Large, decorative script", "Small, italicized text", "A clear, readable sans-serif font", "Bold, all-caps text"],
        correct: "A clear, readable sans-serif font",
    },
    {
        id: "7",
        question: "Appearance and arrangement of the characters that make up your text.",
        options: ["Typography", "Typeface", "Type Style", "Font"],
        correct: "Typography",
    },
    {
        id: "8",
        question: "The actual appearance, examples are Times New Roman, Arial, etc.",
        options: ["Typography", "Typeface", "Type Style", "Font"],
        correct: "Typeface",
    },
    {
        id: "9",
        question: "This is the variations given to the text such as boldface, italic, regular, etc.",
        options: ["Typography", "Typeface", "Type Style", "Font"],
        correct: "Type Style",
    },
    {
        id: "10",
        question: "Combination of typeface and type style.",
        options: ["Typography", "Typeface", "Type Style", "Font"],
        correct: "Font",
    },
    {
        id: "11",
        question: "This tag represents the heading.",
        options: ["&lt;title&gt;", "&lt;body&gt;", "&lt;h1&gt;", "&lt;p&gt;"],
        correct: "<h1>",
    },
    {
        id: "12",
        question: "This tag represents a paragraph.",
        options: ["&lt;title&gt;", "&lt;body&gt;", "&lt;h1&gt;", "&lt;p&gt;"],
        correct: "<p>",
    },
    {
        id: "13",
        question: "What does HTML stand for?",
        options: ["HyperText Makeup Language", "HyperText Markup Language", "HyperTransfer Markup Language", "High-Level Text Language"],
        correct: "HyperText Markup Language",
    },
    {
        id: "14",
        question: "What is the purpose of HTML formatting?",
        options: ["To store data", "To create databases", "To structure and present content on the web", "To design graphics"],
        correct: "To structure and present content on the web",
    },
    {
        id: "15",
        question: "How do you create a line break in HTML?",
        options: ["&lt;lb&gt;", "&lt;break&gt;", "&lt;newline&gt;", "&lt;br&gt;"],
        correct: "<br>",
    },
    {
        id: "16",
        question: "What HTML tag is used for creating a hyperlink?",
        options: ["&lt;link&gt;", "&lt;url&gt;", "&lt;a&gt;", "&lt;hyper&gt;"],
        correct: "<a>",
    },
    {
        id: "17",
        question: "How can you make text bold in HTML?",
        options: ["&lt;bold&gt;", "&lt;strong&gt;", "&lt;b&gt;", "&lt;em&gt;"],
        correct: "<strong>",
    },
    {
        id: "18",
        question: "What is the purpose of the HTML &lt;em&gt; tag?",
        options: ["Embedding multimedia", "Emphasizing text", "Enlarging text", "Encoding images"],
        correct: "Emphasizing text",
    },
    {
        id: "19",
        question: "How do you create an unordered list in HTML?",
        options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        correct: "<ul>",
    },
];
//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 21;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 21;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
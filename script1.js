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
        question: "Tag for paragraph content.",
        options: ["&lt;p&gt; &lt;/p&gt;", "&lt;h1&gt; &lt;/h1&gt;", "&lt;div&gt; &lt;/div&gt;", "German"],
        correct: "<p> </p>",
    },
    {
        id: "1",
        question: "Tag for heading content.",
        options: ["&lt;p&gt; &lt;/p&gt;", "&lt;h1&gt; &lt;/h1&gt;", "&lt;div&gt; &lt;/div&gt;", "Europe"],
        correct: "<h1> </h1>",
    },
    {
        id: "2",
        question: "Tag for division content.",
        options: ["&lt;p&gt; &lt;/p&gt;", "&lt;h1&gt; &lt;/h1&gt;", "&lt;div&gt; &lt;/div&gt;", "Charles Luce"],
        correct: "<div> </div>",
    },
    {
        id: "3",
        question: "Aside from white spaces, there are other things your Web browser ignores, these are _________.",
        options: ["Elements", "List", "Comments", "A web server"],
        correct: "Comments",
    },
    {
        id: "4",
        question: "Indicates the type of numbering to be used in the list.",
        options: ["Start", "Type", "Head", "Execute"],
        correct: "Type",
    },
    {
        id: "5",
        question: "Indicates the value or number of the first item in the list.",
        options: ["Start", "Type", "Head", "File server"],
        correct: "Start",
    }, {
        id: "6",
        question: "The first type of list is the _______.",
        options: ["List", "Ordered list", "Unordered list", "Shopping on-line"],
        correct: "Ordered list",
    },
    {
        id: "7",
        question: "Ordered list or more known as the ______.",
        options: ["Unordered list", "List", "Numbered list", "Chat service on the web"],
        correct: "Numbered list",
    },
    {
        id: "8",
        question: "This type of list that enumerates each item is not numbered but rather bulleted and uses the container tag &lt;ul&gt; &lt;/ul&gt;.",
        options: ["Numbered list", "Ordered list", "Unordered list", "IP"],
        correct: "Unordered list",
    },
    {
        id: "9",
        question: "The ordered list uses the container tag.",
        options: ["&lt;ul&gt; &lt;/ul&gt;", "&lt;ol&gt; &lt;/ol&gt;", "&lt;o&gt; &lt;/o&gt;", "www.yahoo.co.in"],
        correct: "<ol> </ol>",
    },
    {
        id: "10",
        question: "The unordered list uses the container tag.",
        options: ["&lt;ul&gt; &lt;/ul&gt;", "&lt;ol&gt; &lt;/ol&gt;", "&lt;o&gt; &lt;/o&gt;", "www.yahoo.co.in"],
        correct: "<ul> </ul>",
    },
    {
        id: "11",
        question: "Which of the following is one of the four core attributes that can be used on the majority of HTML elements?",
        options: ["Bgcolor", "Class", "Width", "www.yahoo.co.in"],
        correct: "Class",
    },
    {
        id: "12",
        question: "What is the primary definition of the class attribute in HTML?",
        options: ["An element's special identification number inside a document.", "The class attribute is used to associate an element with a style sheet, and specifies the class of element.", "The kind of information or material kept in an element.", "www.yahoo.co.in"],
        correct: "The class attribute is used to associate an element with a style sheet, and specifies the class of element.",
    },
    {
        id: "13",
        question: "What is the purpose of the dir attribute in HTML?",
        options: ["To specify the direction of text within an element.", "To define the class of an element for styling purposes.", "To indicate the position of an element on the page.", "www.yahoo.co.in"],
        correct: "To specify the direction of text within an element.",
    },
    {
        id: "14",
        question: "What purpose does HTML's lang property serve?",
        options: ["To ascertain how an element is arranged and positioned.", "To designate the language used in an element's content.", "Specifying an element's distinct identifier inside a document.", "www.yahoo.co.in"],
        correct: "To designate the language used in an element's content.",
    },
    {
        id: "15",
        question: "Which of this is NOT an option when using the align attribute?",
        options: ["Right", "Center", "Top", "www.yahoo.co.in"],
        correct: "Top",
    },
    {
        id: "16",
        question: "What is the purpose of the background attribute in HTML?",
        options: ["To place a background image behind an element.", "To define the class of an element for styling purposes.", "To indicate the position of an element on the page.", "www.yahoo.co.in"],
        correct: "To place a background image behind an element.",
    },
    {
        id: "17",
        question: "What use does HTML's title property serve?",
        options: ["It clarifies the language used in an element's content.", "It provides an element's unique identifier inside a document.", "It gives a suggested title for the element.", "www.yahoo.co.in"],
        correct: "It gives a suggested title for the element.",
    },
    {
        id: "18",
        question: "What is the function of the id attribute?",
        options: ["To name an element for use with Cascading Style Sheets.", "To specify the width of the tables, images, or table cells.", "To specify the height of the tables, images, or table cells.", "www.yahoo.co.in"],
        correct: "To name an element for use with Cascading Style Sheets.",
    },
    {
        id: "19",
        question: "What is the function of the width attribute?",
        options: ["To name an element for use with Cascading Style Sheets.", "To specify the width of the tables, images, or table cells.", "To specify the height of the tables, images, or table cells.", "www.yahoo.co.in"],
        correct: "To specify the width of the tables, images, or table cells.",
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
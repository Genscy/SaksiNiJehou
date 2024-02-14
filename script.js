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
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Level Textual Modulation", "HyperTransfer Markup Language", "High-Tech Multimedia Language"],
        correct: "HyperText Markup Language",
    },
    {
        id: "1",
        question: "Which HTML tag is used for creating a hyperlink?",
        options: ["&lt;link&gt;", "&lt;href&gt;", "&lt;a&gt;", "&lt;hyper&gt;"],
        correct: "<a>",
    },
    {
        id: "2",
        question: "What is the purpose of the HTML &lt;head&gt; element?",
        options: ["It defines the main content of the document.", "It contains metadata about the HTML document.", "It specifies the layout of the webpage. ", "It defines the header of the page."],
        correct: "It contains metadata about the HTML document.",
    },
    {
        id: "3",
        question: "How do you create an ordered list in HTML?",
        options: ["&lt;ol&gt; ", "&lt;ul&gt; ", "&lt;li&gt; ", "&lt;orderlist&gt;"],
        correct: "<ol>",
    },
    {
        id: "4",
        question: "Which HTML tag is used for adding an image to a webpage?",
        options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;picture&gt;", "&lt;graphic&gt;"],
        correct: "<img>",
    },
    {
        id: "5",
        question: "What is the purpose of the HTML &lt;footer&gt; element?",
        options: ["It defines the main content of the document", "It specifies a footer for a section or page", "It contains the navigation links of the webpage", "It defines the footer of the page"],
        correct: "It defines the footer of the page",
    }, 
    {
        id: "6",
        question: "Which attribute is used to define the alternative text for an image in HTML?",
        options: ["Alt", "Text", "Description", "Imagealt"],
        correct: "Alt",
    },
    {
        id: "7",
        question: "This tag defines the document type and html version",
        options: ["&lt;DOCTYPE&gt;", "&lt;HTML&gt;", "&lt;HEAD&gt;", "&lt;TITLE&gt;"],
        correct: "<DOCTYPE>",
    },
    {
        id: "8",
        question: "This tags represent the documents header which can keep other HTML Tags like &lt;title&gt;, &lt;link&gt; etc",
        options: ["&lt;HEAD&gt;", "&lt;TITLE&gt;", "&lt;BODY&gt;", "&lt;H1&gt;"],
        correct: "<HEAD>",
    },
    {
        id: "9",
        question: "What is the tag used inside  the &lt;head&gt; tag to mention the document title.",
        options: ["&lt;TITLE&gt;", "&lt;BOY&gt;", "&lt;H1&gt;", "&lt;P&gt;"],
        correct: "<TITLE>",
    },
    {
        id: "10",
        question: "This tag represents the document’s body which keeps other HTML tags like &lt;h1&gt;, &lt;div&gt; &lt;p&gt; etc.",
        options: ["&lt;BODY&gt;", "&lt;H1&gt;", "&lt;P&gt;", "&lt;HTML&gt;"],
        correct: "<BODY>",
    },
    {
        id: "11",
        question: "What tag represents the heading.",
        options: ["&lt;H1&gt;", "&lt;P&gt;", "&lt;DOCTYPE&gt;", "&lt;HEAD&gt;"],
        correct: "<H1>",
    },
    {
        id: "12",
        question: "These tags represent a paragraph.",
        options: ["&lt;P&gt;", "&lt;TITLE&gt;", "&lt;BODY&gt;", "&lt;H1&gt;"],
        correct: "<P>",
    },
    {
        id: "13",
        question: "You can use different sizes for your headings. HTML also has six levels of headings,  which use the elements &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;. While displaying any heading, the browser adds one line  before and one line after that heading.",
        options: ["Heading Tags", "Body Tags", "Line Break Tag", "Horizontal lines"],
        correct: "Heading Tags",
    },
    {
        id: "14",
        question: "Attributes provide additional information about the tag.",
        options: ["True", "False", "Space", "Color"],
        correct: "True",
    },
    {
        id: "15",
        question: "Tags are enclosed with angle brackets (‘&lt;’ and ‘&gt;’).",
        options: ["True", "False", "Sub", "Sup"],
        correct: "True",
    },
    {
        id: "16",
        question: "There are only few tags and each has its own use.",
        options: ["True", "False", "Strike", "Break line"],
        correct: "False",
    },
    {
        id: "17",
        question: "Tags are the basic units of an HTML file.",
        options: ["True", "False", "Italic", "Underline"],
        correct: "True",
    },
    {
        id: "18",
        question: "Start tag is used to signify the end of the tags and ultimately.",
        options: ["True", "False", "Small", "Big"],
        correct: "False",
    },
    {
        id: "19",
        question: "The br tag has a no space between the characters br and the forward slash.",
        options: ["True", "False", "Type", "Head"],
        correct: "False",
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
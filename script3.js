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
        question: "This &lt;em&gt; &lt;/em&gt; element is displayed as?",
        options: ["Marked Text", "Strong Text", "Emphasized Text", "Acronym Element"],
        correct: "Emphasized Text",
    },
    {
        id: "1",
        question: "This element, is displayed as marked with yellow ink.",
        options: ["&lt;strong&gt; &lt;/strong&gt;", "&lt;mark&gt; &lt;/mark&gt;", "&lt;/abbr&gt;", "&lt;bdo&gt; &lt/bdo&gt;"],
        correct: "<mark> </mark>",
    },
    {
        id: "2",
        question: "This &lt;strong&gt; &lt;/strong&gt; element is displayed as important text",
        options: ["Strong Text", "Text Abbreviation", "Emphasized Text", "Marked Text"],
        correct: "Strong Text",
    },
    {
        id: "3",
        question: "You can abbreviate a text by putting it inside opening and closing tags.",
        options: ["&lt;acronym&gt; &lt;/acronym&gt;", "&lt;mark&gt; &lt;/mark&gt;", "&lt;bdo&gt; &lt;/bdo&gt;", "&lt;abbr&gt; &lt;/abbr&gt;"],
        correct: "<abbr> </abbr>",
    },
    {
        id: "4",
        question: "At present, the major browsers do not change the appearance of the content of the element.",
        options: ["Acronym Element", "Text Direction", "Text Abbreviation", "Marked Text"],
        correct: "Acronym Element",
    },
    {
        id: "5",
        question: "This element stands for Bi-Directional Override and it is used to override the current text direction.",
        options: ["&lt;mark&gt; &lt;/mark&gt;", "&lt;acronym&gt; &lt;/acronym&gt;", "&lt;bdo&gt; &lt;/bdo&gt;", "&lt;mark&gt; &lt/mark&gt;"],
        correct: "<bdo> </bdo>",
    }, {
        id: "6",
        question: "Typically, you would use the &lt;dfn&gt; element the first time you introduce a key term. Most recent browsers render the content of a &lt;dfn&gt; element in an italic font.",
        options: ["Quoting Text", "Special Terms", "Short Quotations", "Text Citations"],
        correct: "Special Terms",
    },
    {
        id: "7",
        question: "When you want to quote a passage from another source, you should put in a tags?",
        options: ["&lt;acronym&gt; &lt;/acronym&gt; ", "&lt;dfn&gt; &lt;/dfn&gt;", "&lt;code&gt; &lt;/code&gt;", "&lt;blockquote&gt; &lt;/blockquote&gt;"],
        correct: "<blockquote> </blockquote>",
    },
    {
        id: "8",
        question: "The &lt;q> &lt;/q> element is used when you want to add a double quote within a sentence.",
        options: ["Short Quotations", "Quoting Text", "Short Quotations", "Special Terms"],
        correct: "Short Quotations",
    },
    {
        id: "9",
        question: "If you are quoting a text, you can indicate the source placing it between an opening tag and closing tag.",
        options: ["&lt;q&gt; &lt;/q&gt;", "&lt;cite&gt; &lt;/cite&gt;", "&lt;code&gt; &lt;/code&gt;", "&lt;dfn&gt; &lt;/dfn&gt;"],
        correct: "<cite> </cite>",
    },
    {
        id: "10",
        question: "Indicates the horizontal alignment of the table?",
        options: ["Background", "Align", "Alignment", "Cellpadding"],
        correct: "Align",
    },
    {
        id: "11",
        question: "Almost all websites are laid out using?",
        options: ["Address text", "Tables", "Table row", "Background"],
        correct: "Tables",
    },
    {
        id: "12",
        question: "This element is usually used in conjunction with the &lt;pre&gt; and &lt;code&gt; elements to indicate that the content of the element is a variable.",
        options: ["Variable", "Code Text", "Program Output", "Programming variable"],
        correct: "Programming variable",
    },
    {
        id: "13",
        question: "This indicate the color of the border?",
        options: ["Bgcolor", "Bordercolor", "Color", "Background"],
        correct: "Bordercolor",
    },
    {
        id: "14",
        question: "Indicates the _____ of the image of the table?",
        options: ["Color", "Border", "Background", "Bgcolor"],
        correct: "Background",
    },
    {
        id: "15",
        question: "The &lt;address&gt; &lt;/address&gt; element is used to contain any address.",
        options: ["Keyboard Text", "Program Output", "Address Text", "Program Output"],
        correct: "Address Text",
    },
    {
        id: "16",
        question: "Indicates the background color of the table.",
        options: ["Bgcolor", "Bordercolor", "Background", "Border"],
        correct: "Bgcolor",
    },
    {
        id: "17",
        question: "Indicates the distance between the contents of the cells and border around it in pixel.",
        options: ["Cellspacing", "Border", "Cellspacing", "Cellpadding"],
        correct: "Cellpadding",
    },
    {
        id: "18",
        question: "You can use &lt;meta&gt; tag to give a short description about the document. This again can be used by various search engines while indexing your webpage for searching purpose.",
        options: ["Document Revision Date", "Document Description", "Document Refreshing", "Page Redirection"],
        correct: "Document Description",
    },
    {
        id: "19",
        question: "Stored in small text files on your computer and it is exchanged between web browser and web server to keep track of various information based on your web application need.",
        options: ["Setting Cookies", "Document Refreshing", "Page Redirection", "Document Description"],
        correct: "Setting Cookies",
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
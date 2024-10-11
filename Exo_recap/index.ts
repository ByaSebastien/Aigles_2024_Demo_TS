enum Difficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard'
}

interface Question {
    question: string;
    answers: string[];
    correctAnswer: number;
    difficulty: Difficulty;
}

const questions: Question[] = [
    {
        question: "What is the result of 2 + 2 in JavaScript?",
        answers: ["3", "4", "22", "NaN"],
        correctAnswer: 1,
        difficulty: Difficulty.Easy
    },
    {
        question: "What is the output of 'typeof null' in JS?",
        answers: ["null", "object", "undefined", "function"],
        correctAnswer: 1,
        difficulty: Difficulty.Medium
    },
    {
        question: "Which HTML element do we use for the largest heading?",
        answers: ["<h1>", "<h2>", "<h6>", "<p>"],
        correctAnswer: 0,
        difficulty: Difficulty.Easy
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 0,
        difficulty: Difficulty.Easy
    },
    {
        question: "Which is not a JavaScript framework?",
        answers: ["React", "Angular", "Vue", "Ruby"],
        correctAnswer: 3,
        difficulty: Difficulty.Medium
    },
    {
        question: "What does SQL stand for?",
        answers: ["Structured Query Language", "Stylesheet Query Language", "Statement Question Language", "Server Query Language"],
        correctAnswer: 0,
        difficulty: Difficulty.Medium
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: ["color", "background-color", "bg-color", "background"],
        correctAnswer: 1,
        difficulty: Difficulty.Easy
    },
    {
        question: "Which HTTP status code means 'Not Found'?",
        answers: ["200", "301", "404", "500"],
        correctAnswer: 2,
        difficulty: Difficulty.Medium
    },
    {
        question: "What is the default display value of a <div>?",
        answers: ["block", "inline", "none", "flex"],
        correctAnswer: 0,
        difficulty: Difficulty.Easy
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answers: ["==", "===", "!=", "!=="],
        correctAnswer: 1,
        difficulty: Difficulty.Medium
    }
];

function getRandomQuestions(num: number): Question[] {
    return questions.sort(() => 0.5 - Math.random()).slice(0, num);
}

function displayQuestions(quizQuestions: Question[]): void {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer!.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('p');
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);

        question.answers.forEach((answer, answerIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = answerIndex.toString();

            label.appendChild(input);
            label.textContent = answer;

            questionDiv.appendChild(label);
            questionDiv.appendChild(input);
        });

        quizContainer!.appendChild(questionDiv);
    });
}

function calculateScore(quizQuestions: Question[]): number {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const selectedAnswer = (document.querySelector(`input[name="question-${index}"]:checked`) as HTMLInputElement)?.value;
        if (selectedAnswer && parseInt(selectedAnswer, 10) === question.correctAnswer) {
            score++;
        }
    });

    return score;
}

document.getElementById('submit-button')!.addEventListener('click', () => {
    const quizQuestions = getRandomQuestions(3); // Select 3 random questions
    displayQuestions(quizQuestions);

    const scoreButton = document.createElement('button');
    scoreButton.textContent = "Submit Answers";
    scoreButton.addEventListener('click', () => {
        const score = calculateScore(quizQuestions);
        document.getElementById('score')!.textContent = `Your score is: ${score}/3`;
    });

    document.getElementById('quiz-container')!.appendChild(scoreButton);
});

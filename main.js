// QUESTIONS

const questions = [
  {
    "question": "Age range?",
    "answer1": "under 18",
    "answer1Total": "1",
    "answer2": "18 - 30",
    "answer2Total": "2",
    "answer3": "over 30",
    "answer3Total": "3"
  },
  {
    "question": "Do you see yourself as a sensitive, empathic person?",
    "answer1": "Agree",
    "answer1Total": "3",
    "answer2": "Neutral",
    "answer2Total": "2",
    "answer3": "Disagree",
    "answer3Total": "1"
  },
  {
    "question": 
      "When the budget is the same, would you choose to buy clothes that are more in line with the trend or more in line with your aesthetic preferences?",
    "answer1": "First",
    "answer1Total": "1",
    "answer2": "I Don't Know",
    "answer2Total": "2",
    "answer3": "Second",
    "answer3Total": "3"
  },
  {
    "question":"In group activities, do you act more as a conductor or a follower?",
    "answer1": "Follower",
    "answer1Total": "1",
    "answer2": "Conductor",
    "answer2Total": "3",
    "answer3": "Depends",
    "answer3Total": "2"
  },
  {
    "question": "Which of the following qualities would you value more",
    "answer1": "Personal Honor",
    "answer1Total": "3",
    "answer2": "Both",
    "answer2Total": "2",
    "answer3":"Collective Honor",
    "answer3Total": "1"
  },
  
  {
    "question":
      "How do you feel about big data from various aspects",
    "answer1":
      "It makes me uncomfortable",
    "answer1Total": "3",
    "answer2": "Eh, it's alright",
    "answer2Total": "2",
    "answer3": "It's kinda convenient for me",
    "answer3Total": "1"
  },
  {
    "question": 
      "Do you agree with this statement, society is a huge machine in which people are the parts, only each person to do their own duties this machine can run steadily.",
    "answer1": "Yes",
    "answer1Total": "1",
    "answer2": "I Don't Know",
    "answer2Total": "2",
    "answer3": "No",
    "answer3Total": "3"
  },
  {
    "question": "Would you put the organization's interests first and give up your personal needs?",
    "answer1": "Yes",
    "answer1Total": "1",
    "answer2": "I Don't Know",
    "answer2Total": "2",
    "answer3": "No",
    "answer3Total": "3"
  },
  {
    "question": "If your family member disrupts the organization, will you turn them in?",
    "answer1": "Yes",
    "answer1Total": "1",
    "answer2": "I Don't Know",
    "answer2Total": "2",
    "answer3": "No",
    "answer3Total": "3"
  },
  {
    "question": "Do You UNDERSTAND?",
    "answer1": "Yes",
    "answer1Total": "1",
    "answer2": "I Don't Know",
    "answer2Total": "2",
    "answer3": "No",
    "answer3Total": "3"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
     
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    
    currentQuestion++;

        
        selectedOption.checked = false;
    
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <h1 class="announce">All results will be uploaded to the statistics office</h1>
         <div class="summary">
            <h1>Summary</h1>
            
            <p>25 - 30- You take freedom as the most sought-after position, and the price is that you will struggle forever between reality and the ideal.</p>
            <p>16 - 24 - You are no different from the crowd, which is both your strength and your weakness.</p>
            <p>10 - 15 - You have chosen the safest position, so what is the cost? </p>
            
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    
    currentQuestion--;
    
    score.pop();
    
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    
    currentQuestion = 0;
    score = [];
    
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
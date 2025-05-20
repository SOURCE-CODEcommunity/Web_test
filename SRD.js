// Add this to your existing JavaScript code

// DOM Elements for dialog
const resultsDialog = document.getElementById('resultsDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogContent = document.getElementById('dialogContent');
const closeDialog = document.getElementById('closeDialog');

// Event listener for closing dialog
closeDialog.addEventListener('click', () => {
  resultsDialog.style.display = 'none';
});

// Function to show question details for a subject
function showQuestionDetails(subject) {
  dialogTitle.textContent = `${subject} - Question Details`;
  dialogContent.innerHTML = '';
  
  const questions = questionsData.questions[subject];
  
  questions.forEach((question, index) => {
    const userAnswerIndex = state.userAnswers[subject][index];
    const userAnswer = userAnswerIndex !== null ? 
      questions[index].options[userAnswerIndex].split('.')[0].trim() : 
      'Not answered';
    
    const isCorrect = question.answers.includes(userAnswer);
    
    const questionDetail = document.createElement('div');
    questionDetail.className = 'question-detail';
    
    questionDetail.innerHTML = `
      <div class="question-number">Question ${question.No}</div>
      <div class="question-text">${question.question}</div>
      <div class="answer-info">
        <strong>Your answer:</strong> ${userAnswer} 
        <span style="color: ${isCorrect ? 'var(--secondary-color)' : 'var(--accent-color)'}">
          (${isCorrect ? 'Correct' : 'Incorrect'})
        </span>
      </div>
      <div class="correct-answer"><strong>Correct answer:</strong> ${question.answers.join(', ')}</div>
      <hr style="margin-top: 10px; border: none; border-top: 1px solid #eee;">
    `;
    
    dialogContent.appendChild(questionDetail);
  });
  
  resultsDialog.style.display = 'flex';
}

// Modify your calculateResults function to include the view details button
function calculateResults() {
  let totalCorrect = 0;
  let totalQuestions = 0;
  
  resultsTableBody.innerHTML = '';
  
  // Calculate scores for each subject
  state.selectedSubjects.forEach(subject => {
    const questions = questionsData.questions[subject];
    let correct = 0;
    
    questions.forEach((question, index) => {
      const userAnswerIndex = state.userAnswers[subject][index];
      if (userAnswerIndex !== null) {
        const userAnswer = question.options[userAnswerIndex].split('.')[0].trim();
        if (question.answers.includes(userAnswer)) {
          correct++;
        }
      }
    });
    
    totalCorrect += correct;
    totalQuestions += questions.length;
    
    const percentage = Math.round((correct / questions.length) * 100);
    
    // Create view details button
    const viewDetailsBtn = document.createElement('button');
    viewDetailsBtn.className = 'view-details-btn';
    viewDetailsBtn.textContent = 'View Details';
    viewDetailsBtn.addEventListener('click', () => showQuestionDetails(subject));
    
    // Add to results table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${subject}</td>
      <td>${correct}/${questions.length}</td>
      <td>${percentage}%</td>
      <td></td>
    `;
    row.lastElementChild.appendChild(viewDetailsBtn);
    resultsTableBody.appendChild(row);
  });
  
  // Calculate total score
  const totalPercentage = Math.round((totalCorrect / totalQuestions) * 100);
  totalScore.textContent = `Total Score: ${totalPercentage}%`;
}

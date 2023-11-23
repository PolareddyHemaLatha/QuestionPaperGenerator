// generateQuestion.js
async function generateQuestionPaper() {
    const subject = document.getElementById('generateSubject').value;
    const totalMarks = parseInt(document.getElementById('totalMarks').value);
    const easyMarks = parseInt(document.getElementById('easyMarks').value);
    const mediumMarks = parseInt(document.getElementById('mediumMarks').value);
    const hardMarks = parseInt(document.getElementById('hardMarks').value);
  
    try {
      const response = await fetch(`http://localhost:3000/questions/generate?subject=${subject}&totalMarks=${totalMarks}&easyMarks=${easyMarks}&mediumMarks=${mediumMarks}&hardMarks=${hardMarks}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const questionPaper = await response.json();
        displayQuestionPaper(questionPaper);
      } else {
        const errorMessage = await response.json();
        console.error('Failed to generate question paper. Server responded with:', errorMessage);
        displayError('Failed to generate question paper');
      }
    } catch (error) {
      console.error('Error generating question paper:', error);
      displayError('Error generating question paper');
    }
  }
  
  function displayQuestionPaper(questionPaper) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Generated Question Paper:</h3>';
    
    // Display your generated question paper in the UI as needed
    questionPaper.forEach(question => {
      resultDiv.innerHTML += `<p>${question.question}</p>`;
    });
  }
  
  function displayError(errorMessage) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p style="color: red;">Error: ${errorMessage}</p>`;
  }
  
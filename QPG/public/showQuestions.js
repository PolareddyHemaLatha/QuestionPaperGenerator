async function showQuestions() {
    const subject = document.getElementById('showSubject').value;

    try {
      const response = await fetch(`http://localhost:3000/questions/show?subject=${subject}`, {
        method: 'GET',
      });

      if (response.ok) {
        const questions = await response.json();
        displayQuestions(questions);
      } else {
        const errorMessage = await response.json();
        console.error('Failed to fetch questions. Server responded with:', errorMessage);
        displayError(errorMessage.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      displayError('Failed to fetch questions. Please try again.');
    }
  }

  function displayQuestions(questions) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Fetched Questions:</h3>';
    
    // Display your questions in the UI as needed
    questions.forEach(question => {
      resultDiv.innerHTML += `<p>${question.question}</p>`;
    });
  }

  function displayError(errorMessage) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p style="color: red;">Error: ${errorMessage}</p>`;
  }
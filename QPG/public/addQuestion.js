// addQuestion.js
async function addQuestion() {
    const questionData = {
      question: document.getElementById('question').value,
      subject: document.getElementById('subject').value,
      topic: document.getElementById('topic').value,
      difficulty: document.getElementById('difficulty').value,
      marks: parseInt(document.getElementById('marks').value),
    };
  
    try {
      const response = await fetch('http://localhost:3000/questions/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
      });
  
      if (response.ok) {
        const result = await response.json();
        document.getElementById('result').innerText = result.message;
      } else {
        const errorMessage = await response.json();
        console.error('Failed to add question. Server responded with:', errorMessage);
        document.getElementById('result').innerText = 'Failed to add question';
      }
    } catch (error) {
      console.error('Error adding question:', error);
      document.getElementById('result').innerText = 'Error adding question';
    }
  }
  
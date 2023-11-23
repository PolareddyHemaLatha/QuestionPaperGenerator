const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const questionsRouter = require('./questions');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Use the questions router for routes starting with /questions
app.use('/questions', questionsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Question Paper Generator!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

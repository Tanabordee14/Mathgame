
    let operator = '+';
    let num1, num2, correctAnswer;

    function generateQuestion() {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      correctAnswer = calculateAnswer(num1, num2, operator);
      document.getElementById('question').textContent = num1 + ' ' + operator + ' ' + num2;
      document.getElementById('answer').style.display = 'block';
      document.getElementById('result').textContent = '';
    }

    function calculateAnswer(num1, num2, operator) {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
      }
    }

    function changeOperator(newOperator) {
      operator = newOperator;
      generateQuestion();
    }

    function checkAnswer() {
      const userAnswer = parseInt(document.getElementById('userAnswer').value);
      if (userAnswer === correctAnswer) {
        score.correct++; // เพิ่มจำนวนข้อถูกต้อง
        score.total++;   // เพิ่มจำนวนข้อทั้งหมด
        document.getElementById('result').textContent = 'ถูกต้อง!';
      } else {
        score.total++;   // เพิ่มจำนวนข้อทั้งหมด
        document.getElementById('result').textContent = 'ผิด!.';
      }
      document.getElementById('scoreText').textContent = `คะแนน: ${score.correct}/${score.total}`;
    }
    // เพิ่มตัวแปร score
    let score = {
    correct: 0,
    total: 0
    }; 
  
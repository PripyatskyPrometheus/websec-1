document.querySelector('.calculate-button').addEventListener('click', function() {
    const num1 = parseFloat(document.querySelector('.number-input:nth-child(1)').value);
    const num2 = parseFloat(document.querySelector('.number-input:nth-child(3)').value);
    const operator = document.querySelector('.operation-select').value;
    const resultsContainer = document.querySelector('.results-container');
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Пожалуйста, введите корректные числа.');
      return;
    }
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
      if (Math.abs(num2) < Number.EPSILON) {
        alert('Нельзя делить на ноль');
        return;
      }
      result = num1 / num2;
      break;
      default:
        alert('Неверная операция');
        return;
    }
  
    const previousResults = resultsContainer.querySelectorAll('p');
    previousResults.forEach(result => {
      result.classList.add('previous-result');
    });

    const resultElement = document.createElement('p');
    resultElement.textContent = `${num1} ${operator} ${num2} = ${result}`;
    resultsContainer.appendChild(resultElement);
  });
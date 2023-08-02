let currentInput = '';
    
    function clearDisplay() {
      currentInput = '';
      updateDisplay();
    }
    
    function appendValue(value) {
      currentInput += value;
      updateDisplay();
    }
    
    function calculate() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
      } catch (error) {
        currentInput = 'Error';
        updateDisplay();
      }
    }
    
    function updateDisplay() {
      document.getElementById('display').textContent = currentInput;
    }
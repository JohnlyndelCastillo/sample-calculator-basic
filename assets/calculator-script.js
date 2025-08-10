function appendDisplay (value) {
    document.getElementById('screen').value += value;
}

function clearDisplay (value) {
    document.getElementById('screen').value = '';

}

function appendOperator(operator) {
    let display = document.getElementById('screen');
    let lastChar = display.value.slice(-1);
        if (['+', '-', '*', '÷'].includes(lastChar)) {
            display.value = display.value.slice(0, -1) + operator;
            } else {
                display.value += operator;
            }
}

function calculateResult() {
    try {
        // Get the input value
        let input = document.getElementById('screen').value;

        // Replace non-standard division symbols with the standard forward slash (/)
        input = input.replace(/÷/g, '/').replace(/×/g, '*');

        // Evaluate the expression
        let result = eval(input);

        // Check if the result is valid
        if (!isFinite(result)) throw new Error('Invalid Calculation');

        // Display the result
        document.getElementById('screen').value = result;
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}
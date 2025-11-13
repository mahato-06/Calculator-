
const display = document.getElementById('display');


function appendValue(value) {
    // Only add value if the display is not 'Error'
    if (display.value === 'Error') {
        display.value = ''; // Clear the error before starting a new input
    }
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}

// Function to remove the last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        // The built-in 'eval()' function evaluates a string expression.
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        // Handle errors like dividing by zero or invalid input
        display.value = 'Error';
    }
}
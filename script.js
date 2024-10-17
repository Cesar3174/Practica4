function clearScreen() {
    document.getElementById('resultado').value = '';
}

function appendToScreen(value) {
    document.getElementById('resultado').value += value;
}

function calculate() {
    let expression = document.getElementById('resultado').value;
    if (expression) {
        document.getElementById('resultado').value = eval(expression);
    }
}

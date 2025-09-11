function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "sub") {
        result = num1 - num2;
    } else if (operation === "mul") {
        result = num1 * num2;
    } else if (operation === "div") {
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    }
    document.getElementById('result').innerText = "Result: " + result;
}
function validateInp(n){
    return Number.isInteger(n) && n >= 0;
}

document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
  });

function calculate(event) {
    event.preventDefault();

    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operator = document.getElementById('operator').value;
    const operand2 = parseFloat(document.getElementById('operand2').value);

    if (!validateInp(operand1) || !validateInp(operand2)) {
        alert("Error :(");
        return;
    } else if ((operator === 'div' || operator === 'mod') && operand2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case 'add':
            result = operand1 + operand2;
            break;
        case 'sub':
            result = operand1 - operand2;
            break;
        case 'mul':
            result = operand1 * operand2;
            break;
        case 'div':
            result = operand1 / operand2;
            break;
        case 'mod':
            result = operand1 % operand2;
            break;
    }

    alert(result);
    console.log(result);
}

function useMe() {
    alert("Please, use me...");
}

setInterval(useMe, 30000)
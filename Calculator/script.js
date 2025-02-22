function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}

// function calculate() {
//     let expression = document.getElementById("display").value;
    
//     try {
//         let result = new Function('return ' + expression)();
//         document.getElementById("display").value = result;
//     } catch (error) {
//         document.getElementById("display").value = "Error";
//     }
// }

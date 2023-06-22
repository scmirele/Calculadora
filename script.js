// let buttons = document.querySelectorAll('.container-buttons')
// let buttonsValores = document.querySelectorAll('.buttons')


function insertNumber(num) {
    // buttons.addEventListener("onclick")
    let number = document.querySelector('.screen').innerHTML;
    document.querySelector('.screen').innerHTML = number + num;
}

function insertOperation(op) {
    let operation = document.querySelector('.screen').innerHTML;
    document.querySelector('.screen').innerHTML = operation + op;
}

function clean() {
    document.querySelector('.screen') = "";
}
// buttons.addEventListener("click")
// buttonsValores.addEventListener("click", calculate)




// function calculate(value) {
//     console.log(value)
    // switch(operation) {
    //     case '+':
    //         return(number1 + number2)
    //     case '-':
    //         return(number1 - number2)
    //     case '*':
    //         return(number1 * number2)
    //     case '/':
    //         return(number1 / number2)
    //     default:
    //         return(NaN)
    // }



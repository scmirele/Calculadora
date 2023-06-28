function insertNumberOperation(num) {
  let number = document.querySelector('.screen').innerHTML;
  document.querySelector('.screen').innerHTML = number + num;
}

function clean() {
  document.querySelector('.screen').innerHTML = "";
}  

function calculate() {
  let result = document.querySelector('.screen').innerHTML;
  if(result) {
      document.querySelector('.screen').innerHTML = eval(result);
  }
  else {
    document.querySelector('.screen').innerHTML = "nothing..."
  }
}


// function calculate(value) {
  //     console.log(value)
  //   switch(operation) {
    //     case '+':
    //        return(number1 + number2)
    //     case '-':
    //        return(number1 - number2)
    //      case '*':
    //        return(number1 * number2)
    //      case '/':
    //        return(number1 / number2)
    //      default:
    //        return(NaN)
//   }
// }
          
          // function insertOperation(op) {
            //   let operation = document.querySelector('.screen').innerHTML;
            
            // function back() {
              //   let screen = document.querySelector('.screen').innerHTML;  
              //   document.querySelector('.screen').innerHTML = screen.substring(0, screen.length -1);
              // }
              
              // buttons.addEventListener("onclick")
  
  //   document.querySelector('.screen').innerHTML = operation + op;  
  // }
  // buttons.addEventListener("click")
  // buttonsValores.addEventListener("click", calculate)
  
  
  
  
  // let buttons = document.querySelectorAll('.container-buttons')
  // let buttonsValores = document.querySelectorAll('.buttons')

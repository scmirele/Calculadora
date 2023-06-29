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
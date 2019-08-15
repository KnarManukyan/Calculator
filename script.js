const textField = document.getElementById("expression-field");
const buttons = document.querySelectorAll('.button-group button:not(#btn-equals)');
const equalsButton = document.getElementById("btn-equals");

let expressionEnded = false;

buttons.forEach(currentButton => {
  currentButton.addEventListener('click', event => {
    if(expressionEnded){
      expressionEnded = false;
      textField.innerHTML = '';
    }
    if(currentButton.id == 'btn-del'){
      let exp = textField.innerText;
      textField.innerText = exp.substring(0, exp.length-1);
    } else if(currentButton.id == 'btn-c'){
      textField.innerText = '';
    } else if (textField.innerHTML === '') {
      textField.innerHTML = currentButton.innerText;
    } else {
      textField.innerHTML += currentButton.innerText;
    }
  })
})

window.addEventListener("keyup", function(event){
  switch(event.keyCode){
    case 8: document.getElementById("btn-del").click(); break;
    case 46: document.getElementById("btn-c").click(); break;
    case 48: document.getElementById("btn-)").click(); break;
    case 57: document.getElementById("btn-(").click(); break;
    case 96: document.getElementById("btn-0").click(); break;
    case 97: document.getElementById("btn-1").click(); break;
    case 98: document.getElementById("btn-2").click(); break;
    case 99: document.getElementById("btn-3").click(); break;
    case 100: document.getElementById("btn-4").click(); break;
    case 101: document.getElementById("btn-5").click(); break;
    case 102: document.getElementById("btn-6").click(); break;
    case 103: document.getElementById("btn-7").click(); break;
    case 104: document.getElementById("btn-8").click(); break;
    case 105: document.getElementById("btn-9").click(); break;
    case 106: document.getElementById("btn-*").click(); break;
    case 107: document.getElementById("btn-+").click(); break;
    case 109: document.getElementById("btn--").click(); break;
    case 110: document.getElementById("btn-.").click(); break;
    case 111: document.getElementById("btn-/").click(); break;
    case 187: document.getElementById("btn-equals").click(); break;
  }
});

equalsButton.addEventListener('click', event => {
  textField.innerHTML  = calculateResult(textField.innerHTML);
  expressionEnded = true;
})


function calculateResult(expression){
  try{
    if(expression.includes('/0')){
     return "We can not divide by 0 yet, sorry :("
    } else {
      return eval(expression);
    }
  } catch(error) {
    return "Math Error";
  }
}

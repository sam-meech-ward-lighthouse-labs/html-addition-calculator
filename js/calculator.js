const form = document.getElementById("calculatorForm");

form.onsubmit = (event) => {
  event.preventDefault();

  let number1 = document.getElementById("calculatorFormNumber1").value;
  let number2 = document.getElementById("calculatorFormNumber2").value;

  number1 = Number(number1);
  number2 = Number(number2);

  const string = `${number1} + ${number2} = ${number1+number2}`;

  alert(string);
};


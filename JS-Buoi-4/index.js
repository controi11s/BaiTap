//
function sortNumber() {
  let number1 = document.getElementById("number_1").value;
  let number2 = document.getElementById("number_2").value;
  let number3 = document.getElementById("number_3").value;
  // let temp = [number1, number2, number3]; // 3, 2, 9
  // let result = [];
  let first, second, third;
  if (number1 < number2 && number1 < number3 && number2 < number3) {
    first = number1;
    second = number2;
    third = number3;
  } else if (number1 > number2 && number1 > number3) {
    third = number1;
  } else if (number1 > number2 && number1 < number3) {
    second = number1;
  }
  let resultStr = first + "->" + second + "->" + third;
  document.getElementById("result").innerText = resultStr;
  console.log(resultStr);
  // 2 -> 3 -> 5
}

// return true if num1 > num2;
function compare(num1, num2) {
  return num1 > num2;
}

function myHello() {
  let name = document.querySelector('input[name="answer"]:checked').value;
  document.getElementById("result2").innerText = "Hello " + name;
}

function sum() {
  let number1 = document.getElementById("number-1").value;
  let number2 = document.getElementById("number-2").value;
  let number3 = document.getElementById("number-3").value;

  let even = 0;
  let odd = 0;
  if (number1 % 2 === 0) {
    even = even + 1;
  } else {
    odd = odd + 1;
  }
  if (number2 % 2 === 0) {
    even = even + 1;
  } else {
    odd = odd + 1;
  }
  if (number3 % 2 === 0) {
    even = even + 1;
  } else {
    odd = odd + 1;
  }
  document.getElementById("resut3").innerText =
    "Chẵn: " + even + "     Lẽ: " + odd;
}

function canhTamGiac() {
  let number1 = document.getElementById("canh_1").value;
  let number2 = document.getElementById("canh_2").value;
  let number3 = document.getElementById("canh_3").value;
  let answer1 = "Tam Giác Cân";
  let answer2 = "Tam Giác Đều";
  let answer3 = "Tam Giác Vuông";
  let answer4 = "Tam Giác Thường";
  let finalAnswer = "";
  if (
    (number1 === number2 && number1 != number3) ||
    (number2 === number3 && number1 != number3)
  ) {
    finalAnswer = answer1;
  } else if (number1 === number2 && number1 === number3) {
    finalAnswer = answer2;
  } else if (number1 * number1 + number2 * number2 === number3 * number3) {
    finalAnswer = answer3;
  } else {
    finalAnswer = answer4;
  }
  document.getElementById("result4").innerText = finalAnswer;
}

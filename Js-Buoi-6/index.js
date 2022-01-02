function bai2() {
  let x = 2;
  let n = 4;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // x^2 = Math.pow(x, 2)
    sum += Math.pow(x, i); // sum = sum + ..
  }

  console.log(sum);
  // 2 + 2^2 + 2^3

  // 0 + 2 = 2
  // 2 +
}

function bai3() {
  let x = 4;
  let giaiThuaEl = 1;
  for (let i = 1; i <= x; i++) {
    giaiThuaEl *= i;
  }
  console.log(giaiThuaEl);
}

bai3();

function addDivEl() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      let redDiv = document.createElement("div");
      redDiv.className = "red-div";
      document.getElementById("result").appendChild(redDiv);
    } else {
      let blueDiv = document.createElement("div");
      blueDiv.className = "blue-div";
      document.getElementById("result").appendChild(blueDiv);
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function appNumber() {
  let x = document.getElementById("number").value;
  for (let i = 1; i <= x; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

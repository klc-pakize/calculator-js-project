const con3 = document.querySelector("#con3");
const monitor = document.querySelector(".monitor");
const monitor_1 = document.querySelector(".monitor_1");
const monitor_2 = document.querySelector(".monitor_2");

let sayi1;
let sayi2;
let flag = 1;
let operator = "";

const calculate = () => {
  if (operator == "+") {
    monitor.innerText = sayi1 + sayi2;
  } else if (operator == "-") {
    monitor.innerText = sayi1 - sayi2;
  } else if (operator == "x") {
    monitor.innerText = sayi1 * sayi2;
  } else if (operator == "÷") {
    monitor.innerText = sayi1 / sayi2;
  } else if (operator == "%") {
    monitor.innerText = sayi1 % sayi2;
  }
};

con3.addEventListener("click", (e) => {
  //console.log(e.target);
  if (e.target.classList.contains("operator") && !operator) {
    flag++;
    // console.log(flag);
    operator = e.target.innerText;
    monitor_2.innerText = operator;
    // console.log(typeof e.target.innerText);
    monitor.innerText = "";
  }

  if (e.target.classList.contains("numbers")) {
    // console.log(parseFloat(e.target.innerText));

    monitor.innerText += parseFloat(e.target.innerText);
    if (flag === 1) {
      sayi1 = parseFloat(monitor.innerText);
      monitor_1.innerText = sayi1;
    }
    if (flag === 2) {
      sayi2 = parseFloat(monitor.innerText);
      monitor_1.innerText = sayi2;
    }
  }

  if (e.target.classList.contains("dot")) {
    monitor.innerText = monitor.innerText + e.target.innerText;
  }

  if (e.target.classList.contains("ac")) {
    sayi1 = 0;
    sayi2 = 0;
    flag = 1;
    operator = "";
    monitor.innerText = "";
    monitor_1.innerText = "";
    monitor_2.innerText = "";
  }
  if (e.target.classList.contains("sign")) {
    if (monitor.innerText == "") {
      monitor.innerText = "-" + monitor.innerText;
    }
    monitor.innerText = monitor.innerText * -1;
    if (flag === 1) {
      sayi1 = parseFloat(monitor.innerText);
      monitor_1.innerText = sayi1;
    } else if (flag === 2) {
      sayi2 = parseFloat(monitor.innerText);
    }
  }
  if (e.target.classList.contains("equal")) {
    calculate();
  }
});

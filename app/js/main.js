const ballgo = document.querySelector("#ball");
const balls = document.querySelectorAll("#balls div");
const main = document.querySelector("#main");
balls.forEach((ball, index) => {
  ball.addEventListener("click", function () {
    if (index != 0) {
      ballgo.classList.remove("left");
      ballgo.classList.remove("right");
      main.classList.remove("theme1");
      main.classList.remove("theme2");
      main.classList.remove("theme3");
    }
    if (index == 1) {
      ballgo.classList.add("left");
      main.classList.add("theme1");
    } else if (index == 2) {
      ballgo.classList.remove("left");
      ballgo.classList.remove("right");
      main.classList.add("theme2");
    } else if (index == 3) {
      ballgo.classList.add("right");
      main.classList.add("theme3");
    }
  });
});

const nums = document.querySelectorAll(".keyboard #num");
const cals = document.querySelectorAll("#cal");
const front = document.querySelector("#front");
let firstNum = "";
let secondnum = "";
var calMan = null;
nums.forEach((num) => {
  num.addEventListener("click", function () {
    if (calMan != null) {
      if (this.getAttribute("value") == "del") {
        secondnum = secondnum.slice(0, -1);
        front.innerHTML = firstNum + " " + calMan + " " + secondnum;
      } else {
        secondnum += this.getAttribute("value");
        front.innerHTML = firstNum + " " + calMan + " " + secondnum;
      }
    } else {
      if (this.getAttribute("value") == "del") {
        firstNum = firstNum.slice(0, -1);
        if (firstNum == "") {
          front.innerHTML = 0;
        } else {
          front.innerHTML = firstNum;
        }
      } else {
        firstNum += this.getAttribute("value");
        front.innerHTML = firstNum;
      }
    }
  });
});
cals.forEach((cal) => {
  cal.addEventListener("click", function () {
    if (this.getAttribute("value") == "=") {
      let calNum1 = Number(firstNum);
      let calNum2 = Number(secondnum);
      if (calMan === "+") {
        let final = calNum1 + calNum2;
        firstNum = String(final);
        secondnum = "";
        front.innerHTML = firstNum;
      } else if (calMan === "-") {
        let final = calNum1 - calNum2;
        firstNum = String(final);
        secondnum = "";
        front.innerHTML = firstNum;
      } else if (calMan === "x") {
        let final = calNum1 * calNum2;
        firstNum = String(final);
        secondnum = "";
        front.innerHTML = firstNum;
      } else if (calMan === "/") {
        let final = calNum1 / calNum2;
        firstNum = String(final);
        secondnum = "";
        front.innerHTML = firstNum;
      }
      calMan = null;
    } else {
      if (calMan != null && secondnum != "") {
        let calNum1 = Number(firstNum);
        let calNum2 = Number(secondnum);
        if (calMan === "+") {
          let final = calNum1 + calNum2;
          firstNum = String(final);
          secondnum = "";
          front.innerHTML = firstNum;
        } else if (calMan === "-") {
          let final = calNum1 - calNum2;
          firstNum = String(final);
          secondnum = "";
          front.innerHTML = firstNum;
        } else if (calMan === "x") {
          let final = calNum1 * calNum2;
          firstNum = String(final);
          secondnum = "";
          front.innerHTML = firstNum;
        } else if (calMan === "/") {
          let final = calNum1 / calNum2;
          firstNum = String(final);
          secondnum = "";
          front.innerHTML = firstNum;
        }
      }
      calMan = this.getAttribute("value");
      front.innerHTML = firstNum + " " + calMan;
      if (calMan === "reset") {
        firstNum = "";
        secondnum = "";
        calMan = null;
        front.innerHTML = 0;
      }
    }
  });
});

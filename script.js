// variables
let box = document.querySelectorAll(".second-table-rows-td");
let check = true;
let audio = new Audio("sounds/ting.mp3");
let audio1 = new Audio("sounds/won.mp3");
let empty = "";
let comment = document.querySelector(".second-section2-h3");
let hero = true;
let btn = document.querySelector(".second-section2-button");
let wow = document.querySelector(".second-wow");
let congrats = document.querySelector(".second-section2-h1");
let extra = document.querySelector(".extra-hori");

// main script
box.forEach(something);
btn.addEventListener("click", () => {
  window.location.reload();
});

// functions
function something(event, index) {
  event.addEventListener("click", function () {
    if (event.textContent == empty && hero == true) {
      audio.play();
      event.textContent = zeroCross();
    }
    checkAnswers();
  });
}
function zeroCross() {
  if (check == true) {
    check = false;
    comment.textContent = "Turn for O";
    return "X";
  } else {
    check = true;
    comment.textContent = "Turn for X";
    return "O";
  }
}
function checkAnswers() {
  let possibilities = [
    [0, 1, 2],
    [2, 5, 8],
    [8, 7, 6],
    [6, 3, 0],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
  ];
  possibilities.forEach(function (e) {
    if (
      box[e[0]].textContent != empty &&
      box[e[1]].textContent != empty &&
      box[e[2]].textContent != empty
    ) {
      if (
        box[e[0]].textContent == box[e[1]].textContent &&
        box[e[1]].textContent == box[e[2]].textContent
      ) {
        hero = false;
        audio1.play();
        congrats.textContent = "Congratulations 🥳";
        comment.textContent = box[e[0]].textContent + " won";
        wow.style.visibility = "visible";
        extra.style.opacity = "1";
        switch (e) {
          case possibilities[0]:
            extra.classList.add("okay0");
            // extra.style.bottom = "360px";
            break;
          case possibilities[1]:
            extra.classList.add("okay1");
            // extra.style.transform = "rotate(90deg)";
            // extra.style.left = "135px";
            // extra.style.bottom = "220px";
            break;
          case possibilities[2]:
            extra.classList.add("okay2");
            // extra.style.bottom = "90px";
            break;
          case possibilities[3]:
            extra.classList.add("okay3");
            // extra.style.transform = "rotate(90deg)";
            // extra.style.left = "-135px";
            // extra.style.bottom = "220px";
            break;
          case possibilities[4]:
            extra.classList.add("okay4");
            // extra.style.transform = "rotate(45deg)";
            // extra.style.bottom = "220px";
            break;
          case possibilities[5]:
            extra.classList.add("okay5");
            // extra.style.transform = "rotate(-45deg)";
            // extra.style.bottom = "220px";
            break;
          case possibilities[6]:
            extra.classList.add("okay6");
            // extra.style.transform = "rotate(90deg)";
            // extra.style.bottom = "220px";
            break;
          case possibilities[7]:
            extra.classList.add("okay7");
            // extra.style.bottom = "220px";
            break;
        }
      }
    }
  });
}

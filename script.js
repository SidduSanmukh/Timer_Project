let M = document.querySelector(".Minutes");
let S = document.querySelector(".Seconds");
let MS = document.querySelector(".MiliSeconds");
let input = document.querySelector("input");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let RESET = document.querySelector("#RESET");
stop.style.display = "none";
RESET.style.display = "none";

start.addEventListener("click", () => {
  let accept = input.value;
  if (accept == "") {
    alert("Please Input The Number Of Minutes:");
    start.disabeld();
  } else {
    start.style.display = "none";
    stop.style.display = "block";
  }
  console.log(accept);

  let counter = 0;
  let minutes = accept;
  let seconds = 59;
  let mili_seconds = 99;

  const interval = setInterval(() => {
    counter++;
    decre = mili_seconds--;
    MS.innerHTML = decre;
    M.innerHTML = minutes;
    S.innerHTML = seconds;
    if (decre <= 0) {
      mili_seconds = 99;
      seconds -= 1;
      if (seconds <= 0) {
        MS.innerHTML = "00";
        seconds = 59;
        minutes -= 1;
        if (minutes < 0) {
          M.innerHTML = "0";
        }
      }
    }
    if (M.innerHTML == "-1") {
      clearInterval(interval);
      M.innerHTML = "00";
      S.innerHTML = "00";
      MS.innerHTML = "00";
    }
  }, 10);
  if (minutes < 0) {
    setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  }
  stop.addEventListener("click", () => {
    clearInterval(interval);
    RESET.style.display = "block";
    stop.style.display = "none";
  });
  RESET.addEventListener("click", () => {
    M.innerHTML = "00";
    S.innerHTML = "00";
    MS.innerHTML = "00";
    RESET.style.display = "none";
    start.style.display = "block";
    input.value = "";
  });
});

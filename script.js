
// 타이머 초기값
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timeRef = document.querySelector('.timer')
let start = document.querySelector('#start')
let pause = document.querySelector('#pause')
let reset = document.querySelector('#reset')


let int = null;


// 시작
start.addEventListener('click', function () {
  if (int === null) {
    int = setInterval(displayTimer, 10);
  }
});

// 정지
pause.addEventListener('click', function () {
  clearInterval(int);
  int = null;
})

// 리셋
reset.addEventListener('click', function () {
  clearInterval(int);
  int = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

  timeRef.innerHTML = "00 : 00 : 00 : 000";
})

function displayTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');

  let ms = String(milliseconds).padStart(3, '0');

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}
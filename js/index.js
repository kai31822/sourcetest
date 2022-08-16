
// hot deal
// Set the date we're counting down to
let countDownDate = new Date("Sep 30, 2022 12:30:00").getTime();

// Update the count down every 1 second
let countdown = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = format0(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = format0(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = format0(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = format0(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
function format0(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}
// hot deal end


// NEW PRODUCTS
//顯示圖片下標
let index = 0;
// 圖片數量
let images = document.querySelectorAll(".carousel .container  img").length;

const botton = document.querySelector(".carousel .botton");
for (let i = 0; i < images.length; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.onclick = () => setIndex(i);
  botton.append(indicator);
}
// 自動滾動

function createAuto() {
  return setInterval(() => {
    index++;
    refresh();
  }, 5000);
}
let autoTimer = createAuto();

function refresh() {
  if (index < 0) {
    // 下標小於0時    設置最右邊的圖片
    index = images - 1;
  } else if (index > images - 1) {
    // 下標超過上限時    設置最左邊的圖片
    index = 0;
  }

  // 獲取元素
  let carousel = document.querySelector(".carousel");
  //獲取輪播框的寬度
  let width = getComputedStyle(carousel).width;
  width = Number(width.slice(0, -2));
  // console.log(width);
  carousel.querySelector(".container ").style.left = index * width * -1 + "px";
}
// refresh裝飾器
let refreshWrapper = (func) => {
  return function (...args) {
    let result = func(...args);
    refresh();

    // 重製自動滾動
    clearInterval(autoTimer);
    autoTimer = createAuto();
    return result;
  };
};

// 左
let leftshift = refreshWrapper(() => {
  index--;
});
// 右
let rightshift = refreshWrapper(() => {
  index++;
});
// 點選時
let setindex = refreshWrapper((idx) => {
  index = idx;
});
// 整理
refresh();

// 2

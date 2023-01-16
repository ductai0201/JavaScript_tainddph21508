"use strict";

const gameEvents = new Map([
  [17, "Ghi bàn"],
  [36, "Thay người"],
  [47, "Ghi bàn"],
  [61, "Thay người"],
  [64, "Thẻ vàng"],
  [72, "Ghi bàn"],
  [77, "Ghi bàn"],
  [85, "Thẻ vàng"],
]);
// 1
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`Một sự kiện xảy ra trung bình mỗi ${time / gameEvents.size} phút`);

// 4

for (const [min, events] of gameEvents) {
  const half = min <= 45 ? "First half" : "Second half";
  console.log(`[${half}] ${min}: ${events}`);
}

// lab 2.2

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(first,second);
    if (first && second) {
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(output);
    }
  }
});

// 2.4
(function () {
  const header = document.querySelector("h1");
  // lấy ra phần từ h1 gán biến header
  header.style.color = "red";
  // set thuộc tính màu cho h1 là red 
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
  // sử dụng sự kiện addEvent click để thay đổi thuộc tính header từ red -> blue
  // khi click vào bất kì đâu ở nội dung trang web thì addEventListener được kích hoạt :))

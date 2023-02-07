

const Scrolltoo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

Scrolltoo.addEventListener("click", () => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
});


// CCC
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  
});







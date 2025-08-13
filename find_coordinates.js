// my solution

// const html = document.querySelector('html');
// let latestX = 0;
// let latestY = 0;
// // let intervalId;

// const vertical = document.getElementById('vertical');
// const horizontal = document.getElementById('horizontal');
// const coordinates = document.getElementById('coordinates');

// html.addEventListener('mousemove', function (event) {
//   latestX = event.clientX;
//   latestY = event.clientY;
// });

// document.addEventListener('mousemove', (event) => {
//   vertical.style.left = `${event.clientX}px`;
//   horizontal.style.top = `${event.clientY}px`;
//   coordinates.style.left = `${event.clientX}px`;
//   //   coordinates.style.top = `${event.clientY + 20}px`;
//   coordinates.textContent = `${event.clientX}px, ${event.clientY}px`;
// });

// try

// html.addEventListener('mouseover', function () {
//   intervalId = setInterval(() => {
//     console.log(`client: ${latestX}, ${latestY}`);
//   }, 10);
// });

// html.addEventListener('mouseout', function () {
//   clearInterval(intervalId);
// });

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});

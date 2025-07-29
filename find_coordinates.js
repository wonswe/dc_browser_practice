const html = document.querySelector('html');
let latestX = 0;
let latestY = 0;
// let intervalId;

const vertical = document.getElementById('vertical');
const horizontal = document.getElementById('horizontal');
const coordinates = document.getElementById('coordinates');

html.addEventListener('mousemove', function (event) {
  latestX = event.clientX;
  latestY = event.clientY;
});

document.addEventListener('mousemove', (event) => {
  vertical.style.left = `${event.clientX}px`;
  horizontal.style.top = `${event.clientY}px`;
  coordinates.style.left = `${event.clientX}px`;
  //   coordinates.style.top = `${event.clientY + 20}px`;
  coordinates.textContent = `${event.clientX}px, ${event.clientY}px`;
});

// html.addEventListener('mouseover', function () {
//   intervalId = setInterval(() => {
//     console.log(`client: ${latestX}, ${latestY}`);
//   }, 10);
// });

// html.addEventListener('mouseout', function () {
//   clearInterval(intervalId);
// });

const html = document.querySelector('html');
let latestX = 0;
let latestY = 0;
let intervalId;

html.addEventListener('mousemove', function (event) {
  latestX = event.clientX;
  latestY = event.clientY;
});

html.addEventListener('mouseover', function () {
  intervalId = setInterval(() => {
    console.log(`client: ${latestX}, ${latestY}`);
  }, 100);
});

html.addEventListener('mouseout', function () {
  clearInterval(intervalId);
});

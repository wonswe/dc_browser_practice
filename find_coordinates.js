const html = document.querySelector('html');
html.addEventListener('click', (event) => {
  console.log(`client: ${event.clientX}, ${event.clientY}`);
});

let intervalId;

html.addEventListener('mouseover', function (event) {
  intervalId = setInterval(() => {
    console.log(`client: ${event.clientX}, ${event.clientY}`);
  }, 100);
});

html.addEventListener('mouseout', function () {
  clearInterval(intervalId);
  console.log('Mouse left the window.');
});

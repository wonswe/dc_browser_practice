const html = document.querySelector('html');
html.addEventListener('click', (event) => {
  console.log(`client: ${event.clientX}, ${event.clientY}`);
});

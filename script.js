const clapButton = document.getElementById('clap-button');

clapButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function celebrate() {
  setTimeout(function() {
    var end = Date.now() + 3000;
    var colors = ["#1dd7dd", "#1ddd83", "#dd361d", "#dd961d"];
    var interval = setInterval(shootConfetti, 200);
    function shootConfetti() {
      if (Date.now() > end) {
        clearInterval(interval);
      } else {
        confetti({
          startVelocity: 20,
          spread: 360,
          colors: colors,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.3
          }
        });
      }
    }
  }, 2000);
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
  celebrate();
}
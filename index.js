function runCode() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var imageElements = document.querySelectorAll('.img1, .img2');
  var randomInteger1 = getRandomInt(1, 6);
  var randomInteger2 = getRandomInt(1, 6);

  imageElements[0].src = `./dice${randomInteger1}.png`;
  imageElements[1].src = `./dice${randomInteger2}.png`;

  var resultMessage = randomInteger1 > randomInteger2 ? "Player One Wins!" :
                     randomInteger2 > randomInteger1 ? "Player Two Wins!" :
                     "Draw";
  
  document.querySelector("h1").innerHTML = resultMessage;
  console.log(randomInteger1, randomInteger2);
}

document.getElementById("rerunbtn").addEventListener("click", runCode);

runCode();

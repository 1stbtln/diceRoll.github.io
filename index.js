function runCode() {

  var imageElement = document.querySelector('.img1');
  function getRandomInt1(min, max) {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randomInteger1 = getRandomInt1(1, 6);

  if (randomInteger1 === 1) {
    imageElement.src = './dice1.png';
  } else if (randomInteger1 === 2) {
    imageElement.src = './dice2.png';
  } else if (randomInteger1 === 3) {
    imageElement.src = './dice3.png';
  } else if (randomInteger1 === 4) {
    imageElement.src = './dice4.png';
  } else if (randomInteger1 === 5) {
    imageElement.src = './dice5.png';
  } else if (randomInteger1 === 6) {
    imageElement.src = './dice6.png';
  }

  var imageElement = document.querySelector('.img2');

  function getRandomInt2(min, max) {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    var randomInteger2 = getRandomInt2(1, 6);

  if (randomInteger2 === 1) {
    imageElement.src = './dice1.png';
  } else if (randomInteger2 === 2) {
  imageElement.src = './dice2.png';
  } else if (randomInteger2 === 3) {
  imageElement.src = './dice3.png';
  } else if (randomInteger2 === 4) {
  imageElement.src = './dice4.png';
  } else if (randomInteger2 === 5) {
  imageElement.src = './dice5.png';
  } else if (randomInteger2 === 6) {
    imageElement.src = './dice6.png';
  }

if (randomInteger1 > randomInteger2) {
  document.querySelector("h1").innerHTML = "Player One Wins!"
} else if (randomInteger2 > randomInteger1){
    document.querySelector("h1").innerHTML = "Player Two Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
    console.log(randomInteger1, randomInteger2);
}

document.getElementById("rerunbtn").addEventListener("click", runCode);

runCode();

// interactive nature of the app

const addOne = (event) => {
  const displayNumElement = document.getElementById('display-number');
  displayNumElement.innerText = parseInt(displayNumElement.innerText) + 1;
};

const subtractOne = (event) => {
  const displayNumElement = document.getElementById('display-number');
  displayNumElement.innerText = parseInt(displayNumElement.innerText) - 1;
};

const addOneButton = document.getElementById('add-one');
const subtractOneButton = document.getElementById('subtract-one');

addOneButton.onclick = addOne;
subtractOneButton.onclick = subtractOne;

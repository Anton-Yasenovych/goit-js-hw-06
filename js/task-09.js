function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  textColor: document.querySelector(".color"),
};

  refs.buttonEl.addEventListener('click', () => {
    
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textColor.textContent = getRandomHexColor();
  
  });



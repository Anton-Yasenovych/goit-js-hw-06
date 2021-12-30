const refs = {
getInput : document.querySelector('#name-input'),
getOutput : document.querySelector('#name-output'),
};

refs.getInput.addEventListener('input', getInputChange);

function getInputChange(ev){
if(refs.getInput.value===''){
refs.getOutput.textContent = 'Anonymous';
}
else {refs.getOutput.textContent=ev.currentTarget.value};
};



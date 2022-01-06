const getInputElem = document.querySelector('#validation-input');
getInputElem.addEventListener('blur', onInputBlur);

function onInputBlur(event){
const getInputLength = event.currentTarget.value.length;

if(getInputLength === Number(getInputElem.dataset.length)) {
    getInputElem.classList.add('valid');
    getInputElem.classList.remove('invalid')
}
 else{
    getInputElem.classList.add('invalid');
    getInputElem.classList.remove('valid');
};
};

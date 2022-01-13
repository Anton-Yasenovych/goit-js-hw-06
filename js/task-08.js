const getFormElem = document.querySelector('form.login-form');
getFormElem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget;
    
     if (email.value === '' || password.value === '') {
        return alert('ATTENTION!!! Please fill in all the fields!');
      };

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}


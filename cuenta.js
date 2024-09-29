"use strict";
const validadorCuenta = () => {
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    const accountOn = document.getElementById(`account`);
    const inputUser = userInput.value;
    const inputPassword = passwordInput.value;
    const realUser = 'leo';
    const realpassword = 'leo';
    if (inputUser === realUser && inputPassword === realpassword) {
        accountOn.innerText = `Entraste a la cuenta usuario: ${realUser}`;
    }
    else {
        accountOn.innerText = 'Usuario o contraseña incorrecta, intente denuevo.';
    }
    //console.log(`${inputUser} ${inputPassword}`);
};

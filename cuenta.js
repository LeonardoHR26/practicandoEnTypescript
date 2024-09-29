"use strict";
let intentos = 0;
const validadorCuenta = () => {
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    const accountOn = document.getElementById('account');
    const intentosFallidosInput = document.getElementById('intentosFallidos');
    const botonLogin = document.getElementById('login');
    const inputUser = userInput.value;
    const inputPassword = passwordInput.value;
    const realUser = 'leo';
    const realpassword = 'leo';
    if (inputUser === realUser && inputPassword === realpassword) {
        accountOn.innerText = `Entraste a la cuenta usuario: ${realUser}`;
        accountOn.style.color = `green`;
        alert('Entraste a la cuenta, UwU');
    }
    else {
        intentos++;
        accountOn.style.color = `red`;
        accountOn.innerText = 'Usuario o contraseña incorrecta, intente denuevo.';
        intentosFallidosInput.textContent = `Intentos Fallidos: ${intentos}`;
    }
    console.log(`Entrada usuario: ${inputUser} Entrada password: ${inputPassword}`);
    if (intentos >= 5) {
        alert('Numeros de intentos Maximos permitidos');
        botonLogin.style.backgroundColor = 'red';
        botonLogin.disabled;
    }
};

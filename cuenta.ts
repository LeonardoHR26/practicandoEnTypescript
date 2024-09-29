let intentos : number = 0;

const validadorCuenta = () => {

    const userInput = document.getElementById('user') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const accountOn = document.getElementById('account') as HTMLElement;
    const intentosFallidosInput = document.getElementById('intentosFallidos') as HTMLElement;
    const botonLogin = document.getElementById('login') as HTMLButtonElement;


    const inputUser : string = userInput.value;
    const inputPassword : string = passwordInput.value;

    const realUser = 'leo';
    const realpassword = 'leo';

    if (inputUser === realUser && inputPassword === realpassword){
        accountOn.innerText = `Entraste a la cuenta usuario: ${realUser}`;
        accountOn.style.color = `green`;
        alert('Entraste a la cuenta, UwU');
    }

    else {
        intentos++;
        accountOn.style.color = `red`;
        accountOn.innerText = 'Usuario o contraseña incorrecta, intente denuevo.'
        intentosFallidosInput.textContent= `Intentos Fallidos: ${intentos}`;
    }
    
    console.log(`Entrada usuario: ${inputUser} Entrada password: ${inputPassword}`);

    if (intentos >= 5){

        alert('Numeros de intentos Maximos permitidos');

        botonLogin.style.backgroundColor = 'red';
        botonLogin.disabled;

    }


    }

    

    









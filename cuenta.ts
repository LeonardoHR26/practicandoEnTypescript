
const validadorCuenta = () => {

    const userInput = document.getElementById('user') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const accountOn = document.getElementById(`account`) as HTMLElement;

    const inputUser : string = userInput.value;
    const inputPassword : string = passwordInput.value;

    const realUser = 'leo';
    const realpassword = 'leo';

    if (inputUser === realUser && inputPassword === realpassword){
        accountOn.innerText = `Entraste a la cuenta usuario: ${realUser}` 
    }

    else {
        accountOn.innerText = 'Usuario o contraseña incorrecta, intente denuevo.'
    }
    


    //console.log(`${inputUser} ${inputPassword}`);

    



}

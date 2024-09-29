"use strict";
const suma = () => {
    const numeroEntrada1 = document.getElementById('firtsNumber');
    const numeroEntrada2 = document.getElementById('secondNumber');
    const resultado = document.getElementById('resultado');
    const primerNumero = parseInt(numeroEntrada1.value);
    const segundoNumero = parseInt(numeroEntrada2.value);
    const sumatoria = primerNumero + segundoNumero;
    resultado.innerText = `La suma es: ${sumatoria}`;
};
const resta = () => {
    const primerNumero = document.getElementById('firtsNumber');
    const segundoNumero = document.getElementById('secondNumber');
    const resultado = document.getElementById('resultado');
    const numeroPrimero = parseInt(primerNumero.value);
    const numeroSegundo = parseInt(segundoNumero.value);
    const restar = numeroPrimero - numeroSegundo;
    resultado.innerText = `La resta es: ${restar}`;
};
const listaNumeros = () => {
    const primerNumero = document.getElementById('firtsNumber');
    const segundoNumero = document.getElementById('secondNumber');
    const resultado = document.getElementById('resultado');
    const listaNumerosDado = [];
    listaNumerosDado.push(parseInt(primerNumero.value), parseInt(segundoNumero.value));
    resultado.innerText = `La lista de numeros es: ${listaNumerosDado}`;
};
const raiz = () => {
    const primerNumero = document.getElementById('firtsNumber');
    const resultado = document.getElementById('resultado');
    const numeroPrimero = parseInt(primerNumero.value);
    const raizCuadrada = Math.sqrt(numeroPrimero);
    resultado.innerText = `La Raiz cuadrada de ${numeroPrimero}, es: ${raizCuadrada}`;
};

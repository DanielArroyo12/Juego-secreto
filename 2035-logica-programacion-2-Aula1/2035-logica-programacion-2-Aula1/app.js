/*let  parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10";*/
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    //quertSelector nos manda el objeto como tal
    //let numeroDeUsuario = document.querySelector("input");
    //getElementeById nos manda unicamente el valor
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en:${intentos} ${(intentos == 1) ? 'vez':'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        //El usuario no acero 
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');            
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.lengh == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}

 function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
 }

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

 function reiniciarEvento() { 
    //Limpiar la caja
    limpiarCaja();
    //Indicar el menaseje de intervalo
    //Generar el numero aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
   //deshabilitar Boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
 }

condicionesIniciales();

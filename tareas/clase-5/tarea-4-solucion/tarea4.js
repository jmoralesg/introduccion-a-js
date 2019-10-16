// TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaDeNumeros = document.querySelectorAll('li');
let $promedio = document.querySelector('#promedio');
const $numMenor = document.querySelector('#numero-menor');
const $numMayor = document.querySelector('#numero-mayor');
const $numMasFrecuente = document.querySelector('#numero-mas-frecuente');

let listaDeNum = [];
let sumaTotal = 0;

function arregloDeLaLista() {
  for (let i = 0; i < $listaDeNumeros.length; i++) {
    let valorDeLi = Number($listaDeNumeros[i].textContent);
    listaDeNum.push(valorDeLi);
  }
}

function calculaPromedio() {
  for (let i = 0; i < listaDeNum.length; i++) {
    sumaTotal += listaDeNum[i];
  }
  $promedio.textContent = sumaTotal / listaDeNum.length;
}

function calculaNumeroMenor() {
  let menorNum = listaDeNum[1];
  for (let i = 0; i < listaDeNum.length; i++) {
    if (menorNum > listaDeNum[i]) {
      menorNum = listaDeNum[i];
    }
  }
  $numMenor.textContent = menorNum;
}

function calculaNumeroMayor() {
  let mayorNum = 0;
  for (let i = 0; i < listaDeNum.length; i++) {
    sumaTotal += listaDeNum[i];
    if (mayorNum < listaDeNum[i]) {
      mayorNum = listaDeNum[i];
    }
  }
  $numMayor.textContent = mayorNum;
}

function calculaNumeroMasFrecuente() {
  let maxFrecuencia = 1;
  let contador = 0;
  let numMasFrecuente;

  for (let i = 0; i < listaDeNum.length; i++) {
    for (let j = 0; j < listaDeNum.length; j++) {
      if (listaDeNum[i] === listaDeNum[j]) {
        contador += 1;
        if (contador > maxFrecuencia) {
          maxFrecuencia = contador;
          numMasFrecuente = listaDeNum[i];
        }
      }
    }
    contador = 0;
  }
  $numMasFrecuente.textContent = numMasFrecuente;
}

function totales() {
  arregloDeLaLista();
  calculaPromedio();
  calculaNumeroMenor();
  calculaNumeroMayor();
  calculaNumeroMasFrecuente();
}

totales();

// // TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// // Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// // Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

const $btnAgregar = document.querySelector('#agregar');
const $btnCalcular = document.querySelector('#calcular');
const $btnBorrar = document.querySelector('#borrar');
const $edades = document.querySelector('#edades');
const $mayorEdad = document.querySelector('#mayor-edad');
const $menorEdad = document.querySelector('#menor-edad');
const $promedio = document.querySelector('#promedio');
let edad = [];

$btnAgregar.onclick = function() {
  const $integrantes = Number(document.querySelector('#integrantes').value);
  creaEntradas($integrantes);
};

$btnCalcular.onclick = function() {
  const edadesEntradas = document.querySelectorAll('.entradas');
  let edad = [];
  for (let i = 0; i < edadesEntradas.length; i++) {
    edad.push(Number(edadesEntradas[i].value));
  }
  const promedio = calcularPromedio(edad);
  $promedio.textContent = promedio;
  const edadMayor = calcularMayor(edad);
  $mayorEdad.textContent = edadMayor;
  const edadMenor = calcularMenor(edad);
  $menorEdad.textContent = edadMenor;
};

$btnBorrar.onclick = function() {
  location.reload();
};

function creaEntradas(entradas) {
  let nuevaEntrada;
  while ($edades.hasChildNodes()) {
    $edades.innerHTML = '';
  }

  for (let i = 0; i < entradas; i++) {
    $edades.appendChild(document.createTextNode('Integrante ' + (i + 1)));
    nuevaEntrada = document.createElement('input');
    nuevaEntrada.setAttribute('type', 'number');
    nuevaEntrada.className = 'entradas';
    $edades.appendChild(nuevaEntrada);
  }
}

function calcularPromedio(edades) {
  let promedio = 0;
  for (let i = 0; i < edades.length; i++) {
    promedio += edades[i];
  }

  return Math.round(promedio / edades.length);
}

function calcularMayor(edades) {
  let edadMayor = edades[0];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i];
    }
  }
  return edadMayor;
}

function calcularMenor(edades) {
  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i];
    }
  }
  return edadMenor;
}

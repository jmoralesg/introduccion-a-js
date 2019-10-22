/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
const $agregar = document.querySelector('#agregar');
const $calcular = document.querySelector('#calcular');
const $fila = document.querySelectorAll('.fila-integrante');
const $form = document.querySelector('#formulario');

const $mayorSalario = document.querySelector('#mayor-salario');
const $menorSalario = document.querySelector('#menor-salario');
const $promedioAnual = document.querySelector('#promedio-anual');
const $promedioMensual = document.querySelector('#promedio-mensual');

$agregar.onclick = function() {
  let entradaSalario = document.querySelector('#entrada-salario');
  if (entradaSalario.value !== '') {
    creaEntrada(entradaSalario.value);
  } else {
    alert('Ingresa un valor');
  }
  entradaSalario.value = '';

  return false;
};

$form.onclick = function(e) {
  const nuevoIntegrante = document.querySelectorAll('.nuevo-integrante');
  if (e.target.className === 'quitar') {
    e.target.parentElement.remove();
  }
  return false;
};

$calcular.onclick = function() {
  const nuevosIntegrantes = document.querySelectorAll('.entradas');
  let arreglo = [];
  for (let i = 0; i < nuevosIntegrantes.length; i++) {
    arreglo.push(Number(nuevosIntegrantes[i].value));
  }

  const mayor = calcularMayor(arreglo);
  $mayorSalario.textContent = `$ ${mayor}`;
  const menor = calcularMenor(arreglo);
  $menorSalario.textContent = `$ ${menor}`;
  const promAnual = calcularPromedioAnual(arreglo);
  $promedioAnual.textContent = `$ ${promAnual}`;
  const promMensual = calcularPromedioMensual(arreglo);
  $promedioMensual.textContent = `$ ${promMensual}`;
};

function creaEntrada(entrada) {
  const nuevaEtiqueta = document.createElement('label');
  nuevaEtiqueta.setAttribute('for', 'entrada');
  nuevaEtiqueta.innerHTML = 'Integrante  ';

  const btnQuitar = document.createElement('button');
  btnQuitar.type = 'button';
  btnQuitar.className = 'quitar';
  btnQuitar.textContent = 'Quitar';

  const nuevoDiv = document.createElement('div');
  nuevoDiv.className = 'nuevo-integrante';

  const nuevoInput = document.createElement('input');
  nuevoInput.className = 'entradas';
  nuevoInput.name = 'entrada';
  nuevoInput.type = 'text';
  nuevoInput.value = entrada;

  $form.appendChild(nuevoDiv);
  nuevoDiv.appendChild(nuevaEtiqueta);
  nuevoDiv.appendChild(nuevoInput);
  nuevoDiv.appendChild(btnQuitar);

  return nuevoDiv;
}

function calcularMayor(salario) {
  let mayorSalario = [0];
  for (let i = 0; i < salario.length; i++) {
    if (salario[i] > mayorSalario) {
      mayorSalario = salario[i];
    }
  }
  return mayorSalario;
}

function calcularMenor(salario) {
  let menorSalario = salario[0];
  for (let i = 0; i < salario.length; i++) {
    if (salario[i] < menorSalario) {
      menorSalario = salario[i];
    }
  }
  return menorSalario;
}

function calcularPromedioAnual(salario) {
  let promedioAnual = 0;
  for (let i = 0; i < salario.length; i++) {
    promedioAnual += salario[i];
  }
  let total = promedioAnual / salario.length.toFixed(2);
  return total;
}

function calcularPromedioMensual(salario) {
  let promedioMensual = 0;
  for (let i = 0; i < salario.length; i++) {
    promedioMensual += salario[i];
  }
  let total = (promedioMensual / salario.length / 12).toFixed(2);
  return total;
}

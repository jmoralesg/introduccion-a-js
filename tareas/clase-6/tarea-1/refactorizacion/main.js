// // TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// // Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// // Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

document.querySelector('#agregar').onclick = function(event) {
  const $cantidadIntegrantes = document.querySelector('#integrantes');
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  borrarIntegrantesAnteriores();
  crearEntradas(cantidadIntegrantes);

  event.preventDefault();
};

document.querySelector('#calcular').onclick = function(event) {
  const edades = obtenerEdadesIntegrantes();
  mostrarEdad('mayor', calcularMayor(edades));
  mostrarEdad('menor', calcularMenor(edades));
  mostrarEdad('promedio', calcularPromedio(edades));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.entrada');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearEntradas(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearEntrada(i);
  }
}

function crearEntrada(indice) {
  const $div = document.createElement('div');
  $div.className = 'entrada';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#edades');
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
  document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
  document.querySelector('#resultado').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#resultado').className = '';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.entrada input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

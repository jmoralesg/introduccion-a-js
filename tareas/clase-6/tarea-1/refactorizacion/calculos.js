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

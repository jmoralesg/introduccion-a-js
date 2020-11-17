const $botonSubmit = document.querySelector("#submit");
const $botonReset = document.querySelector("#reset");

$botonSubmit.onclick = function () {
  const $primerNombre = document.querySelector("#primerNombre").value;
  const $segundoNombre = document.querySelector("#segundoNombre").value;
  const $apellidos = document.querySelector("#apellido").value;
  const $edad = document.querySelector("#edad").value;

  saludoUsuario($primerNombre);
  mostrarInfoUsuario($primerNombre, $segundoNombre, $apellidos, $edad);

  return false;
};

$botonReset.onclick = function () {
  document.querySelector("#saludo").textContent = "Bienvenida!!";
};

function saludoUsuario(primerNombre) {
  const $saludo = document.querySelector("#saludo");
  return ($saludo.textContent = `Bienvenida ${primerNombre}!!`);
}

function mostrarInfoUsuario(primerNombre, segundoNombre, apellidos, edad) {
  const $info = document.querySelector("#info");
  return ($info.value = `${primerNombre} ${segundoNombre} ${apellidos}\n${edad} `);
}

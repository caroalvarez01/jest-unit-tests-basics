//Ejercicio práctico de pruebas unitarias con Jest

/* Caro, necesitamos que crees pruebas unitarias para la función validarNombreUsuario.
Esta función valida que el nombre de usuario cumpla con:
1)Ser un string
2)Tener al menos 3 caracteres
3)No contener espacios
4)Solo letras y números*/

function validarNombreUsuario(nombre) {
  if (typeof nombre !== 'string') {
    return false;
  }
  if (nombre.length < 3) {
    return false;
  }
  if (/\s/.test(nombre)) {
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(nombre)) {
    return false;
  }
  return true;
}

module.exports = validarNombreUsuario;
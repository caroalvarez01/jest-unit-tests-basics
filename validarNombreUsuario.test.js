//Archivo con las pruebas unitarias para validarNombreUsuario.js

const validarNombreUsuario = require('./validarNombreUsuario');

describe('validarNombreUsuario', () => {
  test('debería retornar true para un nombre de usuario válido', () => {
    expect(validarNombreUsuario('usuario123')).toBe(true);
  });

  test('debería retornar false si el nombre no es un string', () => {
    expect(validarNombreUsuario(123)).toBe(false);
    expect(validarNombreUsuario(null)).toBe(false);
    expect(validarNombreUsuario(undefined)).toBe(false);
  });

  test('debería retornar false si el nombre tiene menos de 3 caracteres', () => {
    expect(validarNombreUsuario('ab')).toBe(false);
    expect(validarNombreUsuario('a')).toBe(false);
  });

  test('debería retornar false si el nombre contiene espacios', () => {
    expect(validarNombreUsuario('usuario con espacio')).toBe(false);
    expect(validarNombreUsuario('usuario ')).toBe(false);
  });

  test('debería retornar false si el nombre contiene caracteres no alfanuméricos', () => {
    expect(validarNombreUsuario('usuario!')).toBe(false);
    expect(validarNombreUsuario('usuario@123')).toBe(false);
    expect(validarNombreUsuario('usuario#1')).toBe(false);
  });
});

//Describe me permite agrupar pruebas relacionadas.
# ✅ Jest Unit Tests: Validación de Nombre de Usuario

Este repositorio contiene pruebas unitarias básicas desarrolladas con [Jest](https://jestjs.io/) para validar la función `validarNombreUsuario`. Es un proyecto de práctica orientado al aprendizaje de testing en JavaScript desde una perspectiva profesional como QA.

---

## 🔍 ¿Qué hace la función?

La función `validarNombreUsuario(nombre)` evalúa si un nombre de usuario es válido bajo estas reglas:

- Debe ser un **string**
- Tener al menos **3 caracteres**
- No contener **espacios**
- Solo aceptar **caracteres alfanuméricos**

---

## 🧪 ¿Qué pruebas incluye?

El archivo `validarNombreUsuario.test.js` contiene **5 pruebas unitarias**:

1. ✅ Retorna `true` para un nombre válido (`usuario123`)
2. ❌ Retorna `false` si no es un string
3. ❌ Retorna `false` si tiene menos de 3 caracteres
4. ❌ Retorna `false` si contiene espacios
5. ❌ Retorna `false` si contiene caracteres no alfanuméricos

---


## 📁 Estructura del repositorio

```
├── validarNombreUsuario.js        # Función a testear
├── validarNombreUsuario.test.js   # Pruebas unitarias con Jest
├── .gitignore                     # Archivos ignorados en Git
└── README.md                      # Este documento
```

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Jest

---

## 📦 Instalación y ejecución

```bash
npm install
npm test
```
---

## 🧠 Notas de aprendizaje
Este repositorio fue creado como parte del proceso de formación en pruebas unitarias para proyectos reales.  
Se utiliza `.gitignore` para evitar subir archivos innecesarios como `node_modules`, y se sigue una estructura profesional de trabajo con Git y GitHub.

---

## 👩‍💻 Autor

**Carolina Álvarez Robayo**  
Estudiante de Ingeniería de Software y QA 💻  
[GitHub: @caroalvarez01](https://github.com/caroalvarez01)

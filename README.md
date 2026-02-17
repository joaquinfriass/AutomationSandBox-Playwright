🧪 Automatización E2E — Automation Sandbox FRT (Playwright + TypeScript)

Suite de pruebas end-to-end desarrollada con Playwright y TypeScript, aplicando el patrón Page Object Model (POM) para validar distintos componentes de interfaz de usuario en el sandbox público de Free Range Testers.

Aplicación bajo prueba:
👉 Free Range Testers Sandbox

✅ Funcionalidades validadas
🌐 Navegación y carga de página

Acceso a la URL principal

Verificación de carga correcta mediante elementos visibles (heading principal)

🔗 Enlaces externos y nuevas pestañas

Validación de apertura de link externo

Manejo de ventanas emergentes (popup)

Verificación de URL y título de la nueva pestaña

🆔 Elementos dinámicos

Interacción con botón de ID dinámico

Validación de aparición de contenido oculto con delay

⌨️ Campos de texto

Ingreso de texto en input

Verificación del valor ingresado

☑️ Checkboxes

Selección individual de múltiples opciones

Validación de estado seleccionado (checked)

🔘 Radio buttons

Verificación de comportamiento mutuamente excluyente

Validación de selección y deselección automática

⬇️ Dropdowns

Dropdown de deportes (select nativo):

Selección de opciones específicas

Validación del valor seleccionado

Verificación iterativa de opciones esperadas

Dropdown de días (custom):

Interacción con menú desplegable dinámico

Validación de navegación mediante cambios en URL

🪟 Popup modal

Apertura del popup

Validación de contenido visible

Cierre del modal y verificación de desaparición

📊 Tablas

Tabla estática:

Extracción de datos por columna

Validación contra valores esperados

Captura de pantalla adjunta al reporte

Tabla dinámica:

Obtención de valores iniciales

Recarga de página

Verificación de cambios en los datos (no determinísticos)

🏗️ Buenas prácticas implementadas

✔️ Page Object Model (POM)

✔️ Selectores accesibles (getByRole, getByLabel)

✔️ Uso de test.step() para trazabilidad

✔️ Manejo de popups y múltiples páginas

✔️ Validaciones con expect

✔️ Uso de expect.soft en escenarios no bloqueantes

✔️ Captura de evidencia (screenshots)

✔️ Manejo de datos dinámicos

✔️ Iteración sobre colecciones de elementos

🧰 Tecnologías utilizadas

Playwright

TypeScript

Node.js

Testing E2E Web

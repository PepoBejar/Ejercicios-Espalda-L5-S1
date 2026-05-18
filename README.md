# Rutina L5-S1 · Rehabilitación de Hernia Discal

Rutina de rehabilitación personalizada para hernia discal extruida L5-S1 con radiculopatía S1 en fase aguda.  
Revisada por especialista en medicina física y rehabilitación.

## 🌐 Ver la rutina en línea

Una vez publicada en GitHub Pages, estará disponible en:  
`https://TU_USUARIO.github.io/rutina-l5s1`

---

## 📁 Estructura del proyecto

```
rutina-l5s1/
├── index.html          ← Página principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Lógica de la app (timers, progreso, acordeón)
├── img/
│   └── (vacío)         ← Para futuras imágenes de ejercicios
└── README.md           ← Este archivo
```

---

## 🚀 Cómo publicar en GitHub Pages

### Paso 1 · Crear el repositorio

1. Ve a [github.com](https://github.com) e inicia sesión
2. Pulsa **"New repository"** (botón verde)
3. Nombre del repositorio: `rutina-l5s1`
4. Marca **"Public"**
5. Pulsa **"Create repository"**

### Paso 2 · Subir los archivos

**Opción A · Desde el navegador (más fácil):**

1. En el repositorio recién creado, pulsa **"uploading an existing file"**
2. Arrastra toda la carpeta `rutina-l5s1` o sube los archivos uno a uno respetando la estructura de carpetas
3. Pulsa **"Commit changes"**

**Opción B · Con Git (si tienes Git instalado):**

```bash
git init
git add .
git commit -m "Primera versión de la rutina L5-S1"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/rutina-l5s1.git
git push -u origin main
```

### Paso 3 · Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (pestaña de arriba)
2. En el menú lateral, busca **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", selecciona **"main"** y carpeta **"/ (root)"**
5. Pulsa **"Save"**
6. Espera 1-2 minutos y refresca la página
7. Aparecerá el enlace: `https://TU_USUARIO.github.io/rutina-l5s1`

### Paso 4 · Compartir

- Comparte la URL con quien quieras
- En iPhone: abre la URL en Safari → ⬆ Compartir → "Añadir a pantalla de inicio"

---

## 📱 Características

- ✅ Responsive — funciona en móvil y escritorio
- ✅ Sin dependencias externas (solo Google Fonts)
- ✅ Temporizadores integrados para cada ejercicio
- ✅ Barra de progreso de sesión
- ✅ Botón "volver arriba"
- ✅ Compatible con iPhone (añadir a pantalla de inicio)
- ✅ Modo iOS web app (pantalla completa)

---

## ⚕️ Aviso médico

Esta rutina ha sido diseñada para una lesión específica y revisada por un especialista.  
**No sustituye la valoración de tu fisioterapeuta o médico rehabilitador.**

---

## 🔄 Actualizar la rutina

Si tu especialista indica cambios:

1. Edita `index.html` con los nuevos ejercicios
2. Haz commit y push al repositorio
3. GitHub Pages se actualiza automáticamente en 1-2 minutos

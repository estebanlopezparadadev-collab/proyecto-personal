# Página personal de Julian — Arreglo tu página web

Landing de una sola página para ofrecer arreglos y mantenimiento web a negocios pequeños en Bogotá. Hecha en React + Vite + Tailwind CSS.

## Stack

- **React 19** + **Vite** (sin configuración extra, recarga instantánea en desarrollo)
- **Tailwind CSS 4** (vía `@tailwindcss/vite`, sin archivo `tailwind.config.js` — los tokens de diseño viven en `src/index.css`)
- Sin backend, sin base de datos, sin analytics: el único punto de contacto es un botón de WhatsApp

## Estructura del proyecto

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Un componente por sección de la página
│   │   ├── icons/         # Iconos SVG propios (un solo trazo, un solo peso)
│   │   ├── Tag.jsx         # La "etiqueta colgada" reutilizable en toda la página
│   │   ├── Hero.jsx
│   │   ├── Problems.jsx
│   │   ├── Pricing.jsx
│   │   ├── Process.jsx
│   │   ├── About.jsx
│   │   ├── Closing.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── whatsapp.js    # ⚠️ el número de WhatsApp se edita SOLO aquí
│   ├── data/               # Contenido (problemas, precios, pasos) separado del markup
│   ├── hooks/
│   │   └── useReveal.js   # animación de aparición al hacer scroll
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Tailwind + los tokens de color/tipografía del sistema
├── index.html
└── .github/workflows/deploy.yml   # publica a GitHub Pages automáticamente
```

## Correr el proyecto en local

Necesitas [Node.js](https://nodejs.org/) 18 o más nuevo instalado.

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`). Los cambios en el código se reflejan al instante.

Otros comandos:

```bash
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve esa versión de producción en local, para probarla
```

## Antes de publicar: lo único que tienes que cambiar

Abre `src/config/whatsapp.js` y reemplaza el número por tu número real de WhatsApp (código de país + número, sin espacios ni `+`). Es el único lugar del proyecto donde aparece.

`public/og-image.jpg` ya existe (generada con el mismo sistema de diseño del sitio: la tarjeta del hero, la mascota y la mancha de fondo) — es la que se ve cuando alguien comparte el link por WhatsApp o redes. Si más adelante quieres reemplazarla por otra, solo sobrescribe ese archivo (1200×630px).

## Flujo de ramas en Git

- **`main`**: lo que está publicado. Cada push a `main` dispara el despliegue automático a GitHub Pages.
- **`develop`**: donde se integran los cambios en curso antes de pasarlos a `main`.

Flujo normal de trabajo:

```bash
git checkout develop
git checkout -b mi-cambio        # una rama por cambio, opcional para cambios chicos
# ... edita, prueba con npm run dev ...
git add .
git commit -m "descripción del cambio"
git checkout develop
git merge mi-cambio
# cuando develop esté listo para publicarse:
git checkout main
git merge develop
git push origin main develop
```

## Publicar gratis en GitHub Pages

Este proyecto ya incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica el sitio automáticamente cada vez que hay un push a `main`. Pasos, una sola vez:

1. Crea un repositorio nuevo en GitHub (puede ser público o privado).
2. Conéctalo y sube el proyecto:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   git push -u origin develop
   ```
3. En GitHub, ve a **Settings → Pages** del repositorio y en "Build and deployment" elige **Source: GitHub Actions**.
4. Espera a que termine la pestaña **Actions** (tarda 1-2 minutos) y GitHub te dará la URL pública, algo como `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

Este proyecto ya está publicado en `https://estebanlopezparadadev-collab.github.io/proyecto-personal/`, y `vite.config.js` ya tiene `base: '/proyecto-personal/'` configurado para que los estilos y scripts carguen bien en esa subcarpeta.

Si en algún momento cambias el nombre del repositorio, actualiza esa misma línea en `vite.config.js` (y el `og:image` en `index.html`) para que coincida con el nuevo nombre, y vuelve a hacer push a `main`.

## Estado

- [x] Número de WhatsApp real configurado en `src/config/whatsapp.js`
- [x] `public/og-image.jpg` generada para la vista previa al compartir el link
- [x] Repositorio en GitHub conectado
- [x] GitHub Pages activo con fuente "GitHub Actions"
- [x] Publicado en `https://estebanlopezparadadev-collab.github.io/proyecto-personal/`

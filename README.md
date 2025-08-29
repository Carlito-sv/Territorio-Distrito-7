# 🗺️ Mapa Maestro PRO v5.4 · Morena D07 Tonalá

Sistema de gestión electoral y territorial para la campaña **Morena – Distrito 07 Tonalá**.  
Funciona como **PWA (Progressive Web App)** y se conecta en vivo con Google Sheets para registrar, visualizar y administrar simpatizantes, votantes y comités.

---

## 🚀 Funcionalidades principales
- 📍 **Mapa interactivo (Leaflet)** con georreferencia de simpatizantes.
- 📝 **Registro rápido** de simpatizantes, votantes y líderes.
- 🔎 **Filtros dinámicos** (estatus, sección, colonia, nombre).
- 📊 **Dashboard simplificado**: conteo por estatus con semáforo (🟢 activo, 🟡 contactado, 🔴 inactivo).
- 🗂️ **Base en Google Sheets** (lectura y escritura en vivo).
- 📲 **Instalable como App** en Android/iPhone (PWA).
- ⚡ **Funciona offline** y sincroniza al reconectarse.
- 🖨️ Exportación de listas y fichas.

---

## 📂 Archivos del proyecto
- `index.html` → App principal.
- `manifest.json` → Configuración de PWA.
- `sw.js` → Service Worker (offline).
- `logo_morena_192.png` → Logo institucional Morena.

---

## 🛠️ Instalación y despliegue en GitHub Pages
1. Crea un repositorio en GitHub (ejemplo: `mapa-maestro-morena`).
2. Sube los archivos del proyecto (`index.html`, `manifest.json`, `sw.js`, `logo_morena_192.png`).
3. En el repositorio → **Settings → Pages**.
4. En **Branch**, selecciona:
   - `main`
   - carpeta `/ (root)`
5. Guarda los cambios.
6. En unos minutos estará disponible en:
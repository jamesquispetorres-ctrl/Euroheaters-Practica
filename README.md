# Euroheaters México — Sección de producto: Controladores de temperatura modular

Prueba práctica de diseño y desarrollo web: sección de presentación de productos industriales de **Euroheaters México**, representante exclusivo de la marca inglesa Euroheaters (controladores de temperatura modulares para moldes de colada caliente en inyección de plástico).

## Enlaces

- Repositorio: https://github.com/jamesquispetorres-ctrl/Euroheaters-Practica

---

## Tecnologías utilizadas

| Tecnología | Versión / Fuente |
|---|---|
| HTML5 | Semántico |
| CSS3 | Archivo propio (`css/styles.css`) |
| JavaScript | Vanilla, sin librerías (`js/main.js`) |
| Bootstrap | 5.3.3 vía CDN |
| Bootstrap Icons | 1.11.3 vía CDN |
| Animate.css | 4.1.1 vía CDN (solo para la animación de entrada del hero) |
| Google Fonts | Inter (400, 500, 600, 700) |

---

## Estructura del proyecto

```
Euroheaters-Practica/
├── index.html                       # Página principal (única)
├── README.md                        # Este archivo
├── css/
│   └── styles.css                   # Estilos propios, variables CSS y responsive
├── js/
│   └── main.js                      # Zoom de imágenes, scroll suave y menú móvil
└── img/
    ├── logo-euroheaters.png
    ├── controlador-principal.png    # Imagen del hero
    ├── touch-screen-system.png      # Producto 1
    └── touch-screen-modulo-2-zonas.png  # Producto 2
```

---

## Cómo ejecutarlo

No requiere instalación, compilación ni servidor.

```bash
git clone https://github.com/jamesquispetorres-ctrl/Euroheaters-Practica.git
```

Después abre `index.html` en cualquier navegador moderno. También puedes usar la extensión Live Server de VS Code.

---

## Contenido de la página

1. **Header** con logo, navegación y botón "Solicitar cotización".
2. **Breadcrumb**: Inicio > Productos > Controladores de temperatura modular.
3. **Introducción** de la categoría, con las tres gamas (Serie 5, Serie Mundial y Serie 8) y los botones "Solicitar información" y "Ver productos".
4. **Productos**:
   - Touch Screen System (gabinete de 2 a 256 zonas).
   - Touch Screen System · Módulo de 2 zonas.

   Cada uno incluye sus datos clave con íconos, beneficios y los botones "Solicitar cotización" y "Descargar ficha técnica".
5. **Botón flotante** de llamada, fijo en la esquina inferior derecha.

---

## Funcionalidades

- **Diseño responsive** de 320 px a 1440 px o más, sin scroll horizontal.
- **Zoom en las imágenes de producto**:
  - En escritorio, el zoom sigue la posición del cursor.
  - En pantallas táctiles, se activa y se desactiva con un toque.
- **Hero animado**: entrada suave y movimiento flotante continuo, con pausa al pasar el cursor. 
- **Micro-interacciones**: flecha animada en los botones principales, resaltado inferior en rojo en las celdas de especificacione.
- **Scroll suave** al pulsar "Ver productos".
- **Menú hamburguesa** en móvil, con cierre automático al elegir un enlace y un respaldo en JavaScript por si Bootstrap no carga.
- **Botón flotante de contacto** con enlace `tel:`.

---

## Decisiones de diseño

- **Estilo sobrio e industrial**: fondo blanco, superficies en gris claro (`#F3F4F4`), tipografía Inter y rojo de marca (`#B91C2C`) usado solo como acento en acciones, íconos y detalles.
- **Alcance acotado**: una introducción de la categoría y dos productos representativos, para respetar el alcance de una sección demostrativa.
- **Acción principal clara**: "Solicitar cotización" es el botón más visible; "Descargar ficha técnica" es la acción secundaria.
- **Contenido corregido y resumido**: los textos del sitio original tienen traducciones automáticas, así que se reescribieron y se organizaron en datos clave con íconos para una lectura rápida.
- **Ajustes respecto al prototipo en Figma**: durante el desarrollo se dejó la imagen del hero sin contenedor, con movimiento flotante, y se pasó a tarjetas blancas con sombra suave en los productos, para dar más presencia visual a los equipos.
- **Columnas niveladas** en escritorio con CSS Grid, para que imagen y texto tengan la misma altura sin espacios vacíos.
- **Orden de lectura en móvil**: título, imagen y después descripción y especificaciones.

---

## Comportamiento responsive

| Ancho | Dispositivo | Comportamiento |
|---|---|---|
| ≤ 375 px | Móviles compactos | Breadcrumb recortado con puntos suspensivos y título más pequeño |
| < 768 px | Móvil | Una columna (título → imagen → descripción), botones a todo el ancho y zoom por toque |
| 768 – 991 px | Tablet | Dos columnas y navegación colapsable |
| ≥ 992 px | Escritorio | Dos columnas con imágenes alternadas (izquierda y derecha) y navbar horizontal |

---

## Tiempo aproximado dedicado

4 horas con 40 minutos

---

## Autor

James Brayan Quispe Torres
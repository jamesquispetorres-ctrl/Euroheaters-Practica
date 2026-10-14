# Euroheaters México — Sección de producto: Controladores de temperatura modular

Prueba práctica de diseño y desarrollo web: sección de presentación de productos industriales de **Euroheaters México**, representante exclusivo de la marca inglesa Euroheaters (controladores de temperatura modulares para moldes de colada caliente en inyección de plástico).

---

## Vista previa

| Desktop (1440 px) | Móvil (390 px) |
|---|---|
| ![Desktop](img/capturas/desktop.png) | ![Móvil](img/capturas/mobile.png) |

> Las capturas de pantalla se colocan en `/img/capturas/` (no incluidas en el repositorio).

---

## Tecnologías utilizadas

| Tecnología | Versión / Fuente |
|---|---|
| HTML5 | Semántico nativo |
| CSS3 | Archivo propio (`/css/styles.css`) |
| JavaScript | Vanilla puro (`/js/main.js`) |
| Bootstrap | 5.3.3 vía CDN |
| Bootstrap Icons | 1.11.3 vía CDN |
| Animate.css | 4.1.1 vía CDN (librería de animaciones CSS) |
| Google Fonts | Inter (400, 500, 600, 700) |

---

## Estructura del proyecto

```
Euroheaters- Practica/
├── index.html                  # Página principal (única)
├── README.md                   # Este archivo
├── css/
│   └── styles.css              # Estilos personalizados, diseño responsive y tokens CSS
├── js/
│   └── main.js                 # Lógica interactiva: zoom táctil/cursor, scroll suave, menú móvil y fallbacks
└── img/
    ├── logo-euroheaters.png         # Logo de la marca
    ├── controlador-principal.png    # Imagen hero
    ├── touch-screen-system.png      # Imagen producto 1 (Touch Screen System)
    ├── touch-screen-modulo-2-zonas.png  # Imagen producto 2 (Módulo de 2 zonas)

```

---

## Cómo ejecutarlo

No requiere instalación de paquetes, compilación ni servidor web dedicado.

1. Clona o descarga el repositorio.
2. Abre `index.html` directamente en cualquier navegador moderno.


## Funcionalidades y características interactivas

- **Diseño responsive integral** — Se adapta de 320 px a 1440 px+ sin desbordamiento ni scroll horizontal no deseado.
- **Inspección de imagen con zoom interactivo (desktop y móvil)**:
  - En desktop: zoom dinámico que sigue la posición del puntero (`transform-origin` dinámico con cursor tracking).
  - En móvil/táctil: zoom mediante toque (`tap`) para alternar la visualización de detalles de los controladores.
- **Micro-animaciones industriales**:
  - **Hero dinámico con Animate.css y movimiento continuo** — Imagen principal del hero con entrada suave (`fadeIn`) e integración de animación de levitación/movimiento flotante continuo (`heroFloat`) sin marcos, bordes ni sombras de contenedor, pausándose sutilmente al pasar el cursor para inspección técnica.
  - Botones principales de cotización e información con ícono de flecha horizontal (`bi-arrow-right`) y desplazamiento sutil en hover.
  - Celdas de especificaciones con resaltado rojo en la parte inferior (`inset 0 -3px 0 0 var(--color-accent)`) y elevación del ícono técnico, conservando fondo blanco limpio sin sombras rojas ni tintes pesados.
  - Tarjetas de gama con micro-zoom y sombra gris sutil.
  - Etiquetas descriptivas sin contenedores de caja, con tipografía en negro nítido e ícono interactivo con animación suave.
- **Jerarquía adaptada para móvil**:
  - En pantallas pequeñas, el flujo de lectura sitúa el **Título antes de la imagen** y la **Descripción y especificaciones debajo de la imagen** en todas las secciones (Hero y Productos).
- **Breadcrumb adaptativo**:
  - Muestra la ruta completa en desktop y dispositivos móviles estándar; aplica puntos suspensivos (`text-overflow: ellipsis`) únicamente en pantallas muy compactas ($\le 375 \times 667$ px).
- **Scroll suave nativo** — El botón "Ver productos" realiza un desplazamiento asistido (`scrollIntoView` smooth) hacia la sección de controladores.
- **Navegación móvil robusta** — Menú hamburguesa colapsable con cierre automático al interactuar con enlaces, más fallback en JavaScript puro por si el script CDN de Bootstrap no estuviese disponible.
- **Botón flotante de contacto** — Acceso directo circular fijo en la esquina inferior derecha con enlace telefónico directo (`tel:`).

---

## Decisiones de diseño y arquitectura CSS

- **Estilo sobrio, limpio e industrial** — Fondo blanco, superficies gris claro (`#F3F4F4`), acentos industriales y tipografía moderna Inter para una apariencia técnica de alta gama.
- **Hero visualmente despejado** — La imagen del controlador principal se presenta limpia, transparente y sin bordes ni sombras cuadradas, permitiendo que la máquina destaque en el espacio y cobre vida mediante movimiento flotante continuo.
- **Rojo de acento controlado** — El color de marca `#B91C2C` se reserva estrictamente para puntos focales (botones de acción, línea de sección activa, íconos y líneas de resaltado), evitando saturar la interfaz.
- **Contenedores de productos con sombra gris** — En la sección inferior de productos se utilizan contenedores con fondo blanco limpio (`#ffffff`) y sombras grises suaves (`0 4px 16px rgba(0, 0, 0, 0.06)`), integrando las imágenes de detalle de manera homogénea.
- **Columnas niveladas en Desktop con CSS Grid** — En desktop se emplean plantillas de cuadrícula con `grid-template-rows: max-content 1fr;` y `align-items: stretch;`, garantizando que la columna de imagen y la columna de texto mantengan la misma altura de inicio a fin sin huecos vacíos.
- **Espaciados equilibrados** — Reducción de márgenes y paddings en móvil para una experiencia compacta y fácil de escanear, junto a proporciones balanceadas en pantallas de escritorio.

---

## Comportamiento Responsive

| Punto de quiebre | Dispositivo objetivo | Comportamiento |
|---|---|---|
| `≤ 375 px` | Móviles muy compactos (ej. iPhone SE 375×667) | Recorte inteligente con puntos suspensivos en breadcrumb, tipografía de encabezado compactada |
| `< 768 px` | Móvil estándar y grande | Columna única optimizada (Título $\rightarrow$ Imagen $\rightarrow$ Descripción y detalles); botones al ancho completo; zoom por tap |
| `768 px – 991 px` | Tablet | Layout de 2 columnas niveladas; navegación colapsable optimizada |
| `≥ 992 px` | Desktop | Layout completo en 2 columnas balanceadas (alternando imágenes a izquierda y derecha), navbar horizontal desplegado e imágenes en formato ampliado |

---

## Tiempo aproximado dedicado

5 horas

---

## Autor

James Brayan Quispe Torres

# Consultora Mentores - Excelencia Académica

Portal académico profesional de Consultora Mentores, una consultora de excelencia académica con más de 4 años transformando el futuro digital y forjando líderes en tecnología. Contiene soluciones completas de los problemas de informática desarrolladas con metodología innovadora.

## 🚀 Características

- **Diseño Profesional**: Interfaz moderna y responsiva
- **Navegación Intuitiva**: Fácil acceso a las diferentes materias
- **Contenido Estructurado**: Problemas organizados con soluciones detalladas
- **Optimización Mobile**: Totalmente adaptado para dispositivos móviles
- **Animaciones Dinámicas**: Experiencia de usuario mejorada

## 📚 Materias Incluidas

### COM 99 - CMD (MS-DOS)
- 26+ problemas resueltos de MS-DOS
- Comandos básicos y avanzados
- Manipulación de archivos y directorios
- Ejemplos prácticos con explicaciones

### COM 99 - LINUX  
- 26+ problemas resueltos de Linux
- Comandos del sistema operativo
- Permisos y gestión de archivos
- Shell scripting básico

### INF 99 - INTRODUCCIÓN
- *Próximamente disponible*
- Fundamentos de informática
- Algoritmos básicos
- Estructuras de datos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y animaciones
- **JavaScript**: Interactividad y animaciones dinámicas
- **Font Awesome**: Iconografía profesional
- **Responsive Design**: Adaptable a todos los dispositivos

## 🎨 Características de Diseño

- **Gradientes Modernos**: Colores atractivos y profesionales
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tipografía Clara**: Fácil lectura y comprensión
- **Elementos Interactivos**: Botones y tarjetas con efectos hover
- **Barra de Progreso**: Indicador visual de lectura

## 👨‍🏫 Autor

**Ing. Jhoel Mauricio Legua Villegas**  
Docente - Consultora Mentores

## 📱 Responsive Design

El portal está completamente optimizado para:
- **Desktop**: Experiencia completa con todas las características
- **Tablet**: Adaptación fluida del contenido
- **Mobile**: Diseño touch-friendly y navegación optimizada

## 🚀 Despliegue

El proyecto está configurado para desplegar fácilmente en plataformas como:
- Render
- Netlify
- Vercel
2. Configurar como sitio estático
3. El archivo `package.json` incluye las configuraciones necesarias
### 🚀 Despliegue en Render (Static Site)
1. Crear nuevo servicio Static Site y conectar el repositorio.
2. Establecer Build Command: `npm install` (solo para instalar `serve` si Render lo requiere en previsualizaciones; para sitio estático puro puedes dejarlo vacío).
3. Establecer Publish Directory: `public`.
4. (Opcional) Página 404: renombra `404.html` dentro de `public/` para manejo de rutas inexistentes.
5. Deploy. No se necesita paso de build adicional.

Para probar localmente:

```bash
npm install
npm run dev   # Servir en http://localhost:3000
```
```
/
├── index.html          # Página principal
├── comCMD.html         # Problemas de MS-DOS
├── comLINUX.html       # Problemas de Linux
├── style.css           # Estilos globales
├── package.json        # Configuración del proyecto
├── autor.jpg           # Foto del autor
├── mentores.png        # Logo de la academia
└── README.md           # Documentación
```

## ⚡ Instalación Local

## 📁 Estructura del Proyecto (Reorganizada)

```
/
├── public/                 # Raíz de archivos estáticos servidos
│   ├── index.html          # Página principal
│   ├── comCMD.html         # Problemas de MS-DOS
│   ├── comLINUX.html       # Problemas de Linux
│   └── assets/
│       ├── css/
│       │   └── style.css   # Estilos globales
│       ├── js/
│       │   └── main.js     # Lógica JS consolidada
│       └── images/         # Imágenes (mentores.png, autor.jpg, etc.)
├── package.json            # Configuración del proyecto
├── 404.html                # Página de error (mover a public si se requiere)
├── README.md               # Documentación
└── .gitignore
```

Sugerencia: mover `404.html` a `public/` para soporte de rutas 404 en plataformas que lo utilicen.

## 🔧 Personalización

El proyecto utiliza variables CSS para fácil personalización:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --success-color: #27ae60;
    /* ... más variables */
}
```

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

---

Desarrollado con ❤️ para la educación en informática.
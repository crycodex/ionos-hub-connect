# IonosHub Connect

<div align="center">
  <img src="public/imgs/icon/logo remove.png" alt="IonosHub Logo" width="200" height="auto">
  
  <h3>De Datos a Resultados</h3>
  
  <p>Transformamos tu negocio con Business Intelligence, automatización de WhatsApp con IA y estrategias digitales que generan ROI medible.</p>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan.svg)](https://tailwindcss.com/)
  [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-black.svg)](https://ui.shadcn.com/)
</div>

## 🚀 Acerca del Proyecto

IonosHub Connect es una plataforma web moderna que presenta los servicios de **IonosHub**, una empresa especializada en transformación digital y Business Intelligence. El sitio web está diseñado para mostrar las capacidades de la empresa en automatización con IA, análisis de datos y estrategias digitales.

### 🎯 Características Principales

- **Landing Page Profesional**: Diseño moderno y responsivo que presenta los servicios de IonosHub
- **Secciones Informativas**:
  - Hero con llamada a la acción
  - Servicios especializados (Call Center IA, Business Intelligence, Marketing Digital, etc.)
  - Propuesta de valor diferenciada
  - Arquitectura de soluciones
  - Formulario de contacto integrado
- **Experiencia de Usuario Optimizada**:
  - Diseño responsivo para todos los dispositivos
  - Animaciones suaves y transiciones
  - Tema claro/oscuro
  - Navegación intuitiva
- **Integración con WhatsApp**: Botón de contacto directo vía WhatsApp
- **Performance Optimizada**: Carga rápida y experiencia fluida

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 5.4.19** - Herramienta de construcción y desarrollo
- **React Router DOM 6.30.1** - Enrutamiento del lado del cliente

### Estilos y UI
- **Tailwind CSS 3.4.17** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz reutilizables
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconografía moderna
- **Tailwind CSS Animate** - Animaciones personalizadas

### Estado y Datos
- **TanStack Query 5.83.0** - Gestión de estado del servidor
- **React Hook Form 7.61.1** - Manejo de formularios
- **Zod 3.25.76** - Validación de esquemas

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm, yarn o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ionos-hub-connect
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   bun install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   bun dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:8080
   ```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run build:dev    # Construye en modo desarrollo

# Calidad de código
npm run lint         # Ejecuta ESLint

# Vista previa
npm run preview      # Vista previa de la construcción de producción
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes base de shadcn/ui
│   ├── Hero.tsx         # Sección principal
│   ├── Services.tsx     # Servicios ofrecidos
│   ├── ValueProposition.tsx # Propuesta de valor
│   ├── Architecture.tsx # Arquitectura de soluciones
│   ├── CTA.tsx          # Llamada a la acción
│   ├── Navbar.tsx       # Barra de navegación
│   └── Footer.tsx       # Pie de página
├── pages/               # Páginas de la aplicación
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
├── hooks/               # Hooks personalizados
├── lib/                 # Utilidades y configuraciones
├── assets/              # Recursos estáticos
└── main.tsx            # Punto de entrada
```

## 🎨 Personalización

### Colores del Tema
El proyecto utiliza un sistema de colores personalizado definido en `tailwind.config.ts`:

- **Primary**: Color principal de la marca
- **Blue Light**: Color secundario
- **Accent**: Color de acento
- **Blue Vivid**: Color de énfasis

### Componentes
Los componentes están construidos con shadcn/ui y pueden ser personalizados fácilmente modificando las clases de Tailwind CSS.

### Animaciones
El proyecto incluye animaciones personalizadas definidas en la configuración de Tailwind:
- `fade-in`: Aparición gradual
- `fade-in-up`: Aparición desde abajo
- `scale-in`: Escalado suave
- `slide-in`: Deslizamiento lateral
- `glow`: Efecto de brillo

## 🚀 Despliegue

### Despliegue en Producción

1. **Construir la aplicación**
   ```bash
   npm run build
   ```

2. **Los archivos estáticos se generan en la carpeta `dist/`**

3. **Desplegar en tu plataforma preferida**:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Cualquier servidor web estático

### Variables de Entorno
El proyecto no requiere variables de entorno específicas para el funcionamiento básico.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**IonosHub**
- WhatsApp: [+593 99 224 9152](https://wa.me/593992249152)
- Email: [info@ionoshub.net](mailto:info@ionoshub.net)
- Website: [www.ionoshub.com](https://www.ionoshub.com)

---

<div align="center">
  <p>Desarrollado con ❤️ por el equipo de IonosHub</p>
  <p>Transformando datos en resultados desde 2024</p>
</div>
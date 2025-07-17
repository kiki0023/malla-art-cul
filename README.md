# Malla Curricular Interactiva - Arte Culinario y Business

Una aplicación web interactiva para visualizar y gestionar la malla curricular de Arte Culinario y Doble Grado en Business. Permite a los estudiantes seleccionar cursos, validar prerrequisitos y hacer seguimiento de su progreso académico.

## Características

- **Malla Curricular Completa**: 82 cursos distribuidos en 10 ciclos
- **Validación de Prerrequisitos**: Sistema inteligente que valida las dependencias entre cursos
- **Tres Tipos de Cursos**:
  - Arte Culinario (fondo blanco)
  - Business/DG (fondo azul)
  - Electivos (fondo amarillo, editables)
- **Seguimiento de Progreso**: Barra de progreso visual con mensaje de felicitación
- **Persistencia Local**: Estado guardado en localStorage
- **Interfaz Minimalista**: Diseño limpio con tonos azules y tipografía Times New Roman

## Funcionalidades

### Selección de Cursos
- Clic para seleccionar/deseleccionar cursos
- Validación automática de prerrequisitos
- Cursos no disponibles se muestran deshabilitados

### Cursos Electivos
- Nombres editables haciendo clic en el texto
- Selección automática después de la edición
- Personalización completa del contenido

### Gestión de Progreso
- Contador de cursos completados
- Barra de progreso visual
- Mensaje de felicitación al completar todos los cursos

### Persistencia
- Estado guardado automáticamente
- Recuperación de datos al recargar la página
- Botón "Limpiar todo" para reiniciar

## Tecnologías Utilizadas

### Frontend
- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Shadcn/ui** para componentes
- **Lucide React** para iconos
- **Wouter** para enrutamiento

### Backend
- **Express.js** con TypeScript
- **Drizzle ORM** para base de datos
- **PostgreSQL** (configurado para Neon)

### Herramientas de Desarrollo
- **Vite** para desarrollo y build
- **ESBuild** para empaquetado
- **TypeScript** para tipado estático

## Instalación

1. Clona el repositorio:
```bash
git clone <tu-repo-url>
cd malla-curricular
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5000`

## Estructura del Proyecto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── data/          # Datos de cursos
│   │   ├── hooks/         # Hooks personalizados
│   │   ├── lib/           # Utilidades
│   │   └── pages/         # Páginas de la aplicación
│   └── index.html
├── server/                 # Backend Express
│   ├── index.ts           # Servidor principal
│   ├── routes.ts          # Rutas API
│   └── storage.ts         # Interfaz de almacenamiento
├── shared/                 # Esquemas compartidos
│   └── schema.ts          # Tipos y validaciones
└── package.json
```

## Uso

1. **Visualizar Cursos**: Los cursos están organizados por ciclos del 1 al 10
2. **Seleccionar Cursos**: Haz clic en los cursos disponibles para seleccionarlos
3. **Validar Prerrequisitos**: Los cursos se habilitan solo si tienes los prerrequisitos
4. **Editar Electivos**: Haz clic en el nombre de los cursos electivos para personalizarlos
5. **Ver Progreso**: La barra superior muestra tu avance
6. **Reiniciar**: Usa el botón "Limpiar todo" para empezar de nuevo

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

Desarrollado para la gestión académica del programa de Arte Culinario y Business.
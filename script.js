// Datos de los cursos (usando los mismos datos que la aplicación React)
const courses = [
    // Cycle 1
    { id: 'english-1', name: 'ENGLISH I', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'fundamentos-competencias', name: 'FUNDAMENTOS EN COMPETENCIAS DIGITALES', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'lenguaje-1', name: 'LENGUAJE Y COMUNICACIÓN I', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'matematica-1', name: 'MATEMÁTICA', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'american-literature', name: 'AMERICAN LITERATURE', cycle: 1, prerequisite: 'NINGUNO', type: 'business' },
    { id: 'ciencia-alimentos', name: 'CIENCIA DE LOS ALIMENTOS Y BEBIDAS', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'general-biology', name: 'GENERAL BIOLOGY', cycle: 1, prerequisite: 'NINGUNO', type: 'business' },
    { id: 'intro-arte-culinario', name: 'INTRODUCCIÓN AL ARTE CULINARIO Y SOSTENIBILIDAD', cycle: 1, prerequisite: 'NINGUNO', type: 'culinary' },

    // Cycle 2
    { id: 'admin-negocios', name: 'ADMINISTRACIÓN PARA LOS NEGOCIOS', cycle: 2, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'english-2', name: 'ENGLISH II', cycle: 2, prerequisite: 'ENGLISH I', type: 'culinary' },
    { id: 'fundamentos-cocina-1', name: 'FUNDAMENTOS Y TÉCNICAS DE COCINA I', cycle: 2, prerequisite: 'CIENCIA DE LOS ALIMENTOS Y BEBIDAS', type: 'culinary' },
    { id: 'lenguaje-2', name: 'LENGUAJE Y COMUNICACIÓN II', cycle: 2, prerequisite: 'LENGUAJE Y COMUNICACIÓN I', type: 'culinary' },
    { id: 'matematica-2', name: 'MATEMÁTICA II', cycle: 2, prerequisite: 'MATEMÁTICA', type: 'business' },
    { id: 'realidad-nacional', name: 'REALIDAD NACIONAL Y GLOBALIZACIÓN', cycle: 2, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'sanidad-higiene', name: 'SANIDAD E HIGIENE DE LOS ALIMENTOS Y BEBIDAS', cycle: 2, prerequisite: 'CIENCIA DE LOS ALIMENTOS Y BEBIDAS', type: 'culinary' },
    { id: 'world-history', name: 'WORLD HISTORY', cycle: 2, prerequisite: 'NINGUNO', type: 'business' },

    // Cycle 3
    { id: 'english-3', name: 'ENGLISH III', cycle: 3, prerequisite: 'ENGLISH II', type: 'culinary' },
    { id: 'estadistica-1', name: 'ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA', cycle: 3, prerequisite: 'MATEMÁTICA', type: 'culinary' },
    { id: 'pasteleria-1', name: 'FUNDAMENTOS Y TÉCNICAS DE PASTELERÍA I', cycle: 3, prerequisite: 'SANIDAD E HIGIENE DE LOS ALIMENTOS Y BEBIDAS, FUNDAMENTOS Y TÉCNICAS DE COCINA I', type: 'culinary' },
    { id: 'general-psychology', name: 'GENERAL PSYCHOLOGY', cycle: 3, prerequisite: 'NINGUNO', type: 'business' },
    { id: 'gestion-empresas', name: 'GESTIÓN DE EMPRESAS', cycle: 3, prerequisite: 'ADMINISTRACIÓN PARA LOS NEGOCIOS', type: 'business' },
    { id: 'principios-economia', name: 'PRINCIPIOS DE ECONOMÍA', cycle: 3, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'panificacion-1', name: 'TÉCNICAS Y PROCESOS DE PANIFICACIÓN I', cycle: 3, prerequisite: 'SANIDAD E HIGIENE DE LOS ALIMENTOS Y BEBIDAS, FUNDAMENTOS Y TÉCNICAS DE COCINA I', type: 'culinary' },
    { id: 'etica-ciudadania', name: 'ÉTICA Y CIUDADANÍA', cycle: 3, prerequisite: 'REALIDAD NACIONAL Y GLOBALIZACIÓN', type: 'culinary' },

    // Cycle 4
    { id: 'business-law-1', name: 'BUSINESS LAW I', cycle: 4, prerequisite: 'ADMINISTRACIÓN PARA LOS NEGOCIOS', type: 'business' },
    { id: 'english-4', name: 'ENGLISH IV', cycle: 4, prerequisite: 'ENGLISH III', type: 'culinary' },
    { id: 'frances-1', name: 'FRANCÉS I', cycle: 4, prerequisite: 'NINGUNO', type: 'business' },
    { id: 'fundamentos-contables', name: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', cycle: 4, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'liderazgo-sostenible', name: 'FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE', cycle: 4, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'cocina-2', name: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', cycle: 4, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA I', type: 'culinary' },
    { id: 'metodologia-investigacion', name: 'METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA', cycle: 4, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'microeconomia', name: 'MICROECONOMÍA', cycle: 4, prerequisite: 'PRINCIPIOS DE ECONOMÍA', type: 'culinary' },

    // Cycle 5
    { id: 'costos-alimentos', name: 'COSTOS DE ALIMENTOS Y BEBIDAS', cycle: 5, prerequisite: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', type: 'culinary' },
    { id: 'english-composition-1', name: 'ENGLISH COMPOSITION I', cycle: 5, prerequisite: 'ENGLISH IV', type: 'business' },
    { id: 'environmental-sciences', name: 'ENVIRONMENTAL SCIENCES', cycle: 5, prerequisite: 'GENERAL BIOLOGY', type: 'business' },
    { id: 'estadistica-2', name: 'ESTADÍSTICA II', cycle: 5, prerequisite: 'ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA', type: 'business' },
    { id: 'pasteleria-2', name: 'FUNDAMENTOS Y TÉCNICAS DE PASTELERÍA II', cycle: 5, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE PASTELERÍA I', type: 'culinary' },
    { id: 'gastronomia-funcional', name: 'GASTRONOMÍA FUNCIONAL', cycle: 5, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'marketing', name: 'MARKETING', cycle: 5, prerequisite: 'ADMINISTRACIÓN PARA LOS NEGOCIOS', type: 'culinary' },
    { id: 'tecnicas-servicio', name: 'TÉCNICAS DE SERVICIO DE ALIMENTOS Y BEBIDAS', cycle: 5, prerequisite: 'NINGUNO', type: 'culinary' },
    { id: 'panificacion-2', name: 'TÉCNICAS Y PROCESOS DE PANIFICACIÓN II', cycle: 5, prerequisite: 'TÉCNICAS Y PROCESOS DE PANIFICACIÓN I', type: 'culinary' },

    // Cycle 6
    { id: 'analisis-gerencial', name: 'ANÁLISIS GERENCIAL DE LA INFORMACIÓN FINANCIERA', cycle: 6, prerequisite: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', type: 'culinary' },
    { id: 'business-law-2', name: 'BUSINESS LAW II', cycle: 6, prerequisite: 'BUSINESS LAW I', type: 'business' },
    { id: 'cocina-peruana', name: 'COCINA PERUANA TRADICIONAL Y CONTEMPORÁNEA', cycle: 6, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'english-composition-2', name: 'ENGLISH COMPOSITION II', cycle: 6, prerequisite: 'ENGLISH COMPOSITION I', type: 'business' },
    { id: 'gestion-culinaria', name: 'GESTIÓN CULINARIA', cycle: 6, prerequisite: 'ENGLISH IV, FUNDAMENTOS EN COMPETENCIAS DIGITALES', type: 'culinary' },
    { id: 'gestion-financiera-1', name: 'GESTIÓN FINANCIERA I', cycle: 6, prerequisite: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', type: 'business' },
    { id: 'investigacion-mercado', name: 'INVESTIGACIÓN Y ANÁLISIS DE MERCADO', cycle: 6, prerequisite: 'MARKETING, ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA', type: 'culinary' },
    { id: 'oportunidades-negocios', name: 'OPORTUNIDADES DE NEGOCIOS', cycle: 6, prerequisite: 'PRINCIPIOS DE ECONOMÍA, MARKETING, FUNDAMENTOS CONTABLES Y FINANCIEROS', type: 'culinary' },

    // Cycle 7
    { id: 'catering-management', name: 'CATERING MANAGEMENT AND HIGH VOLUME PRODUCTION', cycle: 7, prerequisite: 'GESTIÓN CULINARIA', type: 'culinary' },
    { id: 'cocina-mediterranea', name: 'COCINA MEDITERRÁNEA', cycle: 7, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'contabilidad-avanzada', name: 'CONTABILIDAD AVANZADA', cycle: 7, prerequisite: 'FUNDAMENTOS CONTABLES Y FINANCIEROS', type: 'business' },
    { id: 'diseno-equipamiento', name: 'DISEÑO Y EQUIPAMIENTO GASTRONÓMICO', cycle: 7, prerequisite: 'GESTIÓN CULINARIA', type: 'culinary' },
    { id: 'garde-manger', name: 'GARDE MANGER', cycle: 7, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'electivo-1', name: 'ELECTIVO I', cycle: 7, prerequisite: 'NINGUNO', type: 'elective' },
    { id: 'gestion-financiera-2', name: 'GESTIÓN FINANCIERA II', cycle: 7, prerequisite: 'GESTIÓN FINANCIERA I', type: 'business' },
    { id: 'public-speaking', name: 'PUBLIC SPEAKING', cycle: 7, prerequisite: 'ENGLISH IV', type: 'business' },

    // Cycle 8
    { id: 'contabilidad-gestion', name: 'CONTABILIDAD DE GESTIÓN', cycle: 8, prerequisite: 'CONTABILIDAD AVANZADA', type: 'business' },
    { id: 'evaluacion-proyectos', name: 'EVALUACIÓN DE PROYECTOS', cycle: 8, prerequisite: 'INVESTIGACIÓN Y ANÁLISIS DE MERCADO, OPORTUNIDADES DE NEGOCIOS', type: 'culinary' },
    { id: 'food-design', name: 'FOOD DESIGN', cycle: 8, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE PASTELERÍA II, FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'gerencia-marketing', name: 'GERENCIA DE MARKETING', cycle: 8, prerequisite: 'MARKETING', type: 'business' },
    { id: 'innovacion-tendencias', name: 'INNOVACIÓN Y NUEVAS TENDENCIAS CULINARIAS', cycle: 8, prerequisite: 'GESTIÓN CULINARIA, FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'managing-hr', name: 'MANAGING HOSPITALITY HUMAN RESOURCES', cycle: 8, prerequisite: 'FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE', type: 'culinary' },
    { id: 'operaciones-logistica', name: 'OPERACIONES Y LOGÍSTICA', cycle: 8, prerequisite: 'GESTIÓN DE EMPRESAS', type: 'business' },
    { id: 'electivo-2', name: 'ELECTIVO II', cycle: 8, prerequisite: 'NINGUNO', type: 'elective' },

    // Cycle 9
    { id: 'proyecto-tesis-1', name: 'PROYECTO DE TESIS I', cycle: 9, prerequisite: 'METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA', type: 'culinary' },
    { id: 'cocina-oriental', name: 'COCINA ORIENTAL', cycle: 9, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'proyecto-integrador', name: 'PROYECTO INTEGRADOR', cycle: 9, prerequisite: 'EVALUACIÓN DE PROYECTOS', type: 'culinary' },
    { id: 'english-culinary', name: 'ENGLISH FOR CULINARY APPLICATION', cycle: 9, prerequisite: 'ENGLISH IV', type: 'culinary' },
    { id: 'electivo-3', name: 'ELECTIVO III', cycle: 9, prerequisite: 'NINGUNO', type: 'elective' },
    { id: 'comportamiento-organizacional', name: 'COMPORTAMIENTO Y CLIMA ORGANIZACIONAL', cycle: 9, prerequisite: 'GESTIÓN DE EMPRESAS', type: 'business' },
    { id: 'e-marketing', name: 'E-MARKETING FOR BUSINESS', cycle: 9, prerequisite: 'GERENCIA DE MARKETING', type: 'business' },
    { id: 'estrategias-gerenciales', name: 'ESTRATEGIAS GERENCIALES', cycle: 9, prerequisite: 'GESTIÓN DE EMPRESAS', type: 'business' },

    // Cycle 10
    { id: 'proyecto-tesis-2', name: 'PROYECTO DE TESIS II', cycle: 10, prerequisite: 'PROYECTO DE TESIS I', type: 'culinary' },
    { id: 'tecnicas-vanguardia', name: 'TÉCNICAS EN EL ARTE CULINARIO DE VANGUARDIA', cycle: 10, prerequisite: 'FUNDAMENTOS Y TÉCNICAS DE COCINA II', type: 'culinary' },
    { id: 'desarrollo-concepto', name: 'DESARROLLO DE CONCEPTO', cycle: 10, prerequisite: 'INNOVACIÓN Y NUEVAS TENDENCIAS CULINARIAS', type: 'culinary' },
    { id: 'electivo-4', name: 'ELECTIVO IV', cycle: 10, prerequisite: 'NINGUNO', type: 'elective' },
    { id: 'electivo-5', name: 'ELECTIVO V', cycle: 10, prerequisite: 'NINGUNO', type: 'elective' },
    { id: 'business-capstone', name: 'BUSINESS CAPSTONE', cycle: 10, prerequisite: 'COMPORTAMIENTO Y CLIMA ORGANIZACIONAL', type: 'business' },
    { id: 'global-business', name: 'GLOBAL BUSINESS STRATEGY', cycle: 10, prerequisite: 'NINGUNO', type: 'business' },
    { id: 'liderazgo-organizacional', name: 'LIDERAZGO ORGANIZACIONAL', cycle: 10, prerequisite: 'GESTIÓN DE EMPRESAS', type: 'business' },
    { id: 'negociacion-liderazgo', name: 'NEGOCIACIÓN Y LIDERAZGO COMERCIAL', cycle: 10, prerequisite: 'GESTIÓN DE EMPRESAS', type: 'business' },
];

// Estado de la aplicación
let selectedCourses = [];
let editableCourses = {};

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    renderCurriculum();
    updateProgress();
    
    // Event listeners
    document.getElementById('reset-btn').addEventListener('click', resetSelection);
});

// Cargar estado desde localStorage
function loadState() {
    const saved = localStorage.getItem('selectedCourses');
    if (saved) {
        selectedCourses = JSON.parse(saved);
    }
    
    const savedNames = localStorage.getItem('editableCourses');
    if (savedNames) {
        editableCourses = JSON.parse(savedNames);
    }
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
    localStorage.setItem('editableCourses', JSON.stringify(editableCourses));
}

// Renderizar el currículum
function renderCurriculum() {
    const container = document.getElementById('curriculum-grid');
    container.innerHTML = '';
    
    // Agrupar cursos por ciclo
    const coursesByCycle = {};
    courses.forEach(course => {
        if (!coursesByCycle[course.cycle]) {
            coursesByCycle[course.cycle] = [];
        }
        coursesByCycle[course.cycle].push(course);
    });
    
    // Renderizar cada ciclo
    for (let cycle = 1; cycle <= 10; cycle++) {
        const cycleDiv = document.createElement('div');
        cycleDiv.className = 'cycle-column';
        
        const cycleTitle = document.createElement('h3');
        cycleTitle.className = 'cycle-title';
        cycleTitle.textContent = `Ciclo ${cycle}`;
        
        cycleDiv.appendChild(cycleTitle);
        
        // Ordenar cursos: primero Culinary, luego Business, luego Elective
        const sortedCourses = coursesByCycle[cycle].sort((a, b) => {
            const typeOrder = { 'culinary': 0, 'business': 1, 'elective': 2 };
            return typeOrder[a.type] - typeOrder[b.type];
        });
        
        sortedCourses.forEach(course => {
            const courseCard = createCourseCard(course);
            cycleDiv.appendChild(courseCard);
        });
        
        container.appendChild(cycleDiv);
    }
}

// Crear tarjeta de curso
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.id = `course-${course.id}`;
    
    const isSelected = selectedCourses.includes(course.id);
    const canSelect = canSelectCourse(course);
    
    // Aplicar clases según el estado
    if (isSelected) {
        card.classList.add('selected');
    }
    
    if (!canSelect && !isSelected) {
        card.classList.add('disabled');
    }
    
    // Aplicar clases según el tipo
    if (course.type === 'business') {
        card.classList.add('business');
    } else if (course.type === 'elective') {
        card.classList.add('elective');
    }
    
    const courseName = editableCourses[course.id] || course.name;
    const isElective = course.type === 'elective';
    
    // Crear contenido de la tarjeta
    const courseContent = document.createElement('div');
    courseContent.className = 'font-semibold text-xs w-full';
    
    if (isElective) {
        const span = document.createElement('span');
        span.className = 'editable-course';
        span.textContent = courseName;
        span.setAttribute('contenteditable', 'true');
        span.addEventListener('blur', function() {
            if (this.textContent.trim()) {
                editableCourses[course.id] = this.textContent.trim();
                saveState();
            }
        });
        span.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });
        span.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        courseContent.appendChild(span);
    } else {
        courseContent.textContent = courseName;
    }
    
    card.appendChild(courseContent);
    
    // Agregar tooltip para prerrequisitos
    if (course.prerequisite && course.prerequisite !== 'NINGUNO') {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `Prerrequisito: ${course.prerequisite}`;
        card.appendChild(tooltip);
    }
    
    // Event listeners
    if (canSelect || isSelected) {
        card.addEventListener('click', function(e) {
            if (e.target.getAttribute('contenteditable') === 'true') return;
            toggleCourse(course.id);
        });
    }
    
    return card;
}

// Verificar si se puede seleccionar un curso
function canSelectCourse(course) {
    if (selectedCourses.includes(course.id)) {
        return true; // Ya está seleccionado, se puede deseleccionar
    }
    
    if (!course.prerequisite || course.prerequisite === 'NINGUNO') {
        return true; // No tiene prerrequisitos
    }
    
    // Verificar si todos los prerrequisitos están cumplidos
    const prerequisites = course.prerequisite.split(', ').map(req => req.trim());
    return prerequisites.every(reqName => {
        const reqCourse = courses.find(c => c.name === reqName);
        return reqCourse && selectedCourses.includes(reqCourse.id);
    });
}

// Alternar selección de curso
function toggleCourse(courseId) {
    if (selectedCourses.includes(courseId)) {
        // Deseleccionar curso
        selectedCourses = selectedCourses.filter(id => id !== courseId);
    } else {
        // Seleccionar curso si se cumplen los prerrequisitos
        const course = courses.find(c => c.id === courseId);
        if (canSelectCourse(course)) {
            selectedCourses.push(courseId);
        }
    }
    
    saveState();
    updateCourseCards();
    updateProgress();
}

// Actualizar tarjetas de cursos
function updateCourseCards() {
    courses.forEach(course => {
        const card = document.getElementById(`course-${course.id}`);
        if (!card) return;
        
        const isSelected = selectedCourses.includes(course.id);
        const canSelect = canSelectCourse(course);
        
        card.classList.toggle('selected', isSelected);
        card.classList.toggle('disabled', !canSelect && !isSelected);
    });
}

// Actualizar progreso
function updateProgress() {
    const totalCourses = courses.length;
    const completedCourses = selectedCourses.length;
    const percentage = (completedCourses / totalCourses) * 100;
    
    document.getElementById('progress-count').textContent = completedCourses;
    document.getElementById('progress-fill').style.width = percentage + '%';
    
    // Mostrar celebración si se completaron todos los cursos
    const celebration = document.getElementById('celebration');
    if (completedCourses === totalCourses) {
        celebration.classList.remove('hidden');
    } else {
        celebration.classList.add('hidden');
    }
}

// Reiniciar selección
function resetSelection() {
    if (confirm('¿Estás seguro de que quieres reiniciar tu selección?')) {
        selectedCourses = [];
        editableCourses = {};
        saveState();
        renderCurriculum();
        updateProgress();
    }
}
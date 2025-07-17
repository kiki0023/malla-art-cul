// Datos de los cursos
const courses = [
    // Ciclo 1
    { id: 1, name: "ENGLISH I", cycle: 1, prerequisites: [], type: "culinary" },
    { id: 2, name: "FUNDAMENTOS EN COCINA", cycle: 1, prerequisites: [], type: "culinary" },
    { id: 3, name: "FUNDAMENTOS EN PASTELERÍA", cycle: 1, prerequisites: [], type: "culinary" },
    { id: 4, name: "MATEMÁTICA BÁSICA", cycle: 1, prerequisites: [], type: "business" },
    { id: 5, name: "METODOLOGÍA DE ESTUDIO", cycle: 1, prerequisites: [], type: "business" },
    { id: 6, name: "DESARROLLO HUMANO", cycle: 1, prerequisites: [], type: "business" },
    { id: 7, name: "SEGURIDAD Y SALUD EN EL TRABAJO", cycle: 1, prerequisites: [], type: "business" },
    { id: 8, name: "ACTIVIDAD FORMATIVA I", cycle: 1, prerequisites: [], type: "elective" },

    // Ciclo 2
    { id: 9, name: "ENGLISH II", cycle: 2, prerequisites: [1], type: "culinary" },
    { id: 10, name: "TÉCNICAS CULINARIAS BÁSICAS", cycle: 2, prerequisites: [2], type: "culinary" },
    { id: 11, name: "TÉCNICAS BÁSICAS DE PASTELERÍA", cycle: 2, prerequisites: [3], type: "culinary" },
    { id: 12, name: "MATEMÁTICA APLICADA", cycle: 2, prerequisites: [4], type: "business" },
    { id: 13, name: "COMUNICACIÓN", cycle: 2, prerequisites: [], type: "business" },
    { id: 14, name: "ADMINISTRACIÓN GENERAL", cycle: 2, prerequisites: [], type: "business" },
    { id: 15, name: "FUNDAMENTOS DE TURISMO", cycle: 2, prerequisites: [], type: "business" },
    { id: 16, name: "ACTIVIDAD FORMATIVA II", cycle: 2, prerequisites: [8], type: "elective" },

    // Ciclo 3
    { id: 17, name: "ENGLISH III", cycle: 3, prerequisites: [9], type: "culinary" },
    { id: 18, name: "TÉCNICAS CULINARIAS INTERMEDIAS", cycle: 3, prerequisites: [10], type: "culinary" },
    { id: 19, name: "TÉCNICAS INTERMEDIAS DE PASTELERÍA", cycle: 3, prerequisites: [11], type: "culinary" },
    { id: 20, name: "ESTADÍSTICA", cycle: 3, prerequisites: [12], type: "business" },
    { id: 21, name: "GESTIÓN DE PERSONAS", cycle: 3, prerequisites: [14], type: "business" },
    { id: 22, name: "ECONOMÍA", cycle: 3, prerequisites: [], type: "business" },
    { id: 23, name: "NUTRICIÓN", cycle: 3, prerequisites: [], type: "business" },
    { id: 24, name: "ACTIVIDAD FORMATIVA III", cycle: 3, prerequisites: [16], type: "elective" },

    // Ciclo 4
    { id: 25, name: "ENGLISH IV", cycle: 4, prerequisites: [17], type: "culinary" },
    { id: 26, name: "TÉCNICAS CULINARIAS AVANZADAS", cycle: 4, prerequisites: [18], type: "culinary" },
    { id: 27, name: "TÉCNICAS AVANZADAS DE PASTELERÍA", cycle: 4, prerequisites: [19], type: "culinary" },
    { id: 28, name: "CONTABILIDAD", cycle: 4, prerequisites: [], type: "business" },
    { id: 29, name: "MARKETING", cycle: 4, prerequisites: [], type: "business" },
    { id: 30, name: "ENOLOGÍA", cycle: 4, prerequisites: [], type: "business" },
    { id: 31, name: "SEGURIDAD ALIMENTARIA", cycle: 4, prerequisites: [23], type: "business" },
    { id: 32, name: "ACTIVIDAD FORMATIVA IV", cycle: 4, prerequisites: [24], type: "elective" },

    // Ciclo 5
    { id: 33, name: "COCINA PERUANA", cycle: 5, prerequisites: [26], type: "culinary" },
    { id: 34, name: "PANADERÍA", cycle: 5, prerequisites: [27], type: "culinary" },
    { id: 35, name: "COCINA INTERNACIONAL", cycle: 5, prerequisites: [26], type: "culinary" },
    { id: 36, name: "COSTOS Y PRESUPUESTOS", cycle: 5, prerequisites: [28], type: "business" },
    { id: 37, name: "GESTIÓN DE CALIDAD", cycle: 5, prerequisites: [31], type: "business" },
    { id: 38, name: "INVESTIGACIÓN DE MERCADOS", cycle: 5, prerequisites: [20, 29], type: "business" },
    { id: 39, name: "PSICOLOGÍA DEL CONSUMIDOR", cycle: 5, prerequisites: [29], type: "business" },
    { id: 40, name: "ACTIVIDAD FORMATIVA V", cycle: 5, prerequisites: [32], type: "elective" },

    // Ciclo 6
    { id: 41, name: "COCINA PERUANA AVANZADA", cycle: 6, prerequisites: [33], type: "culinary" },
    { id: 42, name: "PANADERÍA AVANZADA", cycle: 6, prerequisites: [34], type: "culinary" },
    { id: 43, name: "COCINA INTERNACIONAL AVANZADA", cycle: 6, prerequisites: [35], type: "culinary" },
    { id: 44, name: "FINANZAS", cycle: 6, prerequisites: [36], type: "business" },
    { id: 45, name: "GESTIÓN DE OPERACIONES", cycle: 6, prerequisites: [37], type: "business" },
    { id: 46, name: "COMPORTAMIENTO ORGANIZACIONAL", cycle: 6, prerequisites: [21], type: "business" },
    { id: 47, name: "EMPRENDIMIENTO", cycle: 6, prerequisites: [38], type: "business" },
    { id: 48, name: "ACTIVIDAD FORMATIVA VI", cycle: 6, prerequisites: [40], type: "elective" },

    // Ciclo 7
    { id: 49, name: "COCINA FUSIÓN", cycle: 7, prerequisites: [41, 43], type: "culinary" },
    { id: 50, name: "CHOCOLATERÍA", cycle: 7, prerequisites: [42], type: "culinary" },
    { id: 51, name: "COCINA MOLECULAR", cycle: 7, prerequisites: [41, 43], type: "culinary" },
    { id: 52, name: "PLAN DE NEGOCIOS", cycle: 7, prerequisites: [44, 47], type: "business" },
    { id: 53, name: "GESTIÓN DE PROYECTOS", cycle: 7, prerequisites: [45], type: "business" },
    { id: 54, name: "LIDERAZGO", cycle: 7, prerequisites: [46], type: "business" },
    { id: 55, name: "INNOVACIÓN GASTRONÓMICA", cycle: 7, prerequisites: [49], type: "business" },
    { id: 56, name: "ACTIVIDAD FORMATIVA VII", cycle: 7, prerequisites: [48], type: "elective" },

    // Ciclo 8
    { id: 57, name: "COCINA DE AUTOR", cycle: 8, prerequisites: [49, 51], type: "culinary" },
    { id: 58, name: "DECORACIÓN Y PRESENTACIÓN", cycle: 8, prerequisites: [50], type: "culinary" },
    { id: 59, name: "COCINA DIETÉTICA", cycle: 8, prerequisites: [51], type: "culinary" },
    { id: 60, name: "GESTIÓN FINANCIERA", cycle: 8, prerequisites: [52], type: "business" },
    { id: 61, name: "GESTIÓN DE MARCA", cycle: 8, prerequisites: [53], type: "business" },
    { id: 62, name: "NEGOCIACIÓN", cycle: 8, prerequisites: [54], type: "business" },
    { id: 63, name: "SOSTENIBILIDAD GASTRONÓMICA", cycle: 8, prerequisites: [55], type: "business" },
    { id: 64, name: "ACTIVIDAD FORMATIVA VIII", cycle: 8, prerequisites: [56], type: "elective" },

    // Ciclo 9
    { id: 65, name: "ALTA COCINA", cycle: 9, prerequisites: [57], type: "culinary" },
    { id: 66, name: "CAKE DESIGN", cycle: 9, prerequisites: [58], type: "culinary" },
    { id: 67, name: "COCINA TERAPÉUTICA", cycle: 9, prerequisites: [59], type: "culinary" },
    { id: 68, name: "GESTIÓN ESTRATÉGICA", cycle: 9, prerequisites: [60], type: "business" },
    { id: 69, name: "MARKETING DIGITAL", cycle: 9, prerequisites: [61], type: "business" },
    { id: 70, name: "CONSULTORÍA GASTRONÓMICA", cycle: 9, prerequisites: [62], type: "business" },
    { id: 71, name: "GASTRONOMÍA SOCIAL", cycle: 9, prerequisites: [63], type: "business" },
    { id: 72, name: "ACTIVIDAD FORMATIVA IX", cycle: 9, prerequisites: [64], type: "elective" },

    // Ciclo 10
    { id: 73, name: "MAESTRÍA CULINARIA", cycle: 10, prerequisites: [65], type: "culinary" },
    { id: 74, name: "PASTELERÍA ARTÍSTICA", cycle: 10, prerequisites: [66], type: "culinary" },
    { id: 75, name: "INVESTIGACIÓN GASTRONÓMICA", cycle: 10, prerequisites: [67], type: "culinary" },
    { id: 76, name: "DIRECCIÓN GENERAL", cycle: 10, prerequisites: [68], type: "business" },
    { id: 77, name: "GESTIÓN DE RESTAURANTES", cycle: 10, prerequisites: [69], type: "business" },
    { id: 78, name: "CONSULTORÍA EMPRESARIAL", cycle: 10, prerequisites: [70], type: "business" },
    { id: 79, name: "RESPONSABILIDAD SOCIAL", cycle: 10, prerequisites: [71], type: "business" },
    { id: 80, name: "TESIS I", cycle: 10, prerequisites: [72], type: "elective" },
    { id: 81, name: "TESIS II", cycle: 10, prerequisites: [80], type: "elective" },
    { id: 82, name: "ACTIVIDAD FORMATIVA X", cycle: 10, prerequisites: [72], type: "elective" }
];

// Estado de la aplicación
let selectedCourses = new Set();
let customCourseNames = {};

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
        selectedCourses = new Set(JSON.parse(saved));
    }
    
    const savedNames = localStorage.getItem('customCourseNames');
    if (savedNames) {
        customCourseNames = JSON.parse(savedNames);
    }
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem('selectedCourses', JSON.stringify([...selectedCourses]));
    localStorage.setItem('customCourseNames', JSON.stringify(customCourseNames));
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
        cycleDiv.className = 'cycle';
        
        const cycleHeader = document.createElement('div');
        cycleHeader.className = 'cycle-header';
        cycleHeader.innerHTML = `
            <h2>Ciclo ${cycle}</h2>
            <div class="cycle-subtitle">Semestre ${Math.ceil(cycle / 2)}</div>
        `;
        
        const coursesGrid = document.createElement('div');
        coursesGrid.className = 'courses-grid';
        
        // Ordenar cursos: primero Culinary, luego Business, luego Elective
        const sortedCourses = coursesByCycle[cycle].sort((a, b) => {
            const typeOrder = { 'culinary': 0, 'business': 1, 'elective': 2 };
            return typeOrder[a.type] - typeOrder[b.type];
        });
        
        sortedCourses.forEach(course => {
            const courseCard = createCourseCard(course);
            coursesGrid.appendChild(courseCard);
        });
        
        cycleDiv.appendChild(cycleHeader);
        cycleDiv.appendChild(coursesGrid);
        container.appendChild(cycleDiv);
    }
}

// Crear tarjeta de curso
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.id = `course-${course.id}`;
    
    const isSelected = selectedCourses.has(course.id);
    const canSelect = canSelectCourse(course);
    
    if (isSelected) {
        card.classList.add('selected');
    }
    
    if (!canSelect && !isSelected) {
        card.classList.add('disabled');
    }
    
    const courseName = customCourseNames[course.id] || course.name;
    const isElective = course.type === 'elective';
    
    card.innerHTML = `
        <div class="course-header">
            <div class="course-name">
                ${isElective ? 
                    `<input type="text" value="${courseName}" data-course-id="${course.id}" />` :
                    courseName
                }
            </div>
            <div class="course-type ${course.type}">
                ${course.type === 'culinary' ? 'Culinaria' : 
                  course.type === 'business' ? 'Negocios' : 'Electivo'}
            </div>
        </div>
        <div class="course-details">
            <div class="course-cycle">Ciclo ${course.cycle}</div>
            <div class="course-prerequisites">
                ${course.prerequisites.length > 0 ? 
                    `Req: ${course.prerequisites.join(', ')}` : 
                    'Sin requisitos'
                }
            </div>
        </div>
        <div class="selected-indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </div>
    `;
    
    // Event listeners
    if (canSelect || isSelected) {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'INPUT') return;
            toggleCourse(course.id);
        });
    }
    
    // Event listener para inputs editables
    const input = card.querySelector('input');
    if (input) {
        input.addEventListener('input', function(e) {
            e.stopPropagation();
            customCourseNames[course.id] = e.target.value;
            saveState();
        });
        
        input.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    return card;
}

// Verificar si se puede seleccionar un curso
function canSelectCourse(course) {
    return course.prerequisites.every(prereqId => selectedCourses.has(prereqId));
}

// Alternar selección de curso
function toggleCourse(courseId) {
    if (selectedCourses.has(courseId)) {
        // Deseleccionar curso y todos los que dependen de él
        deselectCourseAndDependents(courseId);
    } else {
        // Seleccionar curso si se cumplen los prerrequisitos
        const course = courses.find(c => c.id === courseId);
        if (canSelectCourse(course)) {
            selectedCourses.add(courseId);
        }
    }
    
    saveState();
    updateCourseCards();
    updateProgress();
}

// Deseleccionar curso y dependientes
function deselectCourseAndDependents(courseId) {
    selectedCourses.delete(courseId);
    
    // Encontrar cursos que dependen de este
    const dependents = courses.filter(course => 
        course.prerequisites.includes(courseId) && selectedCourses.has(course.id)
    );
    
    // Deseleccionar recursivamente
    dependents.forEach(dependent => {
        deselectCourseAndDependents(dependent.id);
    });
}

// Actualizar tarjetas de cursos
function updateCourseCards() {
    courses.forEach(course => {
        const card = document.getElementById(`course-${course.id}`);
        if (!card) return;
        
        const isSelected = selectedCourses.has(course.id);
        const canSelect = canSelectCourse(course);
        
        card.classList.toggle('selected', isSelected);
        card.classList.toggle('disabled', !canSelect && !isSelected);
    });
}

// Actualizar progreso
function updateProgress() {
    const totalCourses = courses.length;
    const completedCourses = selectedCourses.size;
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
        selectedCourses.clear();
        customCourseNames = {};
        saveState();
        renderCurriculum();
        updateProgress();
    }
}
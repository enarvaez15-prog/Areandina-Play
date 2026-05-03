// ========== DATOS DE EJEMPLO ==========

// Facultades (primer carrusel - abre página externa)
const facultades = [
    { nombre: "Ingeniería y Ciencias Básicas", thumb: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=300&h=150&fit=crop", urlExterna: "https://campusvirtual.areandina.edu.co/" },
    { nombre: "Derecho y Ciencias Políticas", thumb: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=150&fit=crop", urlExterna: "https://campusvirtual.areandina.edu.co/" },
    { nombre: "Ciencias Económicas, Administrativas y Contables", thumb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=150&fit=crop", urlExterna: "https://campusvirtual.areandina.edu.co/" },
    { nombre: "Ciencias de la Comunicación", thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=150&fit=crop", urlExterna: "https://campusvirtual.areandina.edu.co/" },
    { nombre: "Psicología", thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=150&fit=crop", urlExterna: "https://campusvirtual.areandina.edu.co/" }
];

// Videos de presentación por facultad
const videosPresentacion = [
    { titulo: "Presentación - Ingeniería y Ciencias Básicas", thumb: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=200&fit=crop", duracion: "3:45", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { titulo: "Presentación - Derecho y Ciencias Políticas", thumb: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop", duracion: "4:20", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { titulo: "Presentación - Ciencias Económicas", thumb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop", duracion: "3:50", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { titulo: "Presentación - Ciencias de la Comunicación", thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=200&fit=crop", duracion: "5:10", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { titulo: "Presentación - Psicología", thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop", duracion: "4:05", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

// Videos por sección (con preview)
const videosPorSeccion = {
    vicerrectoria: [
        { titulo: "Nuevos programas académicos 2025", thumb: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { titulo: "Inducciones 2025-2 - Inteligencia Artificial", thumb: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { titulo: "Diálogo con autoridades académicas", thumb: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { titulo: "Plan de desarrollo institucional 2025", thumb: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { titulo: "Evaluación docente: Nuevos retos", thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { titulo: "Innovación educativa 2025", thumb: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ],
    proyeccion: [
        { titulo: "Proyectos comunitarios 2025", thumb: "https://images.unsplash.com/photo-1559027615-9e8bdb4c2d6f?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1559027615-9e8bdb4c2d6f?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "987" },
        { titulo: "Voluntariado Universitario 2025", thumb: "https://images.unsplash.com/photo-1542810633-7129d0b7e6b5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1542810633-7129d0b7e6b5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.5k" },
        { titulo: "Convenios internacionales 2026", thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.1k" },
        { titulo: "Jornada de responsabilidad social", thumb: "https://images.unsplash.com/photo-1559027615-9e8bdb4c2d6f?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1559027615-9e8bdb4c2d6f?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "3.2k" },
        { titulo: "Emprendimiento social", thumb: "https://images.unsplash.com/photo-1542810633-7129d0b7e6b5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1542810633-7129d0b7e6b5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "890" }
    ],
    investigaciones: [
        { titulo: "Convocatoria de semilleros 2025-2", thumb: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.3k" },
        { titulo: "Metodologías de investigación avanzada", thumb: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.1k" },
        { titulo: "Proyectos de investigación destacados", thumb: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "3.4k" },
        { titulo: "Jornada de investigación 2025", thumb: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "987" },
        { titulo: "Semilleros de investigación", thumb: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.8k" }
    ],
    biblioteca: [
        { titulo: "Conversatorio: Politólogo invitado", thumb: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "890" },
        { titulo: "Conversatorio con el escritor Jorge", thumb: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.2k" },
        { titulo: "Charla con la escritora Alejandra", thumb: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.1k" },
        { titulo: "Lanzamiento de colección bibliográfica", thumb: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "543" },
        { titulo: "Taller de búsqueda académica", thumb: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1544717305-38c3f4c7e1c8?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "765" },
        { titulo: "Presentación de nuevas adquisiciones", thumb: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "432" }
    ],
    calidad: [
        { titulo: "Lanzamiento RIESAC 2023", thumb: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "543" },
        { titulo: "Acreditación institucional", thumb: "https://images.unsplash.com/photo-1434030216411-0b793f4f4173?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4f4173?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.1k" },
        { titulo: "Proceso de autoevaluación institucional", thumb: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.2k" },
        { titulo: "Indicadores de calidad 2025", thumb: "https://images.unsplash.com/photo-1434030216411-0b793f4f4173?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4f4173?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "876" },
        { titulo: "Plan de mejora continua", thumb: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "654" }
    ],
    talento: [
        { titulo: "Retos y Desafíos 2025 para colaboradores", thumb: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.8k" },
        { titulo: "Aniversario - Conmemoración", thumb: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.3k" },
        { titulo: "Celebración Quinquenios", thumb: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "987" },
        { titulo: "Bienestar laboral: Nuevas estrategias", thumb: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "1.2k" },
        { titulo: "Capacitación docente 2025", thumb: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1511632765486-21b6b4a07a7f?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "2.5k" },
        { titulo: "Reconocimiento a la trayectoria", thumb: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", vistas: "3.1k" }
    ]
};

// ========== FUNCIONES DE RENDERIZADO ==========

function crearTarjetaFacultad(facultad) {
    return `
        <div class="facultad-card" onclick="window.open('${facultad.urlExterna}', '_blank')">
            <img src="${facultad.thumb}" alt="${facultad.nombre}" class="facultad-thumb">
            <div class="facultad-name">🎓 ${facultad.nombre}</div>
        </div>
    `;
}

function crearTarjetaPresentacion(video) {
    return `
        <div class="presentacion-card" onclick="reproducirVideo('${video.urlVideo}')">
            <img src="${video.thumb}" alt="${video.titulo}" class="presentacion-thumb">
            <div class="presentacion-info">
                <div class="presentacion-title">🎬 ${video.titulo}</div>
                <div class="presentacion-sub">⏱️ Duración: ${video.duracion}</div>
            </div>
        </div>
    `;
}

function crearTarjetaVideo(video) {
    if (!video || !video.titulo) return '';
    
    // Obtener localStorage
    let visitasGuardadas = localStorage.getItem('visitasVideo');
    let visitasMap = {};
    
    if (visitasGuardadas) {
        try {
            visitasMap = JSON.parse(visitasGuardadas);
        } catch(e) {
            console.log('Error parseando localStorage');
        }
    }
    
    let visitas = visitasMap[video.titulo];
    
    // Si no existe, inicializar en 0
    if (visitas === undefined) {
        visitas = 0;
        visitasMap[video.titulo] = 0;
        localStorage.setItem('visitasVideo', JSON.stringify(visitasMap));
    }
    
    const visitasTexto = visitas >= 1000 ? (visitas/1000).toFixed(1) + 'k' : visitas;
    
    return `
        <div class="video-card" data-titulo="${video.titulo}" onclick="reproducirVideo('${video.urlVideo}', '${video.titulo}')">
            <div class="video-thumb-container">
                <img src="${video.thumb}" class="video-thumb">
                <img src="${video.preview}" class="video-preview">
                <div class="video-buttons">
                    <button class="video-play-btn" onclick="event.stopPropagation(); reproducirVideo('${video.urlVideo}', '${video.titulo}')">▶</button>
                </div>
            </div>
            <div class="video-info">
                <div class="video-title">${video.titulo}</div>
                <div class="video-meta" id="meta-${video.titulo.replace(/[^a-zA-Z0-9]/g, '')}">📺 ${visitasTexto} vistas</div>
            </div>
        </div>
    `;
}

// ========== REPRODUCTOR DE VIDEO MEJORADO ==========
let currentVideoUrl = '';

function reproducirVideo(url, titulo = 'Video') {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const iframe = document.getElementById('videoIframe');
    
    if (!modal) return;
    
    currentVideoUrl = url;
    
    if (videoTitle) videoTitle.innerText = titulo;
    
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
    
    if (isYouTube) {
        if (videoPlayer) videoPlayer.style.display = 'none';
        if (!document.getElementById('videoIframe')) {
            const newIframe = document.createElement('iframe');
            newIframe.id = 'videoIframe';
            newIframe.className = 'video-iframe-full';
            newIframe.allowFullscreen = true;
            modal.querySelector('.modal-content').appendChild(newIframe);
        }
        const youtubeIframe = document.getElementById('videoIframe');
        if (youtubeIframe) {
            youtubeIframe.style.display = 'block';
            youtubeIframe.src = url;
        }
    } else {
        if (videoPlayer) {
            videoPlayer.style.display = 'block';
            videoPlayer.src = url;
            videoPlayer.load();
            videoPlayer.play();
        }
        const youtubeIframe = document.getElementById('videoIframe');
        if (youtubeIframe) youtubeIframe.style.display = 'none';
    }
    
    modal.style.display = 'flex';
}

function iniciarPantallaCompleta() {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('videoIframe');
    
    if (videoPlayer && videoPlayer.style.display !== 'none') {
        if (videoPlayer.requestFullscreen) videoPlayer.requestFullscreen();
    } else if (youtubeIframe && youtubeIframe.style.display !== 'none') {
        if (youtubeIframe.requestFullscreen) youtubeIframe.requestFullscreen();
    }
}

function cerrarModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('videoIframe');
    
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }
    if (youtubeIframe) youtubeIframe.src = '';
    
    modal.style.display = 'none';
}

function configurarModal() {
    const closeBtn = document.getElementById('closeModal');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const modal = document.getElementById('videoModal');
    
    if (closeBtn) closeBtn.onclick = cerrarModal;
    if (fullscreenBtn) fullscreenBtn.onclick = iniciarPantallaCompleta;
    if (modal) modal.onclick = (e) => { if (e.target === modal) cerrarModal(); };
}

// ========== CARGAR CARRUSELES ==========
function cargarCarruseles() {
    const facultadesTrack = document.getElementById('facultadesTrack');
    const presentacionTrack = document.getElementById('presentacionTrack');
    const vicerrectoriaTrack = document.getElementById('vicerrectoriaTrack');
    const proyeccionTrack = document.getElementById('proyeccionTrack');
    const investigacionesTrack = document.getElementById('investigacionesTrack');
    const bibliotecaTrack = document.getElementById('bibliotecaTrack');
    const calidadTrack = document.getElementById('calidadTrack');
    const talentoTrack = document.getElementById('talentoTrack');
    
    if (facultadesTrack) facultadesTrack.innerHTML = facultades.map(crearTarjetaFacultad).join('');
    if (presentacionTrack) presentacionTrack.innerHTML = videosPresentacion.map(crearTarjetaPresentacion).join('');
    if (vicerrectoriaTrack) vicerrectoriaTrack.innerHTML = videosPorSeccion.vicerrectoria.map(crearTarjetaVideo).join('');
    if (proyeccionTrack) proyeccionTrack.innerHTML = videosPorSeccion.proyeccion.map(crearTarjetaVideo).join('');
    if (investigacionesTrack) investigacionesTrack.innerHTML = videosPorSeccion.investigaciones.map(crearTarjetaVideo).join('');
    if (bibliotecaTrack) bibliotecaTrack.innerHTML = videosPorSeccion.biblioteca.map(crearTarjetaVideo).join('');
    if (calidadTrack) calidadTrack.innerHTML = videosPorSeccion.calidad.map(crearTarjetaVideo).join('');
    if (talentoTrack) talentoTrack.innerHTML = videosPorSeccion.talento.map(crearTarjetaVideo).join('');
}

// ========== BOTONES DE CARRUSEL ==========
function agregarBotonesCarrusel() {
    document.querySelectorAll('.carousel-container').forEach(container => {
        const leftBtn = document.createElement('button');
        leftBtn.innerHTML = '❮';
        leftBtn.className = 'carousel-btn left';
        const rightBtn = document.createElement('button');
        rightBtn.innerHTML = '❯';
        rightBtn.className = 'carousel-btn right';
        
        container.appendChild(leftBtn);
        container.appendChild(rightBtn);
        
        const track = container.querySelector('.carousel-track');
        
        leftBtn.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightBtn.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });
    });
}

// ========== HERO CARRUSEL ==========
let currentSlide = 0;
const slidesContainer = document.getElementById('heroSlides');
let autoInterval;

function createDots() {
    const dotsContainer = document.getElementById('heroDots');
    if (!dotsContainer) return;
    
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    if (!slidesContainer) return;
    currentSlide = index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    resetAutoSlide();
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    if (!slidesContainer) return;
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function startAutoSlide() {
    autoInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoInterval);
    startAutoSlide();
}

// ========== FILTROS DE BÚSQUEDA ==========
function configurarFiltrosBusqueda() {
    const buscarBtn = document.getElementById('buscarEstudiosBtn');
    if (!buscarBtn) return;
    
    buscarBtn.addEventListener('click', () => {
        const modalidad = document.getElementById('modalidad')?.value || '';
        const tipoPrograma = document.getElementById('tipoPrograma')?.value || '';
        const sede = document.getElementById('sede')?.value || '';
        
        const programas = [
            { nombre: "Ingeniería de Sistemas", modalidad: "presencial", tipo: "pregrado", sedes: ["bogota", "pereira"] },
            { nombre: "Derecho", modalidad: "presencial", tipo: "pregrado", sedes: ["bogota", "valledupar"] },
            { nombre: "Psicología", modalidad: "presencial", tipo: "pregrado", sedes: ["bogota", "pereira"] },
            { nombre: "Administración de Empresas", modalidad: "virtual", tipo: "pregrado", sedes: ["bogota", "medellin", "cali"] },
            { nombre: "Comunicación Social", modalidad: "presencial", tipo: "pregrado", sedes: ["bogota"] }
        ];
        
        let resultados = programas.filter(programa => {
            let coincide = true;
            if (modalidad && programa.modalidad !== modalidad) coincide = false;
            if (tipoPrograma && programa.tipo !== tipoPrograma) coincide = false;
            if (sede && !programa.sedes.includes(sede)) coincide = false;
            return coincide;
        });
        
        let mensaje = `🔍 RESULTADOS DE BÚSQUEDA\n\n`;
        if (modalidad) mensaje += `Modalidad: ${modalidad}\n`;
        if (tipoPrograma) mensaje += `Tipo: ${tipoPrograma}\n`;
        if (sede) mensaje += `Sede: ${sede}\n`;
        mensaje += `\n📚 Programas encontrados (${resultados.length}):\n`;
        resultados.forEach(r => { mensaje += `• ${r.nombre}\n`; });
        mensaje += `\n📞 Para más información: 01-8000-123456`;
        
        alert(mensaje);
    });
}

// ========== INICIALIZACIÓN ==========
function init() {
    cargarCarruseles();
    agregarBotonesCarrusel();
    createDots();
    startAutoSlide();
    configurarFiltrosBusqueda();
    
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    const searchBtn = document.getElementById('searchBtn');
    const userBtn = document.getElementById('userBtn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('🔍 Función de búsqueda global - Próximamente disponible');
        });
    }
    
    if (userBtn) {
        userBtn.addEventListener('click', () => {
            alert('👤 Inicia sesión para acceder a tu contenido personalizado');
        });
    }
    
    const correoLink = document.getElementById('correoLink');
    if (correoLink) {
        correoLink.href = '#';
    }
}

document.addEventListener('DOMContentLoaded', init);

// ========== CONFIGURAR MODAL CORRECTAMENTE ==========
function configurarModalCorrecto() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeModal');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            const iframe = document.getElementById('videoIframe');
            const video = document.getElementById('videoPlayer');
            if (iframe) iframe.src = '';
            if (video) video.pause();
        };
    }
    
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                const iframe = document.getElementById('videoIframe');
                const video = document.getElementById('videoPlayer');
                if (iframe) iframe.src = '';
                if (video) video.pause();
            }
        };
    }
    
    if (fullscreenBtn) {
        fullscreenBtn.onclick = function() {
            const iframe = document.getElementById('videoIframe');
            const video = document.getElementById('videoPlayer');
            
            if (iframe && iframe.style.display !== 'none') {
                if (iframe.requestFullscreen) iframe.requestFullscreen();
            } else if (video && video.style.display !== 'none') {
                if (video.requestFullscreen) video.requestFullscreen();
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', configurarModalCorrecto);

// ========== REDIRECCIONES PARA BOTONES DEL HEADER ==========
// ========== REDIRECCIONES PARA BOTONES DEL HEADER ==========
document.addEventListener('DOMContentLoaded', function() {
    const institucionBtn = document.querySelector('.nav-link.active');
    if (institucionBtn && institucionBtn.innerText !== 'INICIO') {
        institucionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'canal.html?tipo=institucion';
        });
    }
    
    const facultadesLinks = document.querySelectorAll('.dropdown-content a');
    facultadesLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const texto = link.innerText;
            let id = '';
            if (texto.includes('Ingeniería')) id = 'ingenieria';
            else if (texto.includes('Derecho')) id = 'derecho';
            else if (texto.includes('Económicas')) id = 'economicas';
            else if (texto.includes('Comunicación')) id = 'comunicacion';
            else if (texto.includes('Psicología')) id = 'psicologia';
            
            window.location.href = 'canal.html?tipo=facultad&id=' + id;
        });
    });
    
    setTimeout(function() {
        const facultadCards = document.querySelectorAll('.facultad-card');
        facultadCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                const nombre = card.querySelector('.facultad-name')?.innerText || '';
                let id = '';
                if (nombre.includes('Ingeniería')) id = 'ingenieria';
                else if (nombre.includes('Derecho')) id = 'derecho';
                else if (nombre.includes('Económicas')) id = 'economicas';
                else if (nombre.includes('Comunicación')) id = 'comunicacion';
                else if (nombre.includes('Psicología')) id = 'psicologia';
                
                window.location.href = 'canal.html?tipo=facultad&id=' + id;
            });
        });
    }, 500);
});

// ========== FORZAR QUE LAS FACULTADES SOLO VAYAN A CANAL.HTML ==========
setTimeout(function() {
    const facultadCards = document.querySelectorAll('.facultad-card');
    facultadCards.forEach(function(card) {
        const oldOnclick = card.getAttribute('onclick');
        if (oldOnclick && oldOnclick.includes('window.open')) {
            card.removeAttribute('onclick');
        }
        card.onclick = function(e) {
            e.stopPropagation();
            const nombre = card.querySelector('.facultad-name')?.innerText || '';
            let id = '';
            if (nombre.includes('Ingeniería')) id = 'ingenieria';
            else if (nombre.includes('Derecho')) id = 'derecho';
            else if (nombre.includes('Económicas')) id = 'economicas';
            else if (nombre.includes('Comunicación')) id = 'comunicacion';
            else if (nombre.includes('Psicología')) id = 'psicologia';
            
            window.location.href = 'canal.html?tipo=facultad&id=' + id;
        };
    });
}, 500);

// ========== NAVEGACIÓN SUAVE ENTRE PÁGINAS ==========
document.addEventListener('click', function(e) {
    let link = e.target.closest('a');
    if (!link) return;
    
    let url = link.getAttribute('href');
    if (!url) return;
    
    if (url.startsWith('http') || url.startsWith('#') || url === '' || url.includes('.pdf') || url.includes('.mp4')) {
        return;
    }
    
    e.preventDefault();
    mostrarCarga();
    window.history.pushState({}, '', url);
    cargarPagina(url);
});

function cargarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const nuevoBody = doc.body.innerHTML;
            const nuevoTitulo = doc.querySelector('title')?.innerText || 'Areandina Play';
            document.title = nuevoTitulo;
            
            const contenidoPrincipal = document.querySelector('.hero-carousel')?.parentElement || document.body;
            contenidoPrincipal.style.transition = 'opacity 0.3s ease';
            contenidoPrincipal.style.opacity = '0';
            
            setTimeout(() => {
                document.body.innerHTML = nuevoBody;
                reinicializarScripts();
                document.body.style.animation = 'fadeIn 0.3s ease';
                ocultarCarga();
            }, 300);
        })
        .catch(error => {
            console.error('Error cargando página:', error);
            window.location.href = url;
        });
}

function mostrarCarga() {
    let loader = document.getElementById('pageLoader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'pageLoader';
        loader.innerHTML = `<div style="position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: #7fb536; z-index: 10000; animation: loadingProgress 1s ease; transform-origin: left;"></div>`;
        document.body.appendChild(loader);
        
        if (!document.querySelector('#loaderStyles')) {
            const style = document.createElement('style');
            style.id = 'loaderStyles';
            style.textContent = `@keyframes loadingProgress { 0% { transform: scaleX(0); } 50% { transform: scaleX(0.7); } 100% { transform: scaleX(1); } }`;
            document.head.appendChild(style);
        }
    }
}

function ocultarCarga() {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.remove();
}

function reinicializarScripts() {
    if (typeof cargarCarruseles === 'function') cargarCarruseles();
    if (typeof agregarBotonesCarrusel === 'function') agregarBotonesCarrusel();
    if (typeof configurarModalCorrecto === 'function') configurarModalCorrecto();
    
    setTimeout(function() {
        const facultadCards = document.querySelectorAll('.facultad-card');
        facultadCards.forEach(function(card) {
            card.onclick = function(e) {
                e.stopPropagation();
                const nombre = card.querySelector('.facultad-name')?.innerText || '';
                let id = '';
                if (nombre.includes('Ingeniería')) id = 'ingenieria';
                else if (nombre.includes('Derecho')) id = 'derecho';
                else if (nombre.includes('Económicas')) id = 'economicas';
                else if (nombre.includes('Comunicación')) id = 'comunicacion';
                else if (nombre.includes('Psicología')) id = 'psicologia';
                window.location.href = 'canal.html?tipo=facultad&id=' + id;
            };
        });
    }, 100);
}

window.addEventListener('popstate', function() {
    cargarPagina(window.location.href);
});

// ========== BARRA DE CARGA PROFESIONAL ==========
function crearBarraCarga() {
    if (!document.getElementById('cargaBarra')) {
        const barraHTML = `<div id="cargaBarra" style="position: fixed; top: 0; left: 0; width: 0%; height: 4px; background: linear-gradient(90deg, #7fb536, #e6007e, #f59c2f); z-index: 10000; transition: width 0.3s ease; box-shadow: 0 0 10px rgba(230,0,126,0.5);"></div>`;
        document.body.insertAdjacentHTML('beforeend', barraHTML);
    }
}

function iniciarCarga() {
    const barra = document.getElementById('cargaBarra');
    if (barra) {
        barra.style.width = '30%';
        setTimeout(() => { if (barra) barra.style.width = '70%'; }, 150);
        setTimeout(() => { if (barra) barra.style.width = '90%'; }, 300);
    }
}

function completarCarga() {
    const barra = document.getElementById('cargaBarra');
    if (barra) {
        barra.style.width = '100%';
        setTimeout(() => { if (barra) barra.style.width = '0%'; }, 500);
    }
}

document.addEventListener('click', function(e) {
    let link = e.target.closest('a');
    if (!link) return;
    let url = link.getAttribute('href');
    if (!url) return;
    if (url.startsWith('http') || url.startsWith('#') || url === '' || url.includes('.pdf') || url.includes('.mp4')) return;
    e.preventDefault();
    crearBarraCarga();
    iniciarCarga();
    setTimeout(() => { window.location.href = url; }, 800);
});

window.addEventListener('load', function() { completarCarga(); });
window.addEventListener('pageshow', function() { completarCarga(); });

// ========== VOLVER AL INICIO CON ANIMACIÓN ==========
function irAlInicioSuave() {
    const duracion = 600;
    const inicio = window.pageYOffset;
    const inicioTiempo = performance.now();
    
    function animacionScroll(ahora) {
        const tiempoPasado = ahora - inicioTiempo;
        const progreso = Math.min(tiempoPasado / duracion, 1);
        const easeOutCubic = 1 - Math.pow(1 - progreso, 3);
        const posicion = inicio * (1 - easeOutCubic);
        window.scrollTo(0, posicion);
        if (tiempoPasado < duracion) requestAnimationFrame(animacionScroll);
    }
    requestAnimationFrame(animacionScroll);
}

window.onload = function() { setTimeout(() => { irAlInicioSuave(); }, 50); };
window.addEventListener('pageshow', function() { setTimeout(() => { irAlInicioSuave(); }, 50); });

// ========== ARREGLAR TODOS LOS BOTONES DEL HEADER ==========
document.addEventListener('DOMContentLoaded', function() {
    const todosLosBotones = document.querySelectorAll('.nav-link');
    
    for (let i = 0; i < todosLosBotones.length; i++) {
        const boton = todosLosBotones[i];
        const texto = boton.innerText;
        
        if (texto === 'NUESTRA INSTITUCIÓN') {
            boton.onclick = function(e) { e.preventDefault(); window.location.href = 'canal.html?tipo=institucion'; };
        }
        else if (texto === 'INVESTIGACIONES') {
            boton.onclick = function(e) { e.preventDefault(); window.location.href = 'seccion.html?seccion=investigaciones'; };
        }
        else if (texto === 'BIBLIOTECA') {
            boton.onclick = function(e) { e.preventDefault(); window.location.href = 'seccion.html?seccion=biblioteca'; };
        }
    }
    
    const facultadesLinks = document.querySelectorAll('.dropdown-content a');
    for (let i = 0; i < facultadesLinks.length; i++) {
        facultadesLinks[i].onclick = function(e) {
            e.preventDefault();
            const texto = this.innerText;
            let id = '';
            if (texto.indexOf('Ingeniería') !== -1) id = 'ingenieria';
            else if (texto.indexOf('Derecho') !== -1) id = 'derecho';
            else if (texto.indexOf('Económicas') !== -1) id = 'economicas';
            else if (texto.indexOf('Comunicación') !== -1) id = 'comunicacion';
            else if (texto.indexOf('Psicología') !== -1) id = 'psicologia';
            window.location.href = 'canal.html?tipo=facultad&id=' + id;
        };
    }
    
    const masLinks = document.querySelectorAll('.nav-item:last-child .dropdown-content a');
    for (let i = 0; i < masLinks.length; i++) {
        masLinks[i].onclick = function(e) {
            e.preventDefault();
            const opcion = this.innerText;
            if (opcion === 'Talento Humano') window.location.href = 'seccion.html?seccion=talento';
            else if (opcion === 'Bienestar Universitario') window.location.href = 'seccion.html?seccion=bienestar';
            else if (opcion === 'Internacionalización') window.location.href = 'seccion.html?seccion=internacional';
            else if (opcion === 'Egresados') window.location.href = 'seccion.html?seccion=egresados';
            else alert('📌 ' + opcion + ' - Próximamente disponible');
        };
    }
});

// ========== MASCOTA INTERACTIVA ==========
function iniciarMascota() {
    const mascota = document.getElementById('mascota');
    const mensaje = document.getElementById('mensajeMascota');
    if (!mascota) return;
    
    const mensajes = ['¡Hola! 👋', '¿Estudiaste hoy? 📚', '¡Sé transformador! ✨', 'Visita la biblioteca 📖', 'Escucha nuestra radio 🎧', '¡Tú puedes! 💪', '¿Viste los nuevos videos? 🎬', 'Explora las facultades 🎓', 'Conoce los eventos 📅', '¡Éxito en tus estudios! 🌟'];
    let mensajeIndex = 0;
    let timeoutMensaje;
    
    mascota.addEventListener('mouseenter', () => {
        if (timeoutMensaje) clearTimeout(timeoutMensaje);
        mensaje.style.display = 'block';
        mensaje.innerText = mensajes[mensajeIndex % mensajes.length];
        mensajeIndex++;
    });
    
    mascota.addEventListener('mouseleave', () => {
        timeoutMensaje = setTimeout(() => { mensaje.style.display = 'none'; }, 500);
    });
    
    mascota.addEventListener('click', () => {
        alert('🎓 ¡Hola! Soy la mascota de Areandina. Explora todo el contenido educativo de nuestra universidad.');
    });
    
    setInterval(() => {
        mascota.style.transform = 'scale(1.1)';
        setTimeout(() => { mascota.style.transform = 'scale(1)'; }, 300);
    }, 30000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarMascota);
} else {
    iniciarMascota();
}

// ========== RADIO MINI PLAYER COMPACTO ==========
function iniciarRadioMini() {
    const playBtn = document.getElementById('playPauseMiniBtn');
    const audio = document.getElementById('radioMiniAudio');
    const radioSong = document.getElementById('radioMiniSong');
    const radioWave = document.getElementById('radioMiniWave');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeBtn = document.getElementById('volumeBtn');
    
    if (!playBtn) return;
    
    const streamURL = 'https://servidor24-1.brlogic.com:7030/live?source=website';
    let reproduciendo = false;
    
    audio.src = streamURL;
    audio.preload = 'none';
    audio.volume = 0.7;
    
    playBtn.addEventListener('click', () => {
        if (!reproduciendo) {
            audio.play();
            reproduciendo = true;
            playBtn.innerHTML = '⏸';
            radioSong.innerHTML = '🎧 Escuchando en vivo...';
            radioWave.style.opacity = '1';
        } else {
            audio.pause();
            reproduciendo = false;
            playBtn.innerHTML = '▶';
            radioSong.innerHTML = '📻 TOCANDO AHORA';
            radioWave.style.opacity = '0.5';
        }
    });
    
    volumeSlider.addEventListener('input', (e) => {
        const volumen = e.target.value / 100;
        audio.volume = volumen;
        if (volumen == 0) volumeBtn.innerHTML = '🔇';
        else if (volumen < 0.3) volumeBtn.innerHTML = '🔈';
        else volumeBtn.innerHTML = '🔊';
    });
    
    let muteState = false;
    let lastVolume = 70;
    
    volumeBtn.addEventListener('click', () => {
        if (!muteState) {
            lastVolume = volumeSlider.value;
            audio.volume = 0;
            volumeSlider.value = 0;
            volumeBtn.innerHTML = '🔇';
            muteState = true;
        } else {
            audio.volume = lastVolume / 100;
            volumeSlider.value = lastVolume;
            volumeBtn.innerHTML = '🔊';
            muteState = false;
        }
    });
    
    audio.addEventListener('error', () => {
        reproduciendo = false;
        playBtn.innerHTML = '▶';
        radioSong.innerHTML = '⚠️ Radio offline';
        radioWave.style.opacity = '0.3';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarRadioMini);
} else {
    iniciarRadioMini();
}

// ========== AGREGAR NUEVAS SECCIONES AL CARRUSEL ==========
function cargarNuevasSecciones() {
    const graduacionesTrack = document.getElementById('graduacionesTrack');
    const innovacionTrack = document.getElementById('innovacionTrack');
    const realidadesTrack = document.getElementById('realidadesTrack');
    const bienestarTrack = document.getElementById('bienestarTrack');
    
    const videosPreview = {
        graduaciones: [
            { titulo: "Graduación Bogotá", thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { titulo: "Graduación Pereira", thumb: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ],
        innovacion: [
            { titulo: "Capacitación Ceita", thumb: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ],
        realidades: [
            { titulo: "Realidad Virtual", thumb: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ],
        bienestar: [
            { titulo: "Salud Mental", thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop", preview: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop&blur=100", urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    };
    
    function crearTarjetaPreview(video) {
        return `<div class="video-card" onclick="reproducirVideo('${video.urlVideo}', '${video.titulo}')">
                    <div class="video-thumb-container">
                        <img src="${video.thumb}" class="video-thumb">
                        <img src="${video.preview}" class="video-preview">
                    </div>
                    <div class="video-info">
                        <div class="video-title">${video.titulo}</div>
                        <div class="video-meta">📺 ${video.vistas} vistas</div>
                    </div>
                </div>`;
    }
    
    if (graduacionesTrack) graduacionesTrack.innerHTML = videosPreview.graduaciones.map(crearTarjetaPreview).join('');
    if (innovacionTrack) innovacionTrack.innerHTML = videosPreview.innovacion.map(crearTarjetaPreview).join('');
    if (realidadesTrack) realidadesTrack.innerHTML = videosPreview.realidades.map(crearTarjetaPreview).join('');
    if (bienestarTrack) bienestarTrack.innerHTML = videosPreview.bienestar.map(crearTarjetaPreview).join('');
}

setTimeout(cargarNuevasSecciones, 500);

// ========== BUSCADOR ÚNICO Y CORREGIDO ==========
function iniciarBuscadorUnico() {
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    
    if (!searchInput) {
        console.log('❌ Buscador no encontrado');
        return;
    }
    
    console.log('✅ Buscador iniciado correctamente');
    
    function obtenerVideosActuales() {
        const videos = [];
        
        document.querySelectorAll('.video-card').forEach(card => {
            const tituloElem = card.querySelector('.video-title');
            const titulo = tituloElem ? tituloElem.innerText : '';
            const onclickAttr = card.getAttribute('onclick');
            let url = '';
            if (onclickAttr) {
                const match = onclickAttr.match(/reproducirVideo\('([^']+)'/);
                if (match) url = match[1];
            }
            if (titulo && titulo !== '') {
                videos.push({ titulo, url, tipo: 'video' });
            }
        });
        
        document.querySelectorAll('.presentacion-card').forEach(card => {
            const tituloElem = card.querySelector('.presentacion-title');
            const titulo = tituloElem ? tituloElem.innerText : '';
            const onclickAttr = card.getAttribute('onclick');
            let url = '';
            if (onclickAttr) {
                const match = onclickAttr.match(/reproducirVideo\('([^']+)'/);
                if (match) url = match[1];
            }
            if (titulo && titulo !== '') {
                videos.push({ titulo, url, tipo: 'presentacion' });
            }
        });
        
        console.log('📹 Videos encontrados:', videos.length);
        return videos;
    }
    
    let videos = obtenerVideosActuales();
    
    const observer = new MutationObserver(() => {
        videos = obtenerVideosActuales();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    searchInput.addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase().trim();
        
        if (termino.length < 2) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        const resultados = videos.filter(v => v.titulo.toLowerCase().includes(termino));
        
        if (resultados.length > 0) {
            searchDropdown.innerHTML = resultados.map(v => `
                <div class="search-dropdown-item" onclick="reproducirVideo('${v.url}', '${v.titulo}')">
                    <div style="padding: 10px;">
                        <div style="font-weight:500; font-size:0.85rem;">${v.titulo}</div>
                        <div style="font-size:0.7rem; color:#7fb536; margin-top:3px;">${v.tipo === 'presentacion' ? '🎬 Video de presentación' : '🎥 Video'}</div>
                    </div>
                </div>
            `).join('');
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.innerHTML = '<div class="search-dropdown-item" style="padding:10px;">🔍 No se encontraron resultados</div>';
            searchDropdown.style.display = 'block';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarBuscadorUnico);
} else {
    iniciarBuscadorUnico();
}

// ========== HEADER FUNCIONAL ==========
function headerFuncional() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    
    navLinks.forEach(link => {
        const texto = link.innerText.trim();
        
        if (texto === 'INICIO' || texto === 'NUESTRA INSTITUCIÓN') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }
        else if (texto === 'GRADUACIONES') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'seccion.html?seccion=graduaciones';
            });
        }
        else if (texto === 'INNOVACIÓN') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'seccion.html?seccion=innovacion';
            });
        }
        else if (texto === 'BIENESTAR') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'seccion.html?seccion=bienestar';
            });
        }
        else if (texto === 'REALIDADES EXTENDIDAS') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'seccion.html?seccion=realidades';
            });
        }
    });
    
    const facultadesLinks = document.querySelectorAll('.dropdown-content a');
    facultadesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const texto = link.innerText;
            let id = '';
            if (texto.includes('Ingeniería')) id = 'ingenieria';
            else if (texto.includes('Derecho')) id = 'derecho';
            else if (texto.includes('Económicas')) id = 'economicas';
            else if (texto.includes('Comunicación')) id = 'comunicacion';
            else if (texto.includes('Psicología')) id = 'psicologia';
            
            window.location.href = `seccion.html?seccion=facultad&id=${id}`;
        });
    });
}

headerFuncional();
// ========== MODO OSCURO ==========
function iniciarModoOscuro() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.log('❌ Botón themeToggle no encontrado');
        return;
    }
    
    // Cargar preferencia guardada
    const modoOscuro = localStorage.getItem('darkMode') === 'true';
    
    if (modoOscuro) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }
    
    // Evento del botón con animación
    themeToggle.onclick = function() {
        const isDark = document.body.classList.toggle('dark-mode');
        
        // Animación del icono
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => { 
            if (themeToggle) themeToggle.style.transform = 'rotate(0deg)'; 
        }, 300);
        
        // Cambiar icono
        this.innerHTML = isDark ? '☀️' : '🌙';
        
        // Guardar preferencia
        localStorage.setItem('darkMode', isDark);
    };
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarModoOscuro);
} else {
    iniciarModoOscuro();
}
// ========== CONTADOR DE VISITAS POR VIDEO ==========
function registrarVisita(tituloVideo) {
    console.log('Registrando visita para:', tituloVideo);
    
    // Obtener localStorage
    let visitasGuardadas = localStorage.getItem('visitasVideo');
    let visitasMap = {};
    
    if (visitasGuardadas) {
        try {
            visitasMap = JSON.parse(visitasGuardadas);
        } catch(e) {}
    }
    
    // Incrementar
    const nuevaCantidad = (visitasMap[tituloVideo] || 0) + 1;
    visitasMap[tituloVideo] = nuevaCantidad;
    
    // Guardar
    localStorage.setItem('visitasVideo', JSON.stringify(visitasMap));
    
    console.log(`📊 "${tituloVideo}" ahora tiene ${nuevaCantidad} visitas`);
    
    // Actualizar en pantalla
    const visitasTexto = nuevaCantidad >= 1000 ? (nuevaCantidad/1000).toFixed(1) + 'k' : nuevaCantidad;
    
    // Buscar por el título
    document.querySelectorAll('.video-card').forEach(tarjeta => {
        const tituloElem = tarjeta.querySelector('.video-title');
        if (tituloElem && tituloElem.innerText === tituloVideo) {
            const metaElem = tarjeta.querySelector('.video-meta');
            if (metaElem) {
                metaElem.innerHTML = `📺 ${visitasTexto} vistas`;
            }
        }
    });
}

// Modificar la función reproducirVideo original
function envolverReproducirVideo() {
    if (typeof window.reproducirVideo === 'function') {
        const original = window.reproducirVideo;
        window.reproducirVideo = function(url, titulo) {
            registrarVisita(titulo);
            return original(url, titulo);
        };
    }
}

// Ejecutar después de que las funciones estén cargadas
setTimeout(envolverReproducirVideo, 500);
// Forzar que al cargar la página se muestren las vistas guardadas
function actualizarTodasLasVistas() {
    const visitasGuardadas = localStorage.getItem('visitasVideo');
    if (!visitasGuardadas) return;
    
    try {
        const visitasMap = JSON.parse(visitasGuardadas);
        
        document.querySelectorAll('.video-card').forEach(tarjeta => {
            const tituloElem = tarjeta.querySelector('.video-title');
            if (tituloElem) {
                const titulo = tituloElem.innerText;
                const visitas = visitasMap[titulo] || 0;
                const visitasTexto = visitas >= 1000 ? (visitas/1000).toFixed(1) + 'k' : visitas;
                
                const metaElem = tarjeta.querySelector('.video-meta');
                if (metaElem) {
                    metaElem.innerHTML = `📺 ${visitasTexto} vistas`;
                }
            }
        });
    } catch(e) {}
}

// Ejecutar después de cargar los carruseles
setTimeout(actualizarTodasLasVistas, 500);
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TRADUCCIONES (Diccionario Completo) ---
    const translations = {
        es: {
            nav_home: "Inicio", nav_about: "Perfil", nav_stack: "Stack", nav_projects: "Proyectos", nav_contact: "Contacto",
            hero_greeting: "Hola, soy",
            hero_subtitle: "Ingeniería & <span class=\"text-gradient\">Código Limpio</span>.",
            hero_bio: "Estudiante de Ingeniería Informática enfocado en crear soluciones robustas. Especializado en transformar datos complejos y algoritmos en aplicaciones funcionales y seguras.",
            hero_btn_cv: "Descargar CV <i class=\"fas fa-download\"></i>",
            about_title: "Sobre Mí",
            about_p1: "Más allá del código, soy un <strong>solucionador de problemas</strong>. Mi trayectoria en la UCLM me ha dado la base teórica, pero mi curiosidad autodidacta es lo que me impulsa a dominar tecnologías como Python para Data Science o C++ para optimización.",
            about_p2: "Me apasiona encontrar el equilibrio entre la <strong>seguridad</strong> (hacking ético) y la <strong>usabilidad</strong>. No me limito a \"hacer que funcione\", busco que sea escalable y eficiente.",
            skills_title: "Stack Tecnológico",
            skills_cat_core: "Lenguajes Core",
            skills_cat_web: "Web & Datos",
            skills_cat_tools: "Herramientas & Seguridad",
            path_title: "Mi Camino",
            path_item1_date: "2022 - Actualidad",
            path_item1_title: "Grado en Ingeniería Informática",
            path_item1_desc: "Último curso. Especialización en Arquitectura del Software, Sistemas Distribuidos y Ciberseguridad.",
            path_item2_date: "2020 - 2022",
            path_item2_title: "Bachillerato de Ciencias",
            path_item2_desc: "Excelencia académica en ramas matemáticas y físicas.",
            projects_title: "Proyectos Destacados",
            filter_all: "Todos", filter_dev: "Software & Data", filter_web: "Web", filter_game: "Juegos",
            tech_security: "Seguridad", tech_distributed: "Distribuidos",
            proj_agritech_desc: "Plataforma de inteligencia de negocios para el sector agrícola. Recomienda momentos de siembra basados en análisis de datos históricos.",
            proj_dist_title: "Sistemas Distribuidos",
            proj_dist_desc: "Middleware de comunicación orientado a objetos y colas de mensajes. Implementación robusta de patrones distribuidos.",
            proj_gramola_desc: "Sistema de gestión musical enfocado en Patrones de Diseño (GoF) y Arquitectura de Software robusta y mantenible.",
            proj_sec_title: "Auditoría & Exploits CVE",
            proj_sec_desc: "Investigación de vulnerabilidades (CVEs). Desarrollo de scripts de explotación en entornos controlados y documentación de parches.",
            proj_media_desc: "Reproductor de vídeo/audio con implementación propia de algoritmos de compresión para optimizar almacenamiento.",
            proj_iker_title: "Web Asociación Iker",
            proj_iker_desc: "Portal web para ONG con gestión de usuarios y optimización UX/UI. Implementación personalizada sobre CMS.",
            proj_poke_desc: "Motor de juego 2D con animaciones pixel-art propias y sistema de combate por turnos programado desde cero.",
            proj_soko_desc: "Recreación del clásico puzle implementando lógica de matrices para movimiento y detección de victorias.",
            private_note: "* Algunos proyectos están alojados en repositorios privados universitarios. El código fuente está disponible bajo petición.",
            contact_title: "¿Hablamos?",
            contact_text: "Estoy buscando activamente oportunidades para iniciar mi carrera profesional. Si buscas un perfil técnico con ganas de aprender y aportar, contáctame.",
            contact_call: "Llamar",
            footer_text: "Diseñado y Desarrollado por Víctor Astray &copy; 2026"
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_stack: "Stack", nav_projects: "Projects", nav_contact: "Contact",
            hero_greeting: "Hi, I am",
            hero_subtitle: "Engineering & <span class=\"text-gradient\">Clean Code</span>.",
            hero_bio: "Computer Engineering student focused on building robust solutions. Specialized in transforming complex data and algorithms into functional and secure applications.",
            hero_btn_cv: "Download Resume <i class=\"fas fa-download\"></i>",
            about_title: "About Me",
            about_p1: "Beyond code, I am a <strong>problem solver</strong>. My path at UCLM gave me the theoretical foundation, but my self-taught curiosity drives me to master technologies like Python for Data Science or C++ for optimization.",
            about_p2: "I am passionate about finding the balance between <strong>security</strong> (ethical hacking) and <strong>usability</strong>. I don't just \"make it work\", I aim for scalability and efficiency.",
            skills_title: "Tech Stack",
            skills_cat_core: "Core Languages",
            skills_cat_web: "Web & Data",
            skills_cat_tools: "Tools & Security",
            path_title: "My Path",
            path_item1_date: "2022 - Present",
            path_item1_title: "Computer Engineering Degree",
            path_item1_desc: "Final year. Specialization in Software Architecture, Distributed Systems, and Cybersecurity.",
            path_item2_date: "2020 - 2022",
            path_item2_title: "Science Baccalaureate",
            path_item2_desc: "Academic excellence in mathematical and physical branches.",
            projects_title: "Featured Projects",
            filter_all: "All", filter_dev: "Software & Data", filter_web: "Web", filter_game: "Games",
            tech_security: "Security", tech_distributed: "Distributed",
            proj_agritech_desc: "Business intelligence platform for the agricultural sector. Recommends planting times based on historical data analysis.",
            proj_dist_title: "Distributed Systems",
            proj_dist_desc: "Object-oriented communication middleware and message queues. Robust implementation of distributed patterns.",
            proj_gramola_desc: "Music management system focused on Design Patterns (GoF) and robust, maintainable Software Architecture.",
            proj_sec_title: "CVE Audit & Exploits",
            proj_sec_desc: "Vulnerability research (CVEs). Development of exploitation scripts in controlled environments and patch documentation.",
            proj_media_desc: "Video/audio player with custom compression algorithm implementation to optimize storage.",
            proj_iker_title: "Iker Association Web",
            proj_iker_desc: "Web portal for NGO with user management and UX/UI optimization. Custom CMS implementation.",
            proj_poke_desc: "2D game engine with custom pixel-art animations and turn-based combat system programmed from scratch.",
            proj_soko_desc: "Recreation of the classic puzzle implementing matrix logic for movement and victory detection.",
            private_note: "* Some projects are hosted in private university repositories. Source code available upon request.",
            contact_title: "Let's Talk?",
            contact_text: "I am actively looking for opportunities to start my professional career. If you are looking for a technical profile eager to learn and contribute, contact me.",
            contact_call: "Call",
            footer_text: "Designed & Developed by Víctor Astray &copy; 2026"
        }
    };

    let currentLang = 'es';

    // --- 2. CAMBIO DE IDIOMA ---
    const langBtn = document.getElementById('lang-toggle');
    const langText = langBtn.querySelector('.lang-text');

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langText.textContent = currentLang.toUpperCase();
        updateTexts(currentLang);
    });

    function updateTexts(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // --- 3. MODO DÍA/NOCHE ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if(document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // --- 4. FILTRADO DE PROYECTOS ---
    const projectItems = document.querySelectorAll('.project-item');
    const categoryBtns = document.querySelectorAll('.filter-btn');
    const techBtns = document.querySelectorAll('.tech-btn');

    function filterProjects(type, value) {
        projectItems.forEach(item => {
            let match = false;
            
            if (type === 'category') {
                if (value === 'all' || item.getAttribute('data-category') === value) match = true;
            } else if (type === 'tech') {
                const itemTechs = item.getAttribute('data-tech');
                if (itemTechs && itemTechs.includes(value)) match = true;
            }

            if (match) {
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            techBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects('category', btn.getAttribute('data-filter'));
        });
    });

    techBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            techBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects('tech', btn.getAttribute('data-tech'));
        });
    });

    // --- 5. MENÚ MÓVIL ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px';
                navMenu.style.right = '0';
                // Color dinámico según modo
                const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-dark');
                navMenu.style.background = bgColor;
                navMenu.style.width = '100%';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // --- 6. SCROLL REVEAL ---
    const revealElements = document.querySelectorAll('.section, .project-item');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
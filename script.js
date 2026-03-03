/* ════════════════════════════════════════════════════
   PORTFOLIO — Víctor Astray
   script.js
════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    /* ─────────────────────────────────────
       1. TRANSLATIONS
    ───────────────────────────────────── */
    const T = {
        es: {
            nav_home: 'Inicio',
            nav_about: 'Sobre mí',
            nav_stack: 'Skills',
            nav_projects: 'Proyectos',
            nav_contact: 'Contacto',
            hero_badge: '💼 Disponible para oportunidades',
            hero_greeting: 'Hola, soy',
            hero_role_prefix: 'Apasionado del ',
            hero_bio: 'Estudiante de Ingeniería Informática en la UCLM. Me gusta un poco de todo: frontend, backend, Python, Java... Disfruto del proceso completo de construir algo desde cero hasta que quede bien.',
            hero_cv: '<i class="fas fa-download"></i> Descargar CV',
            hero_projects_btn: 'Ver proyectos <i class="fas fa-arrow-right"></i>',
            hero_scroll: 'Scroll',
            stat_projects: 'Proyectos',
            stat_languages: 'Lenguajes',
            stat_years: 'Años cod.',
            stat_areas: 'Áreas',
            about_tag: '// sobre mí',
            about_title: 'Quién Soy',
            about_p1: 'Soy un desarrollador <strong>versátil y polivalente</strong>. Más que especializarme en una sola área, disfruto del proceso completo: diseñar la interfaz, construir el backend, modelar los datos y hacer que todo funcione junto. Si algo me tiene que definir, es que <strong>me encanta el frontend</strong> \u2014 me apasiona que las aplicaciones se sientan bien.',
            about_p2: 'Trabajo con fluidez en <strong>Python y Java</strong> (Spring Boot, Angular) y me siento cómodo tanto en el lado del cliente como del servidor. He trabajado en proyectos de <strong>Data Engineering</strong>, aplicaciones fullstack con integraciones externas (Spotify, Stripe) y herramientas de análisis de datos. Busco un equipo donde pueda seguir creciendo y aportar desde el día uno.',
            about_fact1: 'Grado en Ing. Informática — UCLM (2022–2026)',
            about_fact2: 'Frontend · Backend · Python · Java',
            about_fact3: 'Albacete, España · Inglés B2',
            skills_tag: '// stack técnico',
            skills_title: 'Tecnologías',
            skills_cat_core: '<i class="fas fa-code"></i> Lenguajes',
            skills_cat_frameworks: '<i class="fas fa-layer-group"></i> Frameworks & Datos',
            skills_cat_tools: '<i class="fas fa-tools"></i> Herramientas',
            skills_proficiency: '<i class="fas fa-chart-bar"></i> Nivel de dominio',
            path_tag: '// trayectoria',
            path_title: 'Mi Camino',
            path_date1: '2022 — Actualidad',
            path_title1: 'Grado en Ingeniería Informática',
            path_desc1: 'Último curso. Especialización en Arquitectura del Software, Sistemas Distribuidos, Bases de Datos Avanzadas y Ciberseguridad.',
            path_date2: '2020 — 2022',
            path_title2: 'Bachillerato de Ciencias',
            path_desc2: 'Excelencia académica en ramas matemáticas y físicas. Primer contacto con la programación.',
            proj_tag: '// proyectos',
            proj_title: 'Proyectos Destacados',
            filter_all: 'Todos',
            filter_dev: 'Backend & Data',
            filter_web: 'Web & Fullstack',
            filter_game: 'Juegos',
            filter_sec: 'Seguridad',
            badge_featured: '★ Destacado',
            badge_private: '<i class="fas fa-lock"></i> Privado',
            proj_gramola_desc: 'Aplicación fullstack de música on-demand con integración de <strong>Spotify API</strong> y pagos con <strong>Stripe</strong>. Backend en Spring Boot (Java 17) y Frontend en Angular. Incluye pruebas E2E con Selenium y modo mock para desarrollo sin credenciales.',
            proj_spotify_desc: 'Data Warehouse completo para análisis de datos de Spotify. Pipeline ETL con Python que procesa CSVs y carga tablas dimensionales y de hechos en MySQL. Consultas OLAP avanzadas para inteligencia de negocio.',
            proj_agritech_desc: 'Plataforma de inteligencia de negocio para agricultores y cooperativas. Analiza datos climáticos y de mercado para recomendar momentos óptimos de siembra y venta, maximizando la rentabilidad.',
            proj_dist_title: 'Sistemas Distribuidos',
            proj_dist_desc: 'Middleware de comunicación orientado a objetos con ZeroC Ice y colas de mensajes con Kafka. Implementación de patrones distribuidos robustos para entornos de alta concurrencia.',
            proj_sec_title: 'Auditoría & Exploits CVE',
            proj_sec_desc: 'Investigación y explotación de vulnerabilidades reales (CVEs) en entornos controlados. Scripts de explotación con documentación de vectores de ataque y parches de mitigación.',
            proj_media_desc: 'Reproductor de vídeo y audio con implementación propia de algoritmos de compresión (RLE, Huffman) para optimizar almacenamiento sin dependencias externas.',
            proj_iker_title: 'Web Asociación Iker',
            proj_iker_desc: 'Portal web para ONG con gestión de usuarios, roles y contenido. Optimización UX/UI e implementación personalizada sobre CMS para facilitar la gestión no técnica.',
            proj_poke_desc: 'Motor de juego 2D con animaciones pixel-art propias y sistema de combate por turnos programado desde cero, sin game engine. Gestión de estados y eventos personalizada.',
            proj_soko_desc: 'Recreación del clásico puzle Sokoban con lógica de matrices 2D para movimiento, detección de colisiones y sistema de victorias. Interfaz por terminal y gráfica.',
            proj_ipokemon_desc: 'Aplicación de escritorio en <strong>C# / .NET MAUI</strong> con menú lateral, Pokédex personal, fichas detalladas de Pokémon (stats, evolución, descripción) y sistema de <strong>combate por turnos</strong> con IA. Incluye demo web interactiva.',
            demo_btn: '▶ Demo',
            private_note: '<i class="fas fa-info-circle"></i> Los proyectos marcados como "Privado" están en repositorios universitarios. El código fuente está disponible bajo petición.',
            contact_tag: '// contacto',
            contact_title: '¿Hablamos?',
            contact_text: 'Estoy buscando activamente nuevas oportunidades profesionales. Si buscas un perfil técnico con ganas de aprender y aportar, escríbeme.',
            contact_email_label: 'Email',
            contact_phone_label: 'Teléfono',
            footer_text: 'Diseñado & Desarrollado por Víctor Astray &copy; 2026',
            typewriter_roles: ['Frontend Development', 'Backend Development', 'Python & Java', 'Proyectos Fullstack', 'Data Engineering'],
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_stack: 'Skills',
            nav_projects: 'Projects',
            nav_contact: 'Contact',
            hero_badge: '💼 Open to opportunities',
            hero_greeting: 'Hi, I\'m',
            hero_role_prefix: 'Passionate about ',
            hero_bio: 'Computer Engineering student at UCLM. I enjoy a bit of everything: frontend, backend, Python, Java... I love the full process of building something from scratch until it feels right.',
            hero_cv: '<i class="fas fa-download"></i> Download CV',
            hero_projects_btn: 'View projects <i class="fas fa-arrow-right"></i>',
            hero_scroll: 'Scroll',
            stat_projects: 'Projects',
            stat_languages: 'Languages',
            stat_years: 'Years cod.',
            stat_areas: 'Areas',
            about_tag: '// about me',
            about_title: 'Who I Am',
            about_p1: 'I\'m a <strong>versatile and well-rounded developer</strong>. Rather than specializing in one area, I enjoy the full process: designing the interface, building the backend, modeling data and making everything work together. If something defines me, it\'s that <strong>I love frontend</strong> \u2014 I care about how applications feel.',
            about_p2: 'I work fluently with <strong>Python and Java</strong> (Spring Boot, Angular) and I\'m comfortable on both the client and server side. I\'ve worked on <strong>Data Engineering</strong> projects, fullstack applications with external integrations (Spotify, Stripe), and data analysis tools. I\'m looking for a team where I can keep growing and contribute from day one.',
            about_fact1: 'Computer Engineering Degree — UCLM (2022–2026)',
            about_fact2: 'Frontend · Backend · Python · Java',
            about_fact3: 'Albacete, Spain · English B2',
            skills_tag: '// tech stack',
            skills_title: 'Technologies',
            skills_cat_core: '<i class="fas fa-code"></i> Languages',
            skills_cat_frameworks: '<i class="fas fa-layer-group"></i> Frameworks & Data',
            skills_cat_tools: '<i class="fas fa-tools"></i> Tools',
            skills_proficiency: '<i class="fas fa-chart-bar"></i> Proficiency level',
            path_tag: '// timeline',
            path_title: 'My Journey',
            path_date1: '2022 — Present',
            path_title1: 'Computer Engineering Degree',
            path_desc1: 'Final year. Specialization in Software Architecture, Distributed Systems, Advanced Databases and Cybersecurity.',
            path_date2: '2020 — 2022',
            path_title2: 'Science Baccalaureate',
            path_desc2: 'Academic excellence in mathematics and physics. First contact with programming.',
            proj_tag: '// projects',
            proj_title: 'Featured Projects',
            filter_all: 'All',
            filter_dev: 'Backend & Data',
            filter_web: 'Web & Fullstack',
            filter_game: 'Games',
            filter_sec: 'Security',
            badge_featured: '★ Featured',
            badge_private: '<i class="fas fa-lock"></i> Private',
            proj_gramola_desc: 'Full-stack music on-demand application with <strong>Spotify API</strong> integration and <strong>Stripe</strong> payments. Spring Boot (Java 17) backend and Angular frontend. Includes Selenium E2E tests and a mock mode for development without credentials.',
            proj_spotify_desc: 'Complete Data Warehouse for Spotify data analysis. Python ETL pipeline processing CSVs and loading dimensional and fact tables into MySQL. Advanced OLAP queries for business intelligence.',
            proj_agritech_desc: 'Business intelligence platform for farmers and cooperatives. Analyzes climate and market data to recommend optimal planting and selling times, maximizing profitability.',
            proj_dist_title: 'Distributed Systems',
            proj_dist_desc: 'Object-oriented communication middleware with ZeroC Ice and message queues with Kafka. Robust implementation of distributed patterns for high-concurrency environments.',
            proj_sec_title: 'CVE Audit & Exploits',
            proj_sec_desc: 'Research and exploitation of real vulnerabilities (CVEs) in controlled environments. Exploitation scripts with attack vector documentation and mitigation patches.',
            proj_media_desc: 'Video/audio player with custom compression algorithm implementation (RLE, Huffman) to optimize storage without external dependencies.',
            proj_iker_title: 'Iker Association Web',
            proj_iker_desc: 'Web portal for NGO with user, role and content management. UX/UI optimization and custom CMS implementation to facilitate non-technical management.',
            proj_poke_desc: '2D game engine with custom pixel-art animations and turn-based combat system built from scratch, without a game engine. Custom state and event management.',
            proj_soko_desc: 'Recreation of the classic Sokoban puzzle with 2D matrix logic for movement, collision detection and victory system. Terminal and graphical interface.',
            proj_ipokemon_desc: 'Desktop application in <strong>C# / .NET MAUI</strong> with side menu, personal Pokédex, detailed Pokémon cards (stats, evolution, description) and a <strong>turn-based combat</strong> system with AI. Includes an interactive web demo.',
            demo_btn: '▶ Demo',
            private_note: '<i class="fas fa-info-circle"></i> Projects labeled "Private" are in university repositories. Source code is available upon request.',
            contact_tag: '// contact',
            contact_title: 'Let\'s Talk?',
            contact_text: 'I\'m actively looking for new professional opportunities. If you\'re looking for a technical profile eager to learn and contribute, reach out.',
            contact_email_label: 'Email',
            contact_phone_label: 'Phone',
            footer_text: 'Designed & Developed by Víctor Astray &copy; 2026',
            typewriter_roles: ['Frontend Development', 'Backend Development', 'Python & Java', 'Fullstack Projects', 'Data Engineering'],
        }
    };

    let currentLang = 'es';

    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (T[lang][key] !== undefined) {
                el.innerHTML = T[lang][key];
            }
        });
        // Restart typewriter with new language roles
        startTypewriter(T[lang].typewriter_roles);
    }

    /* ─────────────────────────────────────
       2. LANG TOGGLE
    ───────────────────────────────────── */
    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.querySelector('.lang-text').textContent = currentLang.toUpperCase();
        applyTranslations(currentLang);
    });

    /* ─────────────────────────────────────
       3. THEME TOGGLE
    ───────────────────────────────────── */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const savedTheme = localStorage.getItem('va-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = 'fas fa-sun';
    }
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('va-theme', isLight ? 'light' : 'dark');
    });

    /* ─────────────────────────────────────
       4. NAVBAR — scroll behavior + active link
    ───────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Scrolled state
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link spy
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === current);
        });
    });

    /* ─────────────────────────────────────
       5. HAMBURGER MENU
    ───────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    /* ─────────────────────────────────────
       6. TYPEWRITER
    ───────────────────────────────────── */
    const twEl = document.getElementById('typewriter');
    let twTimeout = null;

    function startTypewriter(roles) {
        if (twTimeout) clearTimeout(twTimeout);
        if (!twEl) return;
        let roleIdx = 0, charIdx = 0, deleting = false;

        function tick() {
            const currentRole = roles[roleIdx];
            if (!deleting) {
                twEl.textContent = currentRole.slice(0, ++charIdx);
                if (charIdx === currentRole.length) {
                    deleting = true;
                    twTimeout = setTimeout(tick, 2000);
                    return;
                }
            } else {
                twEl.textContent = currentRole.slice(0, --charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    roleIdx = (roleIdx + 1) % roles.length;
                }
            }
            twTimeout = setTimeout(tick, deleting ? 50 : 80);
        }
        tick();
    }
    startTypewriter(T[currentLang].typewriter_roles);

    /* ─────────────────────────────────────
       7. SCROLL REVEAL
    ───────────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ─────────────────────────────────────
       8. ANIMATED SKILL BARS
    ───────────────────────────────────── */
    const barsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    const pct = bar.getAttribute('data-pct');
                    bar.style.width = pct + '%';
                });
                barsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const barsSection = document.querySelector('.skills-bars-col');
    if (barsSection) barsObserver.observe(barsSection);

    /* ─────────────────────────────────────
       9. ANIMATED COUNTERS
    ───────────────────────────────────── */
    function animateCount(el, target, duration) {
        let start = 0;
        const step = Math.ceil(target / (duration / 30));
        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                el.textContent = target + '+';
                clearInterval(interval);
            } else {
                el.textContent = start;
            }
        }, 30);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(el => {
                    animateCount(el, parseInt(el.getAttribute('data-target')), 1200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) statsObserver.observe(statsSection);

    /* ─────────────────────────────────────
       10. PROJECT FILTERS
    ───────────────────────────────────── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                const match = filter === 'all' || cat === filter;
                if (match) {
                    card.style.display = 'flex';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(16px)';
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        });
    });

    // Initial project card transitions
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    });

    /* ─────────────────────────────────────
       11. CUSTOM CURSOR
    ───────────────────────────────────── */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function followOutline() {
            const dx = mouseX - outlineX;
            const dy = mouseY - outlineY;
            outlineX += dx * 0.12;
            outlineY += dy * 0.12;
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            requestAnimationFrame(followOutline);
        }
        followOutline();

        // Grow on hoverable elements
        document.querySelectorAll('a, button, .tech-pill, .project-card, .contact-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '50px';
                cursorOutline.style.height = '50px';
                cursorOutline.style.opacity = '0.4';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '32px';
                cursorOutline.style.height = '32px';
                cursorOutline.style.opacity = '0.6';
            });
        });
    }

    /* ─────────────────────────────────────
       12. SMOOTH NAV SCROLL
    ───────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ─────────────────────────────────────
       INIT
    ───────────────────────────────────── */
    applyTranslations(currentLang);
});
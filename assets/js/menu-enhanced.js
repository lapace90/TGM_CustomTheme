/**
 * Menu Cyberpunk - Effet hover uniquement
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== CONFIGURATION =====
    const config = {
        particleCount: 3,
        glowIntensity: 0.4,
        enableParticles: window.innerWidth > 768 // Désactiver sur mobile
    };
    
    // ===== EFFET HOVER =====
    
    function addHoverEffects() {
        const menuItems = document.querySelectorAll('.category-sub-menu a, .main-menu a');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (config.enableParticles) {
                    createParticleEffect(this);
                }
                addGlowEffect(this);
            });
            
            item.addEventListener('mouseleave', function() {
                removeGlowEffect(this);
            });
        });
    }
    
    // ===== PARTICULES =====
    
    function createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < config.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'menu-particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--neon-blue, #00f5ff);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 6px var(--neon-blue, #00f5ff);
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
            `;
            
            document.body.appendChild(particle);
            
            // Animation
            if (particle.animate) {
                particle.animate([
                    { transform: 'translateY(0) scale(1)', opacity: 1 },
                    { transform: 'translateY(-30px) scale(0)', opacity: 0 }
                ], {
                    duration: 800,
                    easing: 'ease-out'
                }).addEventListener('finish', () => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                });
            } else {
                setTimeout(() => particle.remove(), 800);
            }
        }
    }
    
    // ===== GLOW EFFECT =====
    
    function addGlowEffect(element) {
        if (!element.dataset.originalBoxShadow) {
            element.dataset.originalBoxShadow = getComputedStyle(element).boxShadow;
        }
        element.style.boxShadow = `0 0 25px rgba(0, 245, 255, ${config.glowIntensity})`;
    }
    
    function removeGlowEffect(element) {
        element.style.boxShadow = element.dataset.originalBoxShadow || '';
    }
    
    // ===== RESPONSIVE =====
    
    function handleResize() {
        config.enableParticles = window.innerWidth > 768;
    }
    
    // ===== STYLES CSS POUR LES PARTICULES =====
    
    function injectStyles() {
        if (document.getElementById('menu-particle-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'menu-particle-styles';
        styles.textContent = `
            .menu-particle {
                animation: particle-float 0.8s ease-out forwards;
            }
            
            @keyframes particle-float {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-30px) scale(0);
                    opacity: 0;
                }
            }
            
            @media (prefers-reduced-motion: reduce) {
                .menu-particle {
                    animation: none !important;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
    
    // ===== INITIALISATION =====
    
    // Injecter les styles
    injectStyles();
    
    // Ajouter les effets hover
    addHoverEffects();
    
    // Responsive
    window.addEventListener('resize', handleResize);
    
    console.log('✨ Effets hover du menu chargés');
    
});

// ===== PARTICULES OPTIMISÉES POUR PRESTASHOP =====
// À ajouter dans votre fichier JS principal ou dans un <script> dans votre template

(function() {
    'use strict';
    
    // Vérifier si on est sur mobile pour optimiser
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 50;
    
    let particles = [];
    let container;
    let animationId;
    let isRunning = true;
    
    // Couleurs de votre thème
    const colors = [
        { color: '#00f5ff', shadow: '0 0 8px #00f5ff' }, // neon-blue
        { color: '#ff0080', shadow: '0 0 8px #ff0080' }, // neon-pink  
        { color: '#00ff41', shadow: '0 0 8px #00ff41' }, // neon-green
        { color: '#8b00ff', shadow: '0 0 8px #8b00ff' }  // neon-purple
    ];
    
    function createContainer() {
        container = document.createElement('div');
        container.id = 'particles-bg';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(container);
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        const colorData = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 20;
        const speed = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.4 + 0.1;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colorData.color};
            border-radius: 50%;
            box-shadow: ${colorData.shadow};
            left: ${x}px;
            top: ${y}px;
            opacity: ${opacity};
            pointer-events: none;
        `;
        
        particle.data = { x, y, speed, opacity };
        container.appendChild(particle);
        particles.push(particle);
    }
    
    function updateParticles() {
        particles.forEach((particle, index) => {
            const data = particle.data;
            data.y -= data.speed;
            
            // Effet de scintillement léger
            const flicker = Math.sin(Date.now() * 0.005 + data.x * 0.001) * 0.2 + 0.8;
            
            particle.style.top = data.y + 'px';
            particle.style.opacity = data.opacity * flicker;
            
            // Supprimer quand hors écran
            if (data.y < -20) {
                particle.remove();
                particles.splice(index, 1);
            }
        });
    }
    
    function animate() {
        if (!isRunning) return;
        
        // Créer nouvelles particules
        if (Math.random() < 0.1 && particles.length < particleCount) {
            createParticle();
        }
        
        updateParticles();
        animationId = requestAnimationFrame(animate);
    }
    
    function init() {
        createContainer();
        
        // Créer quelques particules initiales
        for (let i = 0; i < Math.min(10, particleCount); i++) {
            createParticle();
        }
        
        animate();
    }
    
    function destroy() {
        isRunning = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        if (container) {
            container.remove();
        }
        particles = [];
    }
    
    // Gestion de la visibilité pour économiser la batterie
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            isRunning = false;
        } else {
            isRunning = true;
            animate();
        }
    });
    
    // Gestion du redimensionnement
    window.addEventListener('resize', function() {
        particles.forEach(particle => {
            if (particle.data.x > window.innerWidth) {
                particle.data.x = Math.random() * window.innerWidth;
                particle.style.left = particle.data.x + 'px';
            }
        });
    });
    
    // Initialiser quand la page est prête
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exposer les contrôles pour debug (optionnel)
    window.particlesControl = {
        pause: () => { isRunning = false; },
        resume: () => { isRunning = true; animate(); },
        destroy: destroy
    };
    
})();
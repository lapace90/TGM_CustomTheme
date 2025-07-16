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
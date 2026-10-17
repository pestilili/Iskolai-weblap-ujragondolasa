// Egyszerű hamburger menü mobilra
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Csak akkor adjuk hozzá, ha még nincs
    if (nav.querySelector('.hamburger')) return;
    
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Menü megnyitása');
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: transparent;
        border: none;
        color: white;
        font-size: 32px;
        cursor: pointer;
        padding: 10px 15px;
        position: absolute;
        right: 10px;
        top: 5px;
        z-index: 10;
    `;
    
    nav.style.position = 'relative';
    nav.insertBefore(hamburger, nav.firstChild);
    
    function updateHamburger() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            // Alapból zárt állapot mobilra
            if (!nav.classList.contains('open') && !nav.classList.contains('closed')) {
                nav.classList.add('closed');
            }
        } else {
            hamburger.style.display = 'none';
            nav.classList.remove('closed', 'open');
        }
    }
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('closed');
        nav.classList.toggle('open');
        hamburger.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
    });
    
    window.addEventListener('resize', updateHamburger);
    updateHamburger();
});

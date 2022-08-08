
function handleToggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.header-menu');
    
    function handleMenu() {
        menu.classList.add('is-active');
    };
    function closeMenu(e) {
        if(!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
            menu.classList.remove('is-active');
        }
    };

    if(!menuToggle || !menu) return;
    menuToggle.addEventListener('click', handleMenu)
    document.addEventListener('click', closeMenu);
}

handleToggleMenu();

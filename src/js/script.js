window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__nav-item'),
    menuItem = document.querySelectorAll('.main__nav-item__main__nav-list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-item_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-item_active');
        })
    })
})
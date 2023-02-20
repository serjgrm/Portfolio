window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container'),
    menuItem = document.querySelectorAll('.container_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        container.classList.toggle('container_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            container.classList.toggle('container_active');
        })
    })
})
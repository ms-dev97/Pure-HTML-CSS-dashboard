const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggle');

sidebarToggler.addEventListener('pointerdown', function() {
    sidebar.classList.toggle('show');
    this.classList.toggle('slide');
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    
    function openSidebar() {
        sidebar.classList.add('open');
        content.style.marginLeft = '250px'; // Adjust content margin when sidebar is open
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        content.style.marginLeft = '0'; // Adjust content margin
    }

    toggleSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
});

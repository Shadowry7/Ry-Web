document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const fileUpload = document.getElementById('file-upload');
    const fileList = document.getElementById('file-list');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

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

    // File upload handling
    function handleFileUpload() {
        const files = fileUpload.files;
        fileList.innerHTML = ''; // Clear existing file list

        const uploadedFiles = [];

        for (const file of files) {
            const fileURL = URL.createObjectURL(file);

            const li = document.createElement('li');
            const preview = document.createElement(file.type.startsWith('image/') ? 'img' : 'video');
            preview.src = fileURL;
            preview.className = 'thumbnail';
            preview.style.maxWidth = '100px';
            preview.style.maxHeight = '100px';

            preview.addEventListener('click', () => {
                modal.style.display = 'block';
                const fullScreenElem = preview.cloneNode();
                fullScreenElem.classList.add('full-screen');
                modalContent.innerHTML = '';
                modalContent.appendChild(fullScreenElem);
            });

            li.appendChild(preview);
            fileList.appendChild(li);

            // Store file info for download
            uploadedFiles.push({ name: file.name, url: fileURL });
        }

        sessionStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
    }

    fileUpload.addEventListener('change', handleFileUpload);

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

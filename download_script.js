document.addEventListener('DOMContentLoaded', () => {
    const downloadList = document.getElementById('download-list');

    // Load files from sessionStorage or another storage mechanism
    function loadFiles() {
        const files = JSON.parse(sessionStorage.getItem('uploadedFiles') || '[]');
        downloadList.innerHTML = '';

        files.forEach(file => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = file.url;
            a.download = file.name;
            a.textContent = file.name;
            li.appendChild(a);
            downloadList.appendChild(li);
        });
    }

    loadFiles();
});

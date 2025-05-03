var contentContainer = document.getElementById("contentContainer");
function loadContent(dir) {
    fetch(dir)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}
loadContent('panelContents/about.html');
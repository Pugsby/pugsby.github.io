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

function attachHoverSound() {
    document.querySelectorAll('button').forEach(button => {
        if (!button.hasAttribute('data-hover-sound')) {
            button.setAttribute('data-hover-sound', 'true');
            button.addEventListener('mouseover', () => {
                const audio = new Audio('hover.mp3');
                audio.play();
            });
            button.addEventListener('click', () => {
                const audio = new Audio('click.mp3');
                audio.play();
            });
        }
    });
}

attachHoverSound();

const observer = new MutationObserver(() => {
    attachHoverSound();
});

observer.observe(document.body, { childList: true, subtree: true });

function playCarSoundAndRemoveImage() {
    const audio = new Audio('car.mp3');
    audio.play();
    document.getElementById('car').remove();
}
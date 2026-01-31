const audio = document.getElementById('miMusica');
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const progressBar = document.getElementById('progress-bar');
const volBar = document.getElementById('volume-control');
const currTime = document.getElementById('current-time');
const durTime = document.getElementById('duration-time');

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Cargar duración
audio.addEventListener('loadedmetadata', () => {
    durTime.innerText = formatTime(audio.duration);
});

// Play y Pause
btnPlay.onclick = () => audio.play();
btnPause.onclick = () => audio.pause();

// Actualizar progreso
audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currTime.innerText = formatTime(audio.currentTime);
});

// Cambiar tiempo con la barra
progressBar.oninput = () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
};

// Control de volumen
volBar.oninput = () => {
    audio.volume = volBar.value;
};

function copiarDiscord(usuario) {
    navigator.clipboard.writeText(usuario);
    
    // Esto es un toque pro: cambia el color o manda un aviso rápido
    alert("¡Usuario de Discord copiado: " + usuario + "!");
}
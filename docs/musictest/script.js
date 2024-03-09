document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlistItems = document.querySelectorAll("#playlistItems li");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const skipBtn = document.getElementById("skipBtn");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.querySelector(".progress");

    let currentSongIndex = 0;

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
            playPauseBtn.classList.add("playing");
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Play";
            playPauseBtn.classList.remove("playing");
        }
    }

    function playSong(index) {
        if (index >= 0 && index < playlistItems.length) {
            currentSongIndex = index;
            audioPlayer.src = playlistItems[index].getAttribute("data-src");
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
            playPauseBtn.classList.add("playing");
        }
    }

    playPauseBtn.addEventListener("click", playPause);

    prevBtn.addEventListener("click", function() {
        playSong(currentSongIndex - 1);
    });

    skipBtn.addEventListener("click", function() {
        playSong(currentSongIndex + 1);
    });

    playlistItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            playSong(index);
        });
    });

    audioPlayer.addEventListener("timeupdate", function() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = progress + "%";
    });

    progressContainer.addEventListener("click", function(event) {
        const offsetX = event.offsetX;
        const containerWidth = progressContainer.clientWidth;
        const seekTime = (offsetX / containerWidth) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    audioPlayer.addEventListener("ended", function() {
        playSong(currentSongIndex + 1);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlistItems = document.querySelectorAll("#playlistItems li");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const skipBtn = document.getElementById("skipBtn");
    const loopBtn = document.getElementById("loopBtn");
    const progressBar = document.getElementById("progressBar");
    const progressContainer = document.querySelector(".progress");
    const currentTimeIndicator = document.getElementById("currentTime");
    const durationIndicator = document.getElementById("duration");
    const volumeControl = document.getElementById("volumeControl");
    const volumeToggleBtn = document.getElementById("volumeToggleBtn");

    let currentSongIndex = 0;
    let isPaused = true;
    let isLooping = false;
     // Initialize volume status
     let isMuted = false;

     // Volume button click event listener
     volumeToggleBtn.addEventListener("click", function() {
         // Toggle mute status
         isMuted = !isMuted;
         volumeToggleBtn.classList.toggle("muted");
         // Toggle volume icon and mute/unmute audio
         if (isMuted) {
             volumeToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
             audioPlayer.volume = 0; // Mute audio
         } else {
             volumeToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
             audioPlayer.volume = volumeControl.value; // Unmute audio
         }
     });
     playPauseBtn.addEventListener("click", function() {
        playPauseBtn.classList.toggle("toggled"); // Toggle the 'toggled' class
    });
     // Volume slider input event listener
     volumeControl.addEventListener("input", function() {
         // Set volume based on the value of volume control input
         audioPlayer.volume = volumeControl.value;
         
         // Update mute button icon when changing volume
         if (audioPlayer.volume === 0) {
             volumeToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
             isMuted = true;
         } else {
             volumeToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
             isMuted = false;
         }
     });
    function playPause() {
        if (isPaused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPaused = false;
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPaused = true;
        }
    }
    
    function playSong(index) {
        if (index >= 0 && index < playlistItems.length) {
            currentSongIndex = index;
            playlistItems.forEach(item => item.classList.remove("selected"));
            playlistItems[currentSongIndex].classList.add("selected");
            audioPlayer.src = playlistItems[index].getAttribute("data-src");
            audioPlayer.load(); // Load new audio source
            
            // Check if the player is paused before playing the new track
            if (!isPaused) {
                audioPlayer.play(); // Start playing the new audio
            }
            
            updateDuration(); // Update duration indicator
        }
    }
    
    

    function toggleLoop() {
        isLooping = !isLooping;
        if (isLooping) {
            audioPlayer.loop = true;
            loopBtn.classList.add("active");
        } else {
            audioPlayer.loop = false;
            loopBtn.classList.remove("active");
        }
    }

// Update duration when audio metadata is loaded
audioPlayer.addEventListener("loadedmetadata", function() {
    updateDuration();
});

function updateDuration() {
    if (!isNaN(audioPlayer.duration) && isFinite(audioPlayer.duration)) {
        durationIndicator.textContent = formatTime(audioPlayer.duration);
    } else {
        durationIndicator.textContent = "0:00";
    }
}

    

// Event listener for loop button toggle
loopBtn.addEventListener("click", function() {
    loopBtn.classList.toggle("active"); // Toggle active class
    if (loopBtn.classList.contains("active")) {
        loopBtn.style.opacity = "0.49"; // Apply opacity when active
    } else {
        loopBtn.style.opacity = ""; // Reset opacity when inactive
    }
});
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    playPauseBtn.addEventListener("click", playPause);
    loopBtn.addEventListener("click", toggleLoop);

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

        currentTimeIndicator.textContent = formatTime(audioPlayer.currentTime);
    });

    progressContainer.addEventListener("click", function(event) {
        const offsetX = event.offsetX;
        const containerWidth = progressContainer.clientWidth;
        const seekTime = (offsetX / containerWidth) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    audioPlayer.addEventListener("ended", function() {
        if (isLooping) {
            audioPlayer.play();
        } else {
            playSong(currentSongIndex + 1);
        }
    });
    audioPlayer.addEventListener("ended", function() {
        // Increment the current song index
        currentSongIndex++;
        // If it exceeds the length of the playlist, loop back to the first track
        if (currentSongIndex >= playlistItems.length) {
            currentSongIndex = 0;
        }
        // Play the next song
        playSong(currentSongIndex);
    });


    volumeControl.addEventListener("input", function() {
        // Set volume based on the value of volume control input
        audioPlayer.volume = volumeControl.value;
    });

    // Play the first song by default
    playSong(0);
});

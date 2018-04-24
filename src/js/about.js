"use strict";

const btnPlay = document.querySelector('.btn-play');
const btnPlayIcon = btnPlay.querySelector('.fa');
const progressBar = document.querySelector('.progress-bar');
const progressBarFill = document.querySelector('.progress-bar-fill');
const videoElement = document.querySelector('.video-element');
$('.video-wrapper').css('filter', 'brightness(50%)');


// Play / Pause the video
const playPauseVideo = () => {
    if (videoElement.paused) {
        videoElement.play();
        btnPlayIcon.classList.remove('fa-play');
        btnPlayIcon.classList.add('fa-pause');
        $('.video-wrapper').css('filter', 'brightness(100%)');
    } else {
        videoElement.pause();
        btnPlayIcon.classList.remove('fa-pause');
        btnPlayIcon.classList.add('fa-play');
        $('.video-wrapper').css('filter', 'brightness(50%)');
    }
}

// Update progress bar as the video plays
const updateProgress = () => {
    // Calculate current progress
    let value = (100 / videoElement.duration) * videoElement.currentTime;
    // Update the slider value
    progressBarFill.style.width = value + '%';
}

// Event listeners
btnPlay.addEventListener('click', playPauseVideo, false);
videoElement.addEventListener('ended', () => {
    btnPlay.setAttribute('hidden', 'true');
}, false);
videoElement.addEventListener('timeupdate', updateProgress, false);
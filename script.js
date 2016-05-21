var profileimage = document.querySelector('#profileimage'),
    body = document.querySelector('body');

//

const audioPlayer = document.querySelector('#audio-player');
const audio = audioPlayer.querySelector('audio');
const src = audio.getAttribute('data-src');

audioPlayer.querySelector('.play').onclick = function onPlayClick(e) {
    audio.setAttribute('src', src);
    audio.play();
    audioPlayer.classList = 'audio-player loading';
};
audio.oncanplay = function onCanPlay(e) {
    audioPlayer.classList = 'audio-player playing';
};
    
audioPlayer.querySelector('.pause').onclick = function onPauseClick(e) {
    audio.pause();
    audioPlayer.classList = 'audio-player paused';
};

//

setTimeout(function() {
    profileimage.className = 'open first';
    setTimeout(function() {
        body.className = 'frosted';

        setTimeout(function() {
            body.className = '';
            profileimage.className = '';
        }, 350);
    }, 1000);
}, 30);

//

function openEl(el) {
    el.className = 'open';
}

function closeEl(el) {
    el.className = '';
}

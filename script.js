var profileimage = document.querySelector('#profileimage'),
    body = document.querySelector('body'),
    audioEl = document.querySelector('audio');

//

audiojs.events.ready(function() {
    var audio = audiojs.create(audioEl, {
        createPlayer: {
            markup: '\
	          <div class="play-pause"> \
	            <p class="play"></p> \
	            <p class="pause"></p> \
	            <p class="loading"></p> \
	            <p class="error"></p> \
	          </div> \
	          <div class="error-message"></div>',
            playPauseClass: 'play-pause',
            scrubberClass: 'scrubber',
            progressClass: 'progress',
            loaderClass: 'loaded',
            timeClass: 'time',
            durationClass: 'duration',
            playedClass: 'played',
            errorMessageClass: 'error-message',
            playingClass: 'playing',
            loadingClass: 'loading',
            errorClass: 'error',
        }
    });
});

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

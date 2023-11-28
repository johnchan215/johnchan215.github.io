const videos = document.querySelectorAll("video");
const cards = document.querySelectorAll(".projects");

cards.forEach((card, i) => {

  // Play video 2x speed
  videos[i].playbackRate = 2;

  // Play video when desktop or mobile hover
  ['pointerenter', 'touchmove'].forEach((e) => {
    card.addEventListener(e, () => {
      videos[i].play();
    });
  });

  // Code to be executed on mobile devices
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Stop video when mobile leaves card element
    card.addEventListener('pointerleave', (evt) => {
      videos.forEach(video => {
        if (!video.paused && evt.target.querySelector('video') == video) {
          return;
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    });
    // Code to be executed on non-mobile devices
  } else {
    // Stop video when desktop leaves card element
    card.addEventListener('mouseleave', () => {
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

});
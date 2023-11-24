const videos = document.querySelectorAll("video");
const cards = document.querySelectorAll(".projects");

cards.forEach((card, i) => {

  ['pointerenter', 'touchmove'].forEach((e) => {
    card.addEventListener(e, () => {
      videos[i].play();
      videos[i].playbackRate = 2;
    });
  });

  ['pointerleave'].forEach((e) => {
    card.addEventListener(e, () => {
      videos.forEach(video => {
        if (!video.paused) {
          video.pause();
        }
      });
    });
  });

});
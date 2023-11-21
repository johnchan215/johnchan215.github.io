const video = document.querySelectorAll("video");
const cards = document.querySelectorAll(".projects");

cards.forEach((card, i) => {
  ['pointerenter','touchmove'].forEach((e) => {
    card.addEventListener(e, () => {
      video[i].play();
      video[i].playbackRate = 2;
    });
  });
    
  ['pointerleave','touchend'].forEach((e) => {
    card.addEventListener(e, () => {
      video[i].pause();
      video[i].currentTime = 0;
    });
  });
  });
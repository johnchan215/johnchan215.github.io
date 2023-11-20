const video = document.querySelectorAll("video");
const cards = document.querySelectorAll(".projects");

cards.forEach((card, i) => {
    card.addEventListener('pointerenter', () => {
      video[i].play();
      video[i].playbackRate = 2;
    });
    
    card.addEventListener('pointerleave', () => {
      video[i].pause();
      video[i].currentTime = 0;
    });
  });
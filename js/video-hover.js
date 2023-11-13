const video = document.querySelectorAll("video");
const cards = document.querySelectorAll(".projects");

cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
      video[i].play();
      video[i].playbackRate = 2;
    });
    
    card.addEventListener('mouseleave', () => {
      video[i].pause();
      video[i].currentTime = 0;
    });
  });
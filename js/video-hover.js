const cards = document.querySelectorAll(".projects");
const videos = document.querySelectorAll("video");

cards.forEach((card, i) => {
  // Pause video after autoplay for video poster
  videos[i].pause();
  // Play video 2x speed
  videos[i].playbackRate = 2;

  // Play video when mouse enters video
  card.addEventListener("mouseenter", () => {
    videos[i].play();
  });

  // Stop and reset video when mouse leaves video
  card.addEventListener("mouseleave", () => {
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  // ------------------- Flipbook Functionality -------------------
  const pages = document.querySelectorAll(".page");
  const resetBtn = document.getElementById("reset-btn");
  let currentPage = 0;

  pages.forEach((page, index) => {
    page.addEventListener("click", () => {
      if (index === currentPage) {
        page.classList.add("flipped");
        currentPage++;
      } else if (index === currentPage - 1) {
        page.classList.remove("flipped");
        currentPage--;
      }
    });
  });

  resetBtn.addEventListener("click", () => {
    pages.forEach(page => page.classList.remove("flipped"));
    currentPage = 0;

    const resetText = document.getElementById("reset-text");
    resetText.innerHTML = "✨ Reset Done!";
    resetBtn.classList.add("reset-glow");

    setTimeout(() => {
      resetText.innerHTML = "🔄 Reset to Page 1";
      resetBtn.classList.remove("reset-glow");
    }, 1500);
  });

  // ------------------- Vanta Background (Birds + Clouds) -------------------
  let vantaBirds, vantaClouds;

  function initVanta() {
    if (vantaBirds) vantaBirds.destroy();
    if (vantaClouds) vantaClouds.destroy();

    vantaClouds = VANTA.CLOUDS({
      el: "#vanta-clouds",
      mouseControls: false,
      touchControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      skyColor: 0xff69b4,
      cloudColor: 0xff85c1,
      cloudShadowColor: 0xff4da6,
      sunColor: 0xff1493,
      sunGlareColor: 0xff4db0,
      sunlightColor: 0xff66aa
    });

    vantaBirds = VANTA.BIRDS({
      el: "#vanta-birds",
      mouseControls: true,
      touchControls: true,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      backgroundAlpha: 0.0,
      color1: 0xff69b4,
      color2: 0xffb6c1,
      birdSize: 2.0,
      quantity: 5.0,
      backgroundColor: 0xff69b4,
      speedLimit: 4.5,
      separation: 55.0,
      alignment: 55.0,
      cohesion: 25.0,
      backgroundAlpha: 0.0
    });
  }

  initVanta();
  window.addEventListener("resize", initVanta);

  // ------------------- Play Birthday Song -------------------
  const birthdaySong = document.getElementById("birthday-song");
  const overlay = document.getElementById("overlay");

  // Try autoplay on page load (muted)
  birthdaySong.play().catch(() => {
    console.log("Autoplay blocked, waiting for user interaction...");
  });

  // Play audio when overlay is clicked
  overlay.addEventListener("click", () => {
    birthdaySong.muted = false; // unmute
    birthdaySong.play();
    overlay.style.display = "none"; // remove overlay
  });

});

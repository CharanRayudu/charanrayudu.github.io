document.addEventListener("DOMContentLoaded", () => {
    document.title = "Charan Rayudu | Cybersecurity Engineer";
  
    const titles = [
      "Cyber Security Engineer",
      "Red Teamer",
      "Penetration Tester",
      "Bug Bounty Hunter"
    ];
  
    let currentIndex = 0;
    let charIndex = 0;
    const speed = 100;
    const typewriterEl = document.getElementById("typewriter");
  
    function type() {
      if (!typewriterEl) return;
      if (charIndex < titles[currentIndex].length) {
        typewriterEl.textContent += titles[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          typewriterEl.textContent = "";
          charIndex = 0;
          currentIndex = (currentIndex + 1) % titles.length;
          setTimeout(type, 300);
        }, 1500);
      }
    }
  
    type();
  
  });
  
  // Optional Parallax Effect
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelectorAll(".parallax-layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
  
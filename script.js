document.addEventListener("DOMContentLoaded", () => {
    // Fix tab title glitch
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
  
    // Cursor effect
    const dot = document.createElement('div');
    const trail = document.createElement('div');
    dot.className = 'cursor-dot';
    trail.className = 'cursor-trail';
    document.body.append(dot, trail);
  
    document.addEventListener('mousemove', e => {
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
      trail.style.left = `${e.pageX - 6}px`;
      trail.style.top = `${e.pageY - 6}px`;
    });
  });
  
  // Optional: Parallax effect
  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
  
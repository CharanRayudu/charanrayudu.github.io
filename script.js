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
  
  // Optional parallax background effect
  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelectorAll(".parallax-layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
  
  // Animated Cursor
  const cursor = document.querySelector('.cursor');
  const cursorTrail = document.querySelector('.cursor-trail');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top = e.clientY + 'px';
    }, 100);
  });

  // Particle Background
  const particleBg = document.querySelector('.particle-bg');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = Math.random() * 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDuration = Math.random() * 10 + 5 + 's';
    particleBg.appendChild(particle);
  }
  
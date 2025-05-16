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

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: false,
        mirror: true
    });

    // Scroll Reveal Animation
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Optimized Matrix Rain Effect
    const canvas = document.getElementById('matrix-rain');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = new Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(10, 15, 26, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ffc3';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        // Optimize animation frame rate
        let animationFrame;
        function animate() {
            draw();
            animationFrame = requestAnimationFrame(animate);
        }
        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Optimized Cursor Effect
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    if (cursor && cursorTrail) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let trailX = 0;
        let trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            // Smooth cursor movement
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            // Smooth trail movement
            const trailDx = cursorX - trailX;
            const trailDy = cursorY - trailY;
            trailX += trailDx * 0.2;
            trailY += trailDy * 0.2;
            
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
            
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Interactive Project Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 0 20px rgba(0, 255, 195, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Timeline Item Hover Effects
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.background = 'rgba(10, 15, 26, 0.8)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.background = 'rgba(10, 15, 26, 0.5)';
        });
    });

    // Add scroll-reveal class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-reveal');
    });

    // Glitch effect on hover
    document.querySelectorAll('.glitch').forEach(element => {
      element.addEventListener('mouseover', () => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'glitch 0.3s infinite';
      });
      
      element.addEventListener('mouseout', () => {
        element.style.animation = 'none';
      });
    });

    // Add typing sound effect
    const typingSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    typingSound.volume = 0.1;

    document.addEventListener('keydown', () => {
      typingSound.currentTime = 0;
      typingSound.play();
    });
});
  
// Optional parallax background effect
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelectorAll(".parallax-layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Terminal-like typing effect
const typewriter = document.getElementById('typewriter');
const text = 'Cybersecurity Engineer | Red Teamer | Bug Bounty Hunter';
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, Math.random() * 100 + 50); // Random typing speed
  }
}

type();

// Glitch effect on hover
document.querySelectorAll('.glitch').forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'glitch 0.3s infinite';
  });
  
  element.addEventListener('mouseout', () => {
    element.style.animation = 'none';
  });
});

// Cyberpunk cursor trail
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const trail = document.createElement('div');
trail.className = 'cursor-trail';
document.body.appendChild(trail);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Smooth cursor movement
  const dx = mouseX - cursorX;
  const dy = mouseY - cursorY;
  cursorX += dx * 0.1;
  cursorY += dy * 0.1;
  
  // Smooth trail movement
  const trailDx = cursorX - trailX;
  const trailDy = cursorY - trailY;
  trailX += trailDx * 0.2;
  trailY += trailDy * 0.2;
  
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
  
  requestAnimationFrame(animate);
}

animate();

// Add scanline effect
const scanline = document.createElement('div');
scanline.className = 'scanline';
document.body.appendChild(scanline);

// Add typing sound effect
const typingSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
typingSound.volume = 0.1;

document.addEventListener('keydown', () => {
  typingSound.currentTime = 0;
  typingSound.play();
});
  
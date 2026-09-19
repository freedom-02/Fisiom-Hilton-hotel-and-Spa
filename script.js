const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");


// ================= HEADER =================

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});


// ================= MOBILE MENU =================

function openMenu() {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);


// Close menu when navigation link is tapped

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});


// ================= VIDEO =================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  
  heroVideo.muted = true;
  heroVideo.playsInline = true;
  
  const playVideo = () => {
    const promise = heroVideo.play();
    
    if (promise !== undefined) {
      promise.catch(() => {
        console.log("Autoplay was blocked by the browser.");
      });
    }
  };
  
  playVideo();
  
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      playVideo();
    }
  });
}


// ================= IMAGE REVEAL =================

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add("image-loaded");
        
        observer.unobserve(entry.target);
      }
      
    });
    
  },
  {
    rootMargin: "100px"
  }
);

images.forEach(image => {
  imageObserver.observe(image);
});


// ================= ESC KEY =================

document.addEventListener("keydown", event => {
  
  if (event.key === "Escape") {
    closeMenu();
  }
  
});
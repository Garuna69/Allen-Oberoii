// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Hero section should be visible immediately
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.style.opacity = "1"
    heroSection.style.transform = "translateY(0)"
  }
})

// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add hover effects for skill badges
document.addEventListener("DOMContentLoaded", () => {
  const skillBadges = document.querySelectorAll(".skill-badge")
  skillBadges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 100}ms`
  })
})

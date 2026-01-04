// ===============================================
// MODERN WEBSITE SCRIPTS
// ===============================================

// DOM Elements
const header = document.getElementById("header")
const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const hamburger = menuBtn ? menuBtn.querySelector(".hamburger") : null
const backToTop = document.getElementById("backToTop")
const particles = document.getElementById("particles")
const preloader = document.getElementById("preloader")
const cursor = document.getElementById("cursor")
const cursorFollower = document.getElementById("cursor-follower")
const profilModal = document.getElementById("profilModal")
const profilBtn = document.getElementById("profilBtn")
const profilBtn2 = document.getElementById("profilBtn2")
const modalClose = document.getElementById("modalClose")

// ===============================================
// PRELOADER
// ===============================================
window.addEventListener("load", () => {
  setTimeout(() => {
    if (preloader) {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }
  }, 800)
})

// ===============================================
// CUSTOM CURSOR
// ===============================================
if (cursor && cursorFollower) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Cursor hover effects
  const hoverElements = document.querySelectorAll("a, button, .feature-card-glass, .service-card-dark")
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)"
      cursorFollower.style.transform = "scale(1.5)"
      cursorFollower.style.borderColor = "#10b981"
    })
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursorFollower.style.transform = "scale(1)"
      cursorFollower.style.borderColor = "rgba(16, 185, 129, 0.5)"
    })
  })
}

// ===============================================
// HEADER SCROLL EFFECT
// ===============================================
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  // Header background
  if (currentScroll > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  // Back to top button
  if (currentScroll > 500) {
    backToTop.classList.add("visible")
  } else {
    backToTop.classList.remove("visible")
  }

  lastScroll = currentScroll
})

// ===============================================
// MOBILE MENU TOGGLE
// ===============================================
if (menuBtn && hamburger && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("open")
  })

  // Close mobile menu on link click
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("open")
    })
  })
}

// ===============================================
// BACK TO TOP
// ===============================================
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// ===============================================
// SMOOTH SCROLL FOR NAVIGATION
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href !== "#profilModal") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// ===============================================
// REVEAL ON SCROLL
// ===============================================
const revealElements = document.querySelectorAll(".reveal-on-scroll")

const revealOnScroll = () => {
  revealElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add("revealed")
      }, index * 100)
    }
  })
}

window.addEventListener("scroll", revealOnScroll)
window.addEventListener("load", revealOnScroll)

// ===============================================
// COUNTER ANIMATION
// ===============================================
const counterElements = document.querySelectorAll(".stat-number")
let counterAnimated = false

const animateCounters = () => {
  if (counterAnimated) return

  const heroSection = document.getElementById("beranda")
  if (!heroSection) return

  const heroBottom = heroSection.getBoundingClientRect().bottom

  if (heroBottom > 0 && heroBottom < window.innerHeight + 200) {
    counterAnimated = true

    counterElements.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-target"))
      const duration = 2500
      const step = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += step
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString("id-ID")
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target.toLocaleString("id-ID")
        }
      }

      updateCounter()
    })
  }
}

window.addEventListener("scroll", animateCounters)
window.addEventListener("load", animateCounters)

// ===============================================
// CREATE PARTICLES
// ===============================================
const createParticles = () => {
  if (!particles) return

  const particleCount = 40

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 6 + "s"
    particle.style.animationDuration = Math.random() * 4 + 4 + "s"
    particle.style.opacity = Math.random() * 0.5 + 0.2
    particle.style.width = Math.random() * 4 + 2 + "px"
    particle.style.height = particle.style.width
    particles.appendChild(particle)
  }
}

createParticles()

// ===============================================
// PARALLAX EFFECT FOR HERO
// ===============================================
const heroSection = document.getElementById("beranda")
const heroBg = document.querySelector(".hero-bg")

window.addEventListener("scroll", () => {
  if (heroSection && heroBg) {
    const scrolled = window.pageYOffset
    const rate = scrolled * 0.3
    heroBg.style.transform = `scale(1.1) translateY(${rate}px)`
  }
})

// ===============================================
// MODAL FUNCTIONALITY
// ===============================================
const openModal = () => {
  if (profilModal) {
    profilModal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

const closeModal = () => {
  if (profilModal) {
    profilModal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

if (profilBtn) {
  profilBtn.addEventListener("click", (e) => {
    e.preventDefault()
    openModal()
  })
}

if (profilBtn2) {
  profilBtn2.addEventListener("click", (e) => {
    e.preventDefault()
    openModal()
  })
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal)
}

if (profilModal) {
  profilModal.addEventListener("click", (e) => {
    if (e.target === profilModal) {
      closeModal()
    }
  })
}

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// ===============================================
// MAGNETIC BUTTON EFFECT
// ===============================================
const magneticBtns = document.querySelectorAll(".magnetic-btn")

magneticBtns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  })

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)"
  })
})

// ===============================================
// TILT EFFECT FOR CARDS
// ===============================================
const tiltCards = document.querySelectorAll(".feature-card-glass, .service-card-dark")

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
  })
})

// ===============================================
// STATS ANIMATION FOR STATS PAGE
// ===============================================
const statsValue = document.querySelectorAll(".stats-value[data-target]")

const animateStats = () => {
  statsValue.forEach((stat) => {
    const target = Number.parseInt(stat.getAttribute("data-target"))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const updateStat = () => {
      current += step
      if (current < target) {
        stat.textContent = Math.floor(current).toLocaleString("id-ID")
        requestAnimationFrame(updateStat)
      } else {
        stat.textContent = target.toLocaleString("id-ID")
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !stat.classList.contains("animated")) {
          stat.classList.add("animated")
          updateStat()
        }
      })
    })

    observer.observe(stat)
  })
}

document.addEventListener("DOMContentLoaded", animateStats)

// ===============================================
// CHART ANIMATION (FOR STATS PAGE)
// ===============================================
const animateChartBars = () => {
  const chartBars = document.querySelectorAll(".chart-bar-fill")

  chartBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width")
    setTimeout(() => {
      bar.style.width = width + "%"
    }, index * 150)
  })
}

// Observe chart container
const chartContainer = document.querySelector(".chart-container")
if (chartContainer) {
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateChartBars()
        chartObserver.unobserve(entry.target)
      }
    })
  })
  chartObserver.observe(chartContainer)
}

// ===============================================
// POPULATION BARS ANIMATION
// ===============================================
const populationBars = document.querySelectorAll(".population-bar")

populationBars.forEach((bar, index) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          bar.style.opacity = "1"
          bar.style.transform = "translateX(0)"
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(bar)
})

// ===============================================
// LAZY LOADING IMAGES
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        observer.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
})

console.log("Website Kecamatan Purwokerto Utara - Scripts Loaded")

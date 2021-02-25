const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navbarMenu");
const navLogo = document.querySelector("#navbarLogo");

// Show mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const highlight = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#homePage");
  const portfolioMenu = document.querySelector("#portfolioPage");
  const contactMenu = document.querySelector("#contactPage");
  let scrollPosition = window.scrollY;

  // adds "highlight" class to my menu items
  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add("highlight");
    portfolioMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2665) {
    portfolioMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 4000) {
    contactMenu.classList.add("highlight");
    portfolioMenu.classList.remove("highlight");
    return;
  }

  if (
    (highlight && window.innerWidth < 960 && scrollPosition < 600) ||
    highlight
  ) {
    highlight.classList.remove("highlight");
  }
  console.log(scrollPosition);
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

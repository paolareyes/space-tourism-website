const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
  let visibility = nav.getAttribute("data-visible");
  if(visibility === "true"){
    nav.setAttribute("data-visible", false);
    navToggle.style.backgroundImage = "url(./assets/shared/icon-hamburger.svg)";
  }else{
    nav.setAttribute("data-visible", true);
    navToggle.style.backgroundImage = "url(./assets/shared/icon-close.svg)";
  }
})

addEventListener("DOMContentLoaded", () => {
  const navBG = [document.getElementById("nav-bar"), document.getElementById("menu-bg")];
  const progressbars = document.querySelectorAll(".progress");
  const links = document.getElementById("nav-links");
  const menu = document.getElementById("menu");
  const progressbar = document.getElementById("live-progress");

  menu.addEventListener("click", () => {
    links.style.top = links.style.top === "82px" ? "-711px" : "82px";
  });

  this.window.addEventListener("scroll", () => {
    const percentScrolled = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progressbar.style.width = `${percentScrolled}%`
  });

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll + 30) {
      navBG.forEach((element) => {
        element.style.top = "-83px"; });
      progressbars.forEach((element) => {
        element.style.top = "-3px"; });
    } else if (currentScroll < lastScroll - 30) {
      navBG.forEach((element) => {
        element.style.top = "0"; });
      progressbars.forEach((element) => {
        element.style.top = "80px"; });
    }
    lastScroll = currentScroll;
  });
});
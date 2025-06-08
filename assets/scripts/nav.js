window.addEventListener("DOMContentLoaded", function() {
  const navBG = [document.getElementById("nav-bar"), document.getElementById("menu-bg")];
  const progressbars = document.querySelectorAll(".progress");
  const links = document.getElementById("nav-links");
  const menu = document.getElementById("menu");
  const progressbar = document.getElementById("live-progress");

  menu.addEventListener("click", function() {
    links.style.top = window.getComputedStyle(links).top === "82px" ? "-711px" : "82px";
  });

  this.window.addEventListener("scroll", function() {
    const percentScrolled = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progressbar.style.width = `${percentScrolled}%`
  });

  let lastScroll = 0;
  window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll + 30) {
      navBG.forEach(function(element) {
        element.style.top = "-80px"; });
      progressbars.forEach(function(element) {
        element.style.top = "0px"; });
      links.style.top = "-711px"
    } else if (currentScroll < lastScroll - 30 || currentScroll == 0) {
      navBG.forEach(function(element) {
        element.style.top = "0"; });
      progressbars.forEach(function(element) {
        element.style.top = "80px"; });
    }
    lastScroll = currentScroll;
  });
});
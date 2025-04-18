addEventListener("DOMContentLoaded", () => {
  const links = document.getElementById("nav-links");
  const menu = document.getElementById("menu");
  const progressbar = document.getElementById("live-progress");

  menu.addEventListener("click", () => {
    links.style.top = links.style.top === "85px" ? "-711px" : "85px";
  });

  this.window.addEventListener("scroll", () => {
    const percentScrolled = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progressbar.style.width = `${percentScrolled}%`
  })
});
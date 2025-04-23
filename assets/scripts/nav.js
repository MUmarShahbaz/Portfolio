// JavaScript to toggle the collapsible content
document.querySelectorAll("#menu").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
});

// Define the media query for screens wider than 700px
const mediaQuery = window.matchMedia("(min-width: 700px)");

// Save the original order of children for each dropdown content element
const dropdowns = document.querySelectorAll(".dropdown-content");
dropdowns.forEach(dropdown => {
  dropdown.originalOrder = Array.from(dropdown.children); // Store the initial order
});

// Function to toggle display style, class, border-left, and order of children based on media query
function handleMediaQueryChange(event) {
  dropdowns.forEach(dropdown => {
    // Toggle display style based on media query
    if (event.matches) {
      // Screen width is 700px or more
      dropdown.removeAttribute("style"); // Remove inline style to show
      // Restore the original order of the children
      dropdown.originalOrder.forEach(child => dropdown.appendChild(child));
    } else {
      // Screen width is less than 700px
      dropdown.style.display = "none"; // Set inline style to hide
      // Reverse the order of the children
      Array.from(dropdown.children).reverse().forEach(child => dropdown.appendChild(child));
    }

    // Toggle "lbprimary-color" class and border-left for each child element except the last child
    const children = dropdown.children;
    Array.from(children).forEach((child, index) => {
      const isLastChild = index === children.length - 1;
    });
  });
}

// Attach the event listener to the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Initial check to apply correct styles, classes, and order on page load
handleMediaQueryChange(mediaQuery);

window.onscroll = function() {
  var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrollPosition = window.scrollY;
  var progress = (scrollPosition / scrollHeight) * 100;
  document.getElementById('progress').style.width = progress + '%';
};

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY + 10) {
    // Scrolling down
    navigation.style.transform = "translateY(-100%)";
  } if (currentScrollY < lastScrollY - 10) {
    // Scrolling up
    navigation.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});
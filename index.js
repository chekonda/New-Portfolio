function toggleMenu() {
  var menuItems = document.querySelector("nav ul");
  if (window.innerWidth <= 1000) {
    if (menuItems.style.display === "flex") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "flex";
    }
  }
}

// Add event listeners to anchor links corresponding to sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Close the dropdown menu
    var menuItems = document.querySelector("nav ul");
    menuItems.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll("#about p");

  console.log(paragraphs); // Check if paragraphs are selected

  let delay = 0;

  // Animate paragraphs
  paragraphs.forEach(paragraph => {
    setTimeout(() => {
      paragraph.classList.add("show");
    }, delay);
    delay += 500; // Increment delay for each paragraph animation
  });
});


// Define an array of texts to be displayed
var texts = ["Data Scientist", "Machine Learning Engineer", "AI Researcher"]; // Add more texts as needed

// Get the element by its ID
var changingText = document.getElementById("changing-text");

// Initialize index to track the current text
var index = 0;

// Function to update the text
function updateText() {
    changingText.innerText = texts[index]; // Set the text to the current index
    index = (index + 1) % texts.length; // Increment index and loop back to 0 when reaching the end
}

// Call the updateText function initially
updateText();

// Set interval to update the text every 3 seconds (adjust as needed)
var intervalId = setInterval(updateText, 3000);

// Stop the interval when the document is unloaded (optional)
document.addEventListener("unload", function() {
    clearInterval(intervalId);
});

import "./styles.css";
import { homePage } from "./homepage";
import { rAndR } from "./randr.js";
import { createMenu } from "./menu.js";

// function to clear the content
function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

// function to access different navigation buttons and enabling them when they are clicked
function handleNavigation() {
  // button selection
  const homeButton = document.querySelector(".nav-buttons button:nth-child(1)");
  const aboutButton = document.querySelector(
    ".nav-buttons button:nth-child(2)",
  );
  const menuButton = document.querySelector(".nav-buttons button:nth-child(3)");

  // resetting active buttons (active-nav is css element to indicate that the button is active)
  function resetActiveButton() {
    homeButton.classList.remove("active-nav");
    aboutButton.classList.remove("active-nav");
    menuButton.classList.remove("active-nav");
  }

  // Home page activation
  homeButton.addEventListener("click", () => {
    clearContent();
    resetActiveButton();
    homeButton.classList.add("active-nav");
    homePage();
  });
  // About us page activation
  aboutButton.addEventListener("click", () => {
    clearContent();
    resetActiveButton();
    aboutButton.classList.add("active-nav");
    rAndR();
  });

  // menu page activation
  menuButton.addEventListener("click", () => {
    clearContent();
    resetActiveButton();
    menuButton.classList.add("active-nav");
    createMenu();
  });
}

// intital page load
document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
  // base page activation
  const homeButton = document.querySelector(".nav-buttons button:nth-child(1)");
  homeButton.classList.add("active-nav");
  homePage();
});

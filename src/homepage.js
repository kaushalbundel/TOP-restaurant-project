import food from "../images/food.jpg";
import rest from "../images/restaurant.jpg";
export function homePage() {
  // selecting the content
  const content = document.querySelector("#content");

  //creating a container for images with css
  const container = document.createElement("div");
  container.classList.add("hero-section");

  //creating inner elements of the div
  const heroLeft = document.createElement("div");
  heroLeft.classList.add("hero-half");
  heroLeft.innerHTML = `
<div class="hero-image" style="background-image: url(${food})">
<div class="hero-overlay">
<h2>Delicious Food</h2>
<p>Enjoy the delicious food with your loved ones.</p>
</div>
</div>
`;

  const heroRight = document.createElement("div");
  heroRight.classList.add("hero-half");
  heroRight.innerHTML = `
<div class="hero-image" style="background-image: url(${rest})">
<div class="hero-overlay">
<h2>Peaceful Ambiance</h2>
<p>Enjoy a calm environment with your loved ones.</p>
</div>
</div>
`;

  // add Restaurant Description
  const restaurantDescription = document.createElement("div");
  restaurantDescription.classList.add("rest-description");
  restaurantDescription.innerHTML = `<p>At Macchi Fry, we blend traditional seafood recipes with innovative culinary techniques to create unforgettable dining experiences. Our menu celebrates the bounty of the ocean with sustainably sourced fish and shellfish prepared to perfection. Enjoy exceptional flavors in our tranquil seaside-inspired atmosphere, where every meal is crafted with passion and precision by our award-winning chefs.</p>`;

  //adding the two cards on the container
  container.appendChild(heroLeft);
  container.appendChild(heroRight);

  //adding two cards on the content
  content.appendChild(container);
  content.appendChild(restaurantDescription);
}

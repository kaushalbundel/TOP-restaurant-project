//The page is dedicated to displaying rewards and recognition that the restaurant has received.
//The page is divided into two sections:
//1. Text detailing the prestige and rewards associated with the restaurant.
//2. A card view displaying images of the awards and recognition.
import michelin from "../images/michelin.png";
import bestFine from "../images/best_fine.png";
import bestChoice from "../images/best-choice.png";
import innovation from "../images/innovation.png";

export function rAndR() {
  const content = document.querySelector("#content");

  //creating a container for capturing all the items
  const container = document.createElement("div");
  container.classList.add("rewards-container");

  const rnrText = document.createElement("div");
  rnrText.innerHTML = `<div class="rnr-heading"><h2>Our Rewards and Recognitions</h2></div>
  <p class="rnr-text">Our commitment to exceptional dining experiences, innovative cuisine, and sustainable practices has earned us recognition from industry experts and our cherished patrons. We are honored to share these achievements that reflect our team's dedication and passion.</p>`;

  const awardGrid = document.createElement("div");
  awardGrid.classList.add("award-grid");

  //awards are treated as a list of objects so that they can be easily queried.
  //fields will be name of the awards, logo of the award
  const awards = [
    { name: "Michelin Star", logo: michelin },
    { name: "Best Fine Dining", logo: bestFine },
    { name: "Customer Choice", logo: bestChoice },
    { name: "Innovation Award", logo: innovation },
  ];

  awards.forEach((award) => {
    const awardItem = document.createElement("div");
    awardItem.classList.add("award-Item");

    awardItem.innerHTML = `<img src="${award.logo}" alt="${award.name}">
    <h3>${award.name}</h3>`;
    awardGrid.appendChild(awardItem);
  });

  container.appendChild(rnrText);
  container.appendChild(awardGrid);
  content.appendChild(container);
}

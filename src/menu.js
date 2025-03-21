export function createMenu() {
  const menu = {
    restaurantName: "Macchi Fry",
    menuType: "Dinner Menu",
    menuItems: [
      {
        id: "app1",
        category: "Appetizers",
        name: "Osetra Caviar",
        description:
          "Premium Osetra caviar served with traditional accompaniments of crème fraîche, chives, and house-made blini",
        price: 95.0,
        dietaryInfo: ["gluten-free"],
        featured: true,
      },
      {
        id: "app2",
        category: "Appetizers",
        name: "Fresh Oyster Selection",
        description:
          "Daily selection of East and West coast oysters with champagne mignonette and lemon",
        price: 48.0,
        dietaryInfo: ["gluten-free"],
        featured: true,
      },
      {
        id: "soup1",
        category: "Soups",
        name: "Lobster Bisque",
        description:
          "Velvety lobster bisque finished with cognac, tarragon, and Maine lobster medallions",
        price: 32.0,
        dietaryInfo: [],
        featured: false,
      },
      {
        id: "ent1",
        category: "Entrées",
        name: "Pan-Seared Chilean Sea Bass",
        description:
          "Line-caught sea bass with saffron risotto, grilled asparagus, and lemon beurre blanc",
        price: 68.0,
        dietaryInfo: ["gluten-free"],
        featured: true,
      },
      {
        id: "ent2",
        category: "Entrées",
        name: "Butter-Poached Maine Lobster",
        description:
          "1.5lb Maine lobster poached in clarified butter, served with truffle mashed potatoes and seasonal vegetables",
        price: 85.0,
        dietaryInfo: ["gluten-free"],
        featured: true,
      },
      {
        id: "ent3",
        category: "Entrées",
        name: "Whole Mediterranean Branzino",
        description:
          "Grilled whole branzino stuffed with herbs, served with fingerling potatoes and salsa verde",
        price: 62.0,
        dietaryInfo: ["gluten-free"],
        featured: false,
      },
      {
        id: "ent4",
        category: "Entrées",
        name: "Alaskan King Crab Legs",
        description:
          "Steamed Alaskan king crab legs with drawn butter, charred lemon, and potato purée",
        price: 98.0,
        dietaryInfo: ["gluten-free"],
        featured: false,
      },
      {
        id: "side1",
        category: "Sides",
        name: "Black Truffle Mac & Cheese",
        description:
          "Cavatappi pasta with three-cheese blend and fresh black truffle",
        price: 24.0,
        dietaryInfo: [],
        featured: false,
      },
      {
        id: "des1",
        category: "Desserts",
        name: "Tahitian Vanilla Crème Brûlée",
        description:
          "Classic Tahitian vanilla bean crème brûlée with fresh seasonal berries",
        price: 18.0,
        dietaryInfo: ["gluten-free"],
        featured: false,
      },
      {
        id: "des2",
        category: "Desserts",
        name: "Lemon Meringue Tart",
        description:
          "House-made lemon curd tart with torched Italian meringue and raspberry coulis",
        price: 16.0,
        dietaryInfo: [],
        featured: false,
      },
    ],
  };
  // content will be used to insert the menu content
  const content = document.querySelector("#content");

  // master container
  const container = document.createElement("div");
  container.classList.add("menu-container");

  // heading container
  const menuHeading = document.createElement("div");
  menuHeading.classList.add("menu-heading");
  menuHeading.innerHTML = `<h2>${menu.menuType}<h2/>`;
  container.appendChild(menuHeading);

  // Actual Menu

  //function to change the price
  function formatPrice(price) {
    return "$" + price.toFixed(2);
  }
  // divide the complete menu in terms of categories so that category wise display can be shown on the page
  const categories = {};
  menu.menuItems.forEach(function (item) {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  // For each category create section corresponding to subsequent category and then display the individual items on the page
  Object.keys(categories).forEach(function (categoryName) {
    const categorySection = document.createElement("div");
    categorySection.className = "category";

    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = categoryName;

    // adding category name in the section
    categorySection.appendChild(categoryTitle);

    // Adding item details within each categories
    categories[categoryName].forEach(function (item) {
      // create a separate section for each individual item and add item elements in the same
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      // adding a name header
      const itemHeader = document.createElement("div");
      itemHeader.className = "item-header";

      const nameWrapper = document.createElement("div");
      const itemName = document.createElement("span");
      itemName.className = "item-name";
      itemName.textContent = item.name;

      // adding if featured or not
      if (item.featured) {
        const featuredTag = document.createElement("span");
        featuredTag.className = "featured-tag";
        featuredTag.textContent = "*Chef's Special";
        nameWrapper.appendChild(featuredTag);
      }

      const itemPrice = document.createElement("span");
      itemPrice.className = "item-price";
      itemPrice.textContent = formatPrice(item.price);

      itemHeader.appendChild(nameWrapper);
      itemHeader.appendChild(itemPrice);
      menuItem.appendChild(itemHeader);

      // add description
      const itemDescription = document.createElement("p");
      itemDescription.className = "item-description";
      itemDescription.textContent = item.description;

      menuItem.appendChild(itemDescription);

      if (item.dietaryInfo.length > 0) {
        const dietaryInfo = document.createElement("p");
        dietaryInfo.className = "dietary-info";
        dietaryInfo.textContent = item.dietaryInfo.join(", ");
        menuItem.appendChild(dietaryInfo);
      }

      // add complete item list to category section
      categorySection.appendChild(menuItem);
    });
    container.appendChild(categorySection);
  });
  content.appendChild(container);
}

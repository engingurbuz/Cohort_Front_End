const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.`,
    },
    {
      id: 3,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2021/05/Onigiri-Recipe-New.jpg",
      desc: `Rice Sandwich, serving with soy sauce.`,
    },
    {
      id: 4,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://cdn.dimsumcentral.com/wp-content/uploads/2014/02/Dorayaki-6.png",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
      id: 5,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://images.deliveryhero.io/image/fd-pk/LH/x5g8-vh8f1.jpg",
      desc: `Black bean sauce noodle, serving with green onion.`,
    },
    {
      id: 6,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://www.chinasichuanfood.com/wp-content/uploads/2021/02/ants-climbing-a-tree-13.jpg",
      desc: `Hot spicy noodles, serving with soy bean and chili oil.`,
    },
  ];
  
  // Select items
  const btnContainer = document.querySelector(".btn-container");
  const sectionCenter = document.querySelector(".section-center");
  
  // Load items
  window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayCategoryButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(
      (item) => `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`
    );
    sectionCenter.innerHTML = displayMenu.join("");
  }
  
  function displayCategoryButtons() {
    const categories = ["All", ...new Set(menu.map((item) => item.category))];
    const categoryBtns = categories
      .map(
        (category) => `
        <button class="btn btn-outline-dark btn-item" data-category="${category}">${category}</button>
      `
      )
      .join("");
    btnContainer.innerHTML = categoryBtns;
  
    const filterBtns = document.querySelectorAll(".btn-item");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(
          (menuItem) => menuItem.category === category || category === "All"
        );
        displayMenuItems(menuCategory);
      });
    });
  }
  
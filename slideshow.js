document.addEventListener("DOMContentLoaded", function() {
  const SectionCenter = document.querySelector('.menu_container');
  const filterBtns = document.querySelectorAll('.btn_con');

  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const Category = e.currentTarget.dataset.id;

      
      filterBtns.forEach(function(btn) {
        btn.classList.remove("active_btn");
      });

      
      e.currentTarget.classList.add("active_btn");

      const menuCategory = menu.filter(function(menuItem) {
        if (menuItem.Category === Category) {
          return menuItem;
        }
      });

      if (Category === "All Dishes") {
        displayMenusItem(menu);
      } else {
        displayMenusItem(menuCategory);
      }
    });
  });

  const menu = [
    {
      id: 1,
      title: "couscous",
      Category: "North African",
      price: 12.00,
      img:"8aa9cb5e7c3dd2b1a511e12ce2d1159a.jpg"
    },
    {
      id: 2,
      title: "Tacos",
      Category: "Mexican",
      price: 6.00,
      img:"Unknown.jpeg"
    },
    {
      id: 3,
      title: "Sushi",
      Category: "Asian",
      price: 6.00,
      img:"csm_945-recipe-page-gunkan-maki-sushi-with-prawn-cucumber_mobile_c85eb8e138.webp"
    },
    {
      id: 4,
      title: "Chicken kebab",
      Category: "Middle Eastern",
      price: 18.00,
      img:"chicken-kebabs-recipe-1.jpg"
    },
    {
      id: 5,
      title: "shakshuka",
      Category: "North African",
      price: 10.00,
      img:"Unknown.9.jpeg"
    },
    {
      id: 6,
      title: "Chicken Tajin",
      Category: "North African",
      price: 18.00,
      img:"Chicken-Tagine.-SS.-Low-Res-476x476.jpg"
    },
    {
      id: 7,
      title: "Brik",
      Category: "North African",
      price: 9.00,
      img:"main-qimg-c9f581a1ca8e09f644bb301ed401677c.jpeg"
    },
  
    {
      id: 8,
      title: "Dolmas",
      Category: "Middle Eastern",
      price: 8.00,
      img:"Stuffed-Grape-Leaves-Dolmas-1.jpg"
    },
    {
      id: 9,
      title: "quesadillas",
      Category: "Mexican",
      price: 7.00,
      img:"images.jpeg"
    },
    {
      id: 10,
      title: "Chicken Biryani",
      Category: "Asian",
      price: 15.00,
      img:"chicken-biryani-006.jpg"
    },
    {
      id: 11,
      title: "Pho",
      Category: "Asian",
      price: 10.00,
      img:"pho-style-beef-noodle-soup-f314a261.jpg.avif"
    },
    {
      id: 12,
      title: "huaraches",
      Category: "Mexican",
      price: 9.00,
      img:"huaraches-770x628_2932.jpg"
    },
    {
      id: 13,
      title: "shawarma",
      Category: "Middle Eastern",
      price: 9.00,
      img:"857392_fdadcd1ebb0e488da42151947331f9d6~mv2.jpg.webp"
    },
    {
      id: 14,
      title: "Fanta",
      Category: "Drinks",
      price: 2.50,
      img:"Unknown....png"
    },
    {
      id: 19,
      title: "Sprite",
      Category: "Drinks",
      price: 2.50,
      img:"Sprite-3.png.webp"
    },
    {
      id: 20,
      title: "Pepsi",
      Category: "Drinks",
      price: 2.50,
      img:"61af370544463d4b8db051d1149f830d.png"
    },
  ]

  window.addEventListener("DOMContentLoaded", function() {
    displayMenusItem(menu);
  });

  function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map(function(item) {
      return `
        <div class="img">
          <img src=${item.img} alt="" />
          <p class="price">£${item.price}</p>
          <p>${item.title}</p>
        </div>`;
    });
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
  }
});


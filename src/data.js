const menuData = [
  {
    id: 1,
    category: "Pasta",
    description:
      "Traditional Italian pasta dishes. Made with fresh ingredients, rich sauces, and perfectly cooked pasta.",
    items: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: "Spaghetti, eggs, pancetta, pecorino cheese, black pepper",
        price: 14,
        photoName: "foodImg/carbonara.jpg",
        soldOut: false,
      },
      {
        id: 2,
        name: "Penne Arrabbiata",
        ingredients: "Penne, tomato sauce, garlic, red chili, parsley",
        price: 12,
        photoName: "foodImg/arrabbiata.jpg",
        soldOut: false,
      },
      {
        id: 3,
        name: "Lasagna",
        ingredients: "Layered pasta, ricotta cheese, ground beef, tomato sauce",
        price: 16,
        photoName: "foodImg/lasagna.jpg",
        soldOut: false,
      },
      {
        id: 4,
        name: "Fettuccine Alfredo",
        ingredients: "Fettuccine, cream sauce, parmesan cheese",
        price: 15,
        photoName: "foodImg/alfredo.jpg",
        soldOut: false,
      },
      {
        id: 5,
        name: "Gnocchi Pesto",
        ingredients: "Potato gnocchi, basil pesto, parmesan cheese",
        price: 13,
        photoName: "foodImg/gnocchi.jpg",
        soldOut: false,
      },
      {
        id: 6,
        name: "Rigatoni Bolognese",
        ingredients: "Rigatoni, slow-cooked beef ragu, parmesan",
        price: 17,
        photoName: "foodImg/bolognese.jpg",
        soldOut: false,
      },
    ],
  },
  {
    id: 2,
    category: "Pizza",
    description:
      "Authentic italian pizza. 6 creative dishes to goose from. All from our stone oven, all organic , all delicious",
    items: [
      {
        id: 1,
        name: "Focaccia",
        ingredients: "Bread with Italian olive oil and rosemary",
        price: 6,
        photoName: "foodImg/focaccia.jpg",
        soldOut: false,
      },
      {
        id: 2,
        name: "Pizza Margherita",
        category: "pizza",
        ingredients: "Tomato and mozzarella",
        price: 10,
        photoName: "foodImg/margherita.jpg",
        soldOut: false,
      },
      {
        id: 3,
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "foodImg/spinaci.jpg",
        soldOut: false,
      },
      {
        id: 4,
        name: "Pizza Funghi",
        ingredients: "Tomato, mozzarella, mushrooms, and onion",
        price: 12,
        photoName: "foodImg/funghi.jpg",
        soldOut: false,
      },
      {
        id: 5,
        name: "Pizza Salamino",
        ingredients: "Tomato, mozzarella, and pepperoni",
        price: 15,
        photoName: "foodImg/salamino.jpg",
        soldOut: true,
      },
      {
        id: 6,
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: "foodImg/prosciutto.jpg",
        soldOut: false,
      },
    ],
  },

  {
    id: 3,
    category: "Salads",
    description:
      "Fresh and healthy salads. A mix of crisp greens, premium toppings, and house-made dressings. Perfect for a light yet satisfying meal.",
    items: [
      {
        id: 1,
        name: "Caesar Salad",
        ingredients: "Lettuce, croutons, parmesan, Caesar dressing",
        price: 8,
        photoName: "foodImg/caesar.jpg",
        soldOut: false,
      },
      {
        id: 2,
        name: "Greek Salad",
        ingredients: "Tomato, cucumber, feta cheese, olives, red onion",
        price: 9,
        photoName: "foodImg/greek.jpg",
        soldOut: false,
      },
      {
        id: 3,
        name: "Caprese Salad",
        ingredients: "Tomato, mozzarella, basil, balsamic glaze",
        price: 10,
        photoName: "foodImg/caprese.jpg",
        soldOut: false,
      },
      {
        id: 4,
        name: "Garden Salad",
        ingredients: "Lettuce, tomato, cucumber, carrots, house dressing",
        price: 7,
        photoName: "foodImg/garden.jpg",
        soldOut: false,
      },
      {
        id: 5,
        name: "Chicken Salad",
        ingredients: "Grilled chicken, lettuce, avocado, ranch dressing",
        price: 11,
        photoName: "foodImg/chicken.jpg",
        soldOut: false,
      },
      {
        id: 6,
        name: "Tuna Salad",
        ingredients: "Tuna, lettuce, egg, olives, house dressing",
        price: 12,
        photoName: "foodImg/tuna.jpg",
        soldOut: false,
      },
    ],
  },
  {
    id: 4,
    category: "Dessert",
    description:
      "Sweetest Italian desserts. From creamy tiramisu to rich chocolate lava cake, each bite is a taste of pure delight.",
    items: [
      {
        id: 1,
        name: "Tiramisu",
        ingredients: "Mascarpone, espresso, ladyfingers, cocoa powder",
        price: 8,
        photoName: "foodImg/tiramisu.jpg",
        soldOut: false,
      },
      {
        id: 2,
        name: "Panna Cotta",
        ingredients: "Sweetened cream, vanilla, berry sauce",
        price: 7,
        photoName: "foodImg/panna-cotta.jpg",
        soldOut: false,
      },
      {
        id: 3,
        name: "Cannoli",
        ingredients: "Crispy pastry, ricotta cheese, chocolate chips",
        price: 6,
        photoName: "foodImg/cannoli.jpg",
        soldOut: false,
      },
      {
        id: 4,
        name: "Gelato",
        ingredients: "Italian-style ice cream, various flavors",
        price: 5,
        photoName: "foodImg/gelato.jpg",
        soldOut: false,
      },
      {
        id: 5,
        name: "Chocolate Lava Cake",
        ingredients: "Chocolate cake with molten center, vanilla ice cream",
        price: 9,
        photoName: "foodImg/lava-cake.jpg",
        soldOut: false,
      },
      {
        id: 6,
        name: "Affogato",
        ingredients: "Vanilla gelato, espresso shot",
        price: 7,
        photoName: "foodImg/affogato.jpg",
        soldOut: false,
      },
    ],
  },

  {
    id: 5,
    category: "Drinks",
    description:
      "Refreshing beverages to complement your meal. From Italian wines to handcrafted sodas and fresh juices—something for everyone.",
    items: [
      {
        id: 1,
        name: "Coca-Cola",
        ingredients: "Carbonated soft drink",
        price: 3,
        photoName: "foodImg/coca-cola.jpg",
        soldOut: false,
      },
      {
        id: 2,
        name: "Red Wine",
        ingredients: "Glass of Italian red wine",
        price: 7,
        photoName: "foodImg/red-wine.jpg",
        soldOut: false,
      },
      {
        id: 3,
        name: "White Wine",
        ingredients: "Glass of Italian white wine",
        price: 7,
        photoName: "foodImg/white-wine.jpg",
        soldOut: false,
      },
      {
        id: 4,
        name: "Lemonade",
        ingredients: "Freshly squeezed lemon juice, sugar, water",
        price: 4,
        photoName: "foodImg/lemonade.jpg",
        soldOut: false,
      },
      {
        id: 5,
        name: "Espresso",
        ingredients: "Strong Italian coffee",
        price: 3,
        photoName: "foodImg/espresso.jpg",
        soldOut: false,
      },
      {
        id: 6,
        name: "Iced Tea",
        ingredients: "Black tea, lemon, ice",
        price: 4,
        photoName: "foodImg/iced-tea.jpg",
        soldOut: false,
      },
    ],
  },
];

export default menuData;

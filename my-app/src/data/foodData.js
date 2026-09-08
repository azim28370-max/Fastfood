export const foodCategories = [
  { id: 'all', name: 'All Items' },
  { id: 'pizza', name: 'Pizzas' },
  { id: 'burger', name: 'Burgers' },
  { id: 'sides', name: 'Sides & Fries' },
  { id: 'drinks', name: 'Drinks' },
];

export const foodItems = [
  {
    id: 'pizza-1',
    name: 'Margherita Fresh Basil Pizza',
    category: 'pizza',
    price: 14.99,
    rating: 4.9,
    reviews: 128,
    calories: '650 kcal',
    prepTime: '15-20 min',
    description: 'Crispy stone-baked pizza topped with vine-ripened cherry tomatoes, fresh mozzarella, and sweet basil leaves.',
    badge: 'Best Seller',
    image: '/src/assets/images/pizza-hero.jpg'
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni Overload Supreme',
    category: 'pizza',
    price: 16.99,
    rating: 4.8,
    reviews: 95,
    calories: '820 kcal',
    prepTime: '18-22 min',
    description: 'Double layer crisp pepperoni with melted artisan mozzarella and hot chili oil drizzle.',
    badge: 'Popular',
    image: '/src/assets/images/pizza-hero.jpg'
  },
  {
    id: 'burger-1',
    name: 'Smoky Bacon Cheeseburger',
    category: 'burger',
    price: 11.49,
    rating: 4.9,
    reviews: 210,
    calories: '710 kcal',
    prepTime: '10-15 min',
    description: 'Prime Angus beef patty topped with hickory smoked bacon, cheddar cheese, crisp lettuce, and secret sauce.',
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'burger-2',
    name: 'Crispy Double Chicken Smash',
    category: 'burger',
    price: 10.99,
    rating: 4.7,
    reviews: 84,
    calories: '680 kcal',
    prepTime: '10-12 min',
    description: 'Golden fried chicken breast fillets with spicy mayo, pickles, and crunchy iceberg lettuce on brioche.',
    badge: 'Hot Deals',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sides-1',
    name: 'Golden Loaded Truffle Fries',
    category: 'sides',
    price: 5.99,
    rating: 4.9,
    reviews: 340,
    calories: '420 kcal',
    prepTime: '5-8 min',
    description: 'Crispy french fries tossed in garlic truffle oil, parmesan cheese, and fresh parsley.',
    badge: 'Snack Pick',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drinks-1',
    name: 'Chilled Citrus Berry Fizz',
    category: 'drinks',
    price: 3.99,
    rating: 4.8,
    reviews: 156,
    calories: '180 kcal',
    prepTime: '3 min',
    description: 'Refreshing sparkling lemonade infused with wild berries, mint sprigs, and crushed ice.',
    badge: 'Refreshing',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];

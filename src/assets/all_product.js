// clothing
import product_1 from './product_1.jpg';
import product_2 from './product_2.jpg';
import product_3 from './product_3.jpg';
import product_4 from './product_4.jpg';
import product_5 from './product_5.jpg';
import product_6 from './product_6.jpg';
import product_7 from './product_7.jpg';
import product_8 from './product_8.jpg';
import product_9 from './product_9.jpg';
import product_10 from './product_10.jpg';

// shoes
import product_11 from './product_11.jpg';
import product_12 from './product_12.jpg';
import product_13 from './product_13.jpg';
import product_14 from './product_14.jpg';
import product_15 from './product_15.jpg';
import product_16 from './product_16.jpg';
import product_17 from './product_17.jpg';
import product_18 from './product_18.jpg';

// accessories
import product_19 from './product_19.jpg';
import product_20 from './product20.jpg';
import product_21 from './product21.jpg';
import product_22 from './product22.jpg';
import product_23 from './product23.jpg';
import product_24 from './product24.jpg';
import product_25 from './product25.jpg';
import product_26 from './product26.jpg';
import product_27 from './product27.jpg';
import product_28 from './product28.jpg';

// banners
import banner_1 from './banner_1.jpeg';
import banner_2 from './banner_2.jpeg';

export const category = [
  {
    id: 'clothing',
    name: 'Clothing',
    image: product_1,
    productCount: 156
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image: product_11,
    productCount: 89
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: product_19,
    productCount: 67
  }
];

export const products = [
  // Clothing Products
{
  id: '1',
  name: 'Premium Cotton Shirt',
  price: 2500,
  originalPrice: 3000,
  image: product_1,
  category: 'clothing',
  description: 'This Premium Cotton Shirt is crafted from 100% high-quality cotton that feels soft on the skin and offers excellent breathability. Its modern slim-fit design ensures a stylish look, while the durable stitching makes it long-lasting. Perfect for casual outings, office wear, and even semi-formal gatherings. Pair it with jeans, trousers, or chinos for a versatile style statement.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['White', 'Blue', 'Black', 'Brown'],
  inStock: true,
  rating: 4.5,
  reviews: 127
},
{
  id: '2',
  name: 'Casual T-Shirt',
  price: 1500,
  image: product_2,
  category: 'clothing',
  description: 'Our Casual T-Shirt is designed for everyday comfort and effortless style. Made from soft and breathable fabric, it ensures all-day comfort in every season. Its vibrant colors and modern fit make it perfect for hangouts, daily wear, or layering under a jacket. Easy to wash and wrinkle-resistant, this tee is a must-have wardrobe essential.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Red', 'Green', 'Yellow', 'Purple'],
  inStock: true,
  rating: 4.2,
  reviews: 89
},
{
  id: '3',
  name: 'Formal Trousers',
  price: 3500,
  originalPrice: 4000,
  image: product_3,
  category: 'clothing',
  description: 'These Formal Trousers are tailored to perfection for professionals and gentlemen who value style with comfort. Made with premium wrinkle-resistant fabric, they ensure a sharp and polished look all day long. The slim yet comfortable fit allows easy movement, making them ideal for office meetings, presentations, and formal events. Pair them with a crisp shirt or blazer for a complete professional look.',
  sizes: ['28', '30', '32', '34', '36', '38'],
  colors: ['Black', 'Brown', 'Navy Blue'],
  inStock: true,
  rating: 4.7,
  reviews: 203
},
{
  id: '4',
  name: 'Denim Jeans',
  price: 2800,
  image: product_4,
  category: 'clothing',
  description: 'Our Denim Jeans are designed for those who never compromise on comfort and style. Crafted from durable denim fabric, they provide a perfect balance of stretch and strength. With their timeless design and excellent fitting, these jeans can be paired with t-shirts, shirts, or jackets for both casual and semi-formal looks. Built to last, they retain color and shape even after multiple washes.',
  sizes: ['28', '30', '32', '34', '36'],
  colors: ['Blue', 'Black', 'Grey'],
  inStock: true,
  rating: 4.3,
  reviews: 156
},
{
  id: '5',
  name: 'Luxury Blazer',
  price: 8500,
  originalPrice: 10000,
  image: product_5,
  category: 'clothing',
  description: 'Elevate your style with this Luxury Blazer, designed with precision and class. Made from premium fabric, it offers a smooth texture and a sharp silhouette. Ideal for weddings, corporate events, or formal dinners, this blazer ensures you stand out with confidence. Lightweight yet durable, it features fine lining and strong stitching for long-lasting wear.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'Navy', 'Charcoal'],
  inStock: true,
  rating: 4.8,
  reviews: 67
},
{
  id: '6',
  name: 'Polo Shirt',
  price: 2200,
  originalPrice: 2800,
  image: product_6,
  category: 'clothing',
  description: 'This Polo Shirt is a timeless classic that combines elegance with comfort. Made from breathable cotton blend, it is perfect for casual outings, sports, or even semi-casual events. Its neatly stitched collar and buttoned placket add sophistication to your look. Available in multiple colors, it pairs perfectly with jeans, shorts, or chinos.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['White', 'Navy', 'Red', 'Green'],
  inStock: true,
  rating: 4.4,
  reviews: 142
},
{
  id: '7',
  name: 'Hoodie Sweatshirt',
  price: 3200,
  image: product_7,
  category: 'clothing',
  description: 'Stay cozy and stylish with our Hoodie Sweatshirt, crafted from soft fleece fabric for ultimate warmth. Featuring a modern fit with ribbed cuffs and hem, this hoodie is perfect for chilly evenings, workouts, or casual wear. The adjustable drawstring hood and kangaroo pocket add both functionality and style. A perfect blend of comfort and fashion.',
  sizes: ['M', 'L', 'XL', 'XXL'],
  colors: ['Grey', 'Black', 'Navy', 'Maroon'],
  inStock: true,
  rating: 4.6,
  reviews: 98
},
{
  id: '8',
  name: 'Chino Pants',
  price: 2900,
  originalPrice: 3400,
  image: product_8,
  category: 'clothing',
  description: 'Our Chino Pants are a wardrobe essential, combining versatility and comfort. Made with high-quality cotton fabric, these pants are lightweight, breathable, and durable. Their smart fit makes them perfect for office wear, casual gatherings, or semi-formal occasions. Available in multiple colors, they are easy to pair with shirts, polos, or blazers.',
  sizes: ['30', '32', '34', '36', '38'],
  colors: ['Khaki', 'Navy', 'Black', 'Olive'],
  inStock: true,
  rating: 4.5,
  reviews: 176
},
{
  id: '9',
  name: 'Dress Shirt',
  price: 3800,
  image: product_9,
  category: 'clothing',
  description: 'The Dress Shirt is a symbol of elegance and sophistication. Made from soft, high-quality cotton blend, it ensures comfort while maintaining a crisp look. Perfect for business meetings, weddings, and formal dinners, its classic design never goes out of style. Available in refined colors, this shirt is easy to pair with ties, blazers, or formal trousers.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['White', 'Light Blue', 'Pink', 'Grey'],
  inStock: true,
  rating: 4.7,
  reviews: 134
},
{
  id: '10',
  name: 'Cargo Shorts',
  price: 1800,
  originalPrice: 2200,
  image: product_10,
  category: 'clothing',
  description: 'Designed for practicality and comfort, our Cargo Shorts feature multiple spacious pockets for carrying essentials. Made with breathable cotton fabric, they are ideal for outdoor activities, casual wear, and summer days. With a relaxed fit and durable stitching, these shorts provide both comfort and ruggedness, making them a perfect choice for adventurers.',
  sizes: ['30', '32', '34', '36', '38'],
  colors: ['Khaki', 'Black', 'Olive', 'Grey'],
  inStock: true,
  rating: 4.2,
  reviews: 87
},
  
  // Shoes Products
{
  id: '11',
  name: 'Leather Formal Shoes',
  price: 4500,
  originalPrice: 5500,
  image: product_11,
  category: 'shoes',
  description: 'Crafted from 100% genuine leather, these formal shoes are designed for professionals who value both style and comfort. With a sleek silhouette, cushioned insole, and durable sole, they provide all-day comfort. Perfect for office meetings, corporate events, and wedding occasions. These shoes complement formal attire such as suits, dress pants, and traditional wear, making them a versatile wardrobe essential.',
  sizes: ['39', '40', '41', '42', '43', '44'],
  colors: ['Black', 'Brown'],
  inStock: true,
  rating: 4.6,
  reviews: 234
},
{
  id: '12',
  name: 'Running Shoes',
  price: 3200,
  image: product_12,
  category: 'shoes',
  description: 'These lightweight running shoes are designed with breathable mesh and shock-absorbing soles for maximum performance. Whether you are jogging in the park, hitting the gym, or engaging in daily sports, these shoes deliver superior comfort and durability. The non-slip outsole provides excellent grip on all surfaces, making them perfect for athletes and fitness enthusiasts.',
  sizes: ['39', '40', '41', '42', '43', '44'],
  colors: ['White', 'Black', 'Red', 'Blue'],
  inStock: true,
  rating: 4.4,
  reviews: 189
},
{
  id: '13',
  name: 'Casual Sneakers',
  price: 2800,
  originalPrice: 3500,
  image: product_13,
  category: 'shoes',
  description: 'Trendy and versatile sneakers made from high-quality materials for everyday wear. The cushioned sole ensures maximum comfort while walking or standing for long hours. Perfect to pair with jeans, chinos, or shorts, these sneakers are an ideal choice for students, travelers, and anyone who wants to stay stylish without compromising on comfort.',
  sizes: ['39', '40', '41', '42', '43'],
  colors: ['White', 'Grey', 'Black'],
  inStock: true,
  rating: 4.1,
  reviews: 95
},
{
  id: '14',
  name: 'Oxford Dress Shoes',
  price: 6500,
  originalPrice: 7800,
  image: product_14,
  category: 'shoes',
  description: 'A timeless classic, these Oxford dress shoes are crafted from premium leather with fine stitching and polished finishing. Perfect for formal occasions, business meetings, and weddings, they exude sophistication and class. Designed with cushioned footbeds and durable outsoles, these shoes combine comfort with elegance, ensuring a long-lasting wear experience.',
  sizes: ['39', '40', '41', '42', '43', '44', '45'],
  colors: ['Black', 'Dark Brown', 'Burgundy'],
  inStock: true,
  rating: 4.8,
  reviews: 167
},
{
  id: '15',
  name: 'Hiking Boots',
  price: 5200,
  image: product_15,
  category: 'shoes',
  description: 'Built for adventurers, these waterproof hiking boots are designed to handle tough terrains and long treks. With reinforced ankle support, cushioned insoles, and rugged outsoles, they provide superior grip and stability on rocky and slippery surfaces. Perfect for hiking, camping, and outdoor activities, these boots ensure durability and protection in all weather conditions.',
  sizes: ['39', '40', '41', '42', '43', '44'],
  colors: ['Brown', 'Black', 'Tan'],
  inStock: true,
  rating: 4.5,
  reviews: 123
},
{
  id: '16',
  name: 'Canvas Sneakers',
  price: 2200,
  originalPrice: 2700,
  image: product_16,
  category: 'shoes',
  description: 'These classic canvas sneakers bring a retro vibe with a modern twist. Lightweight, breathable, and comfortable, they are a must-have for casual outings and daily wear. Their simple yet stylish design makes them easy to pair with jeans, shorts, or summer outfits. With a flexible sole and soft interior lining, these sneakers are perfect for long walks and casual gatherings.',
  sizes: ['39', '40', '41', '42', '43'],
  colors: ['White', 'Navy', 'Red', 'Black'],
  inStock: true,
  rating: 4.3,
  reviews: 112
},
{
  id: '17',
  name: 'Loafers',
  price: 3800,
  image: product_17,
  category: 'shoes',
  description: 'Elegant and versatile slip-on loafers crafted for comfort and sophistication. Made from high-quality leather and suede options, they are perfect for smart casual and semi-formal events. With a cushioned footbed and flexible sole, they provide effortless wear throughout the day. Pair them with jeans, chinos, or dress pants for a sharp and stylish look.',
  sizes: ['39', '40', '41', '42', '43', '44'],
  colors: ['Black', 'Brown', 'Tan'],
  inStock: true,
  rating: 4.4,
  reviews: 89
},
{
  id: '18',
  name: 'Basketball Shoes',
  price: 4200,
  originalPrice: 5000,
  image: product_18,
  category: 'shoes',
  description: 'Engineered for performance, these basketball shoes feature excellent ankle support, cushioned midsoles, and non-slip outsoles. Designed for both indoor courts and outdoor games, they provide maximum grip, comfort, and durability. Perfect for athletes who want to enhance their performance while staying stylish on and off the court.',
  sizes: ['40', '41', '42', '43', '44', '45'],
  colors: ['White', 'Black', 'Red', 'Blue'],
  inStock: true,
  rating: 4.6,
  reviews: 145
},
  
  // Accessories Products
{
  id: '19',
  name: 'Luxury Watch',
  price: 12000,
  originalPrice: 15000,
  image: product_19,
  category: 'accessories',
  description: 'This luxury watch is crafted with premium materials and a timeless design. Featuring water-resistance, a scratch-proof glass dial, and long-term warranty, it combines elegance with durability. Perfect for both formal occasions and everyday wear, this piece ensures you stand out with class.',
  sizes: ['Standard'],
  colors: ['Silver', 'Gold', 'Black'],
  inStock: true,
  rating: 4.9,
  reviews: 78
},
{
  id: '20',
  name: 'Leather Belt',
  price: 1800,
  image: product_20,
  category: 'accessories',
  description: 'Made from 100% genuine leather, this belt offers unmatched durability and style. Its sleek design makes it suitable for both formal suits and casual jeans. With multiple sizes available, it ensures the perfect fit and adds a sophisticated touch to any outfit.',
  sizes: ['32', '34', '36', '38', '40'],
  colors: ['Black', 'Brown'],
  inStock: true,
  rating: 4.3,
  reviews: 145
},
{
  id: '21',
  name: 'Designer Wallet',
  price: 2200,
  originalPrice: 2800,
  image: product_21,
  category: 'accessories',
  description: 'This designer wallet is crafted with premium quality leather and features a stylish design. Equipped with multiple compartments, it offers plenty of space for cards, cash, and coins. Compact yet spacious, it is the perfect balance of elegance and functionality.',
  sizes: ['Standard'],
  colors: ['Black', 'Brown', 'Navy'],
  inStock: true,
  rating: 4.5,
  reviews: 112
},
{
  id: '22',
  name: 'Sunglasses',
  price: 1500,
  image: product_22,
  category: 'accessories',
  description: 'Protect your eyes in style with these UV-protected sunglasses. Designed with a lightweight frame and comfortable fit, they provide full protection against sunlight while adding a modern, stylish look. A must-have accessory for outdoor wear.',
  sizes: ['Standard'],
  colors: ['Black', 'Brown', 'Blue'],
  inStock: true,
  rating: 4.0,
  reviews: 87
},
{
  id: '23',
  name: 'Leather Backpack',
  price: 4500,
  originalPrice: 5200,
  image: product_23,
  category: 'accessories',
  description: 'This premium leather backpack is designed for both style and practicality. With multiple compartments, padded straps, and a sleek finish, it is ideal for work, travel, or daily use. Strong, durable, and elegant, it’s the perfect companion for professionals and students.',
  sizes: ['Standard'],
  colors: ['Black', 'Brown', 'Tan'],
  inStock: true,
  rating: 4.6,
  reviews: 156
},
{
  id: '24',
  name: 'Baseball Cap',
  price: 800,
  originalPrice: 1200,
  image: product_24,
  category: 'accessories',
  description: 'This classic baseball cap is made from breathable fabric and designed with an adjustable strap for a perfect fit. Lightweight and durable, it’s great for casual outings, sports, or sunny days. Available in multiple colors to suit your personal style.',
  sizes: ['One Size'],
  colors: ['Black', 'Navy', 'Red', 'White'],
  inStock: true,
  rating: 4.1,
  reviews: 93
},
{
  id: '25',
  name: 'Leather Gloves',
  price: 1600,
  image: product_25,
  category: 'accessories',
  description: 'Crafted from soft yet durable leather, these gloves provide excellent warmth and comfort in cold weather. Designed with a stylish look and snug fit, they offer both protection and elegance, making them a must-have for winters.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'Brown'],
  inStock: true,
  rating: 4.4,
  reviews: 67
},
{
  id: '26',
  name: 'Messenger Bag',
  price: 3200,
  originalPrice: 3800,
  image: product_26,
  category: 'accessories',
  description: 'This stylish messenger bag is designed for convenience and professionalism. Featuring multiple compartments and a sleek finish, it’s perfect for carrying laptops, books, and essentials for work or study. Strong straps and high-quality material ensure long-lasting use.',
  sizes: ['Standard'],
  colors: ['Black', 'Brown', 'Grey'],
  inStock: true,
  rating: 4.3,
  reviews: 104
},
{
  id: '27',
  name: 'Cufflinks Set',
  price: 2500,
  image: product_27,
  category: 'accessories',
  description: 'An elegant cufflinks set crafted with attention to detail. Ideal for formal occasions, business meetings, or weddings, these cufflinks add a touch of class and sophistication to any suit. Comes in a premium gift box, making it a perfect present as well.',
  sizes: ['Standard'],
  colors: ['Silver', 'Gold', 'Black'],
  inStock: true,
  rating: 4.7,
  reviews: 45
},
{
  id: '28',
  name: 'Scarf',
  price: 1200,
  originalPrice: 1500,
  image: product_28,
  category: 'accessories',
  description: 'Stay cozy and stylish with this premium wool blend scarf. Designed to provide warmth without compromising on style, it is soft, lightweight, and perfect for cold weather. Available in multiple colors, it can be paired with both casual and formal outfits.',
  sizes: ['Standard'],
  colors: ['Grey', 'Navy', 'Black', 'Burgundy'],
  inStock: true,
  rating: 4.2,
  reviews: 78
}
];

export const banners = [
  {
    id: '1',
    title: 'New Season Arrivals',
    subtitle: 'Up to 50% Off',
    image: banner_1,
    cta: 'Shop Now',
    category: 'clothing'
  },
  {
    id: '2',
    title: 'Premium Collection',
    subtitle: 'High Quality Accessories',
    image: banner_2,
    cta: 'Explore',
    category: 'accessories'
  }
];

export const feature = [
  {
    id: '1',
    name: 'Premium Cotton Shirt',
    price: 2500,
    originalPrice: 3000,
    image: product_1,
    category: 'clothing',
    description: 'Comfortable and stylish shirt made from premium cotton. Suitable for all seasons.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Black', 'Brown'],
    inStock: true,
    rating: 4.5,
    reviews: 127
  },
    {
    id: '19',
    name: 'Luxury Watch',
    price: 12000,
    originalPrice: 15000,
    image: product_19,
    category: 'accessories',
    description: 'Premium quality luxury watch. Water-resistant with long-term warranty.',
    sizes: ['Standard'],
    colors: ['Silver', 'Gold', 'Black'],
    inStock: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: '26',
    name: 'Messenger Bag',
    price: 3200,
    originalPrice: 3800,
    image: product_26,
    category: 'accessories',
    description: 'Stylish messenger bag perfect for daily commute and work.',
    sizes: ['Standard'],
    colors: ['Black', 'Brown', 'Grey'],
    inStock: true,
    rating: 4.3,
    reviews: 104
  },
  {
    id: '7',
    name: 'Hoodie Sweatshirt',
    price: 3200,
    image: product_7,
    category: 'clothing',
    description: 'Comfortable hoodie perfect for cold weather and casual wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Black', 'Navy', 'Maroon'],
    inStock: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: '6',
    name: 'Polo Shirt',
    price: 2200,
    originalPrice: 2800,
    image: product_6,
    category: 'clothing',
    description: 'Classic polo shirt perfect for golf and casual outings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Navy', 'Red', 'Green'],
    inStock: true,
    rating: 4.4,
    reviews: 142
  },
  {
    id: '3',
    name: 'Formal Trousers',
    price: 3500,
    originalPrice: 4000,
    image: product_3,
    category: 'clothing',
    description: 'Perfect trousers for office and formal occasions. Premium fabric and fitting.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black', 'Brown', 'Navy Blue'],
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '12',
    name: 'Running Shoes',
    price: 3200,
    image: product_12,
    category: 'shoes',
    description: 'Comfortable and durable running shoes. Perfect for sports and daily use.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    inStock: true,
    rating: 4.4,
    reviews: 189
  },
  {
    id: '8',
    name: 'Chino Pants',
    price: 2900,
    originalPrice: 3400,
    image: product_8,
    category: 'clothing',
    description: 'Versatile chino pants suitable for both casual and semi-formal occasions.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    inStock: true,
    rating: 4.5,
    reviews: 176
  }
]

export const relatedProduct = [
  {
  id: '1',
  name: 'Premium Cotton Shirt',
  price: 2500,
  originalPrice: 3000,
  image: product_1,
  category: 'clothing',
  description: 'This Premium Cotton Shirt is crafted from 100% high-quality cotton that feels soft on the skin and offers excellent breathability. Its modern slim-fit design ensures a stylish look, while the durable stitching makes it long-lasting. Perfect for casual outings, office wear, and even semi-formal gatherings. Pair it with jeans, trousers, or chinos for a versatile style statement.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['White', 'Blue', 'Black', 'Brown'],
  inStock: true,
  rating: 4.5,
  reviews: 127
},
{
  id: '2',
  name: 'Casual T-Shirt',
  price: 1500,
  image: product_2,
  category: 'clothing',
  description: 'Our Casual T-Shirt is designed for everyday comfort and effortless style. Made from soft and breathable fabric, it ensures all-day comfort in every season. Its vibrant colors and modern fit make it perfect for hangouts, daily wear, or layering under a jacket. Easy to wash and wrinkle-resistant, this tee is a must-have wardrobe essential.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Red', 'Green', 'Yellow', 'Purple'],
  inStock: true,
  rating: 4.2,
  reviews: 89
},
{
  id: '3',
  name: 'Formal Trousers',
  price: 3500,
  originalPrice: 4000,
  image: product_3,
  category: 'clothing',
  description: 'These Formal Trousers are tailored to perfection for professionals and gentlemen who value style with comfort. Made with premium wrinkle-resistant fabric, they ensure a sharp and polished look all day long. The slim yet comfortable fit allows easy movement, making them ideal for office meetings, presentations, and formal events. Pair them with a crisp shirt or blazer for a complete professional look.',
  sizes: ['28', '30', '32', '34', '36', '38'],
  colors: ['Black', 'Brown', 'Navy Blue'],
  inStock: true,
  rating: 4.7,
  reviews: 203
},
{
  id: '4',
  name: 'Denim Jeans',
  price: 2800,
  image: product_4,
  category: 'clothing',
  description: 'Our Denim Jeans are designed for those who never compromise on comfort and style. Crafted from durable denim fabric, they provide a perfect balance of stretch and strength. With their timeless design and excellent fitting, these jeans can be paired with t-shirts, shirts, or jackets for both casual and semi-formal looks. Built to last, they retain color and shape even after multiple washes.',
  sizes: ['28', '30', '32', '34', '36'],
  colors: ['Blue', 'Black', 'Grey'],
  inStock: true,
  rating: 4.3,
  reviews: 156
},

]

export const blogData = [
  {
    id: '1',
    title: 'Luxury Blazer – Redefining Formal Style',
    date: '13/07',
    image: product_5, // apni image import kr lena
    description:
      'Step into sophistication with our Luxury Blazer, designed for modern gentlemen. Crafted from premium fabric with a sharp silhouette, this piece is perfect for weddings, corporate events, and dinners. It ensures you look confident and stylish, no matter the occasion.',
  },
  {
    id: '2',
    title: 'Sneakers That Blend Comfort and Style',
    date: '14/05',
    image: product_14, // apni sneakers wali image import kr lena
    description:
      'Our premium sneakers combine modern design with unbeatable comfort. Perfect for casual outings, travel, and everyday wear, they give you a sporty yet fashionable vibe. Durable, versatile, and lightweight — sneakers that truly fit your lifestyle.',
  },
  {
    id: '3',
    title: 'Classic Polo T-Shirt Collection',
    date: '20/07',
    image: product_6, // polo t-shirt image
    description:
      'Stay cool and stylish with our Polo T-Shirt collection. Made from breathable cotton, these polos are perfect for summer days, hangouts, and even smart-casual occasions. A timeless fashion essential for every wardrobe.',
  },
  {
    id: '4',
    title: 'Cufflink Set – Elegance in Every Detail',
    date: '05/08',
    image: product_27, // cufflink set image
    description:
      'Add a touch of sophistication to your formal look with our premium Cufflink Set. Designed with fine detailing and crafted for elegance, these cufflinks are perfect for weddings, business meetings, and special occasions.',
  },
];

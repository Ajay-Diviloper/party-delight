import type { Categories } from './types';

// Category data for homepage display
// Category and Product types
// interface ProductItem {
//   name: string;
//   slug: string;
//   image: string;
//   subCategory?: [];
// }


// export interface Product {
//   name: string;
//   image: string;
//   price?: number;        // exact price (e.g., cookies)
//   price?: string;   // e.g., "$3.20 - $18.00"
//   slug?: string;
// }

// export interface Category {
//   type: 'dessert' | 'savoury';
//   name: string;
//   image: string;
//   slug: string;
//   description: string;
//   products?: Product[];
//   subCategories?: string[];
// }


export const Category: Categories[] = [
  // ------------------- DESSERTS -------------------
  { 
    type: 'dessert',
    name: 'Cakes',
    image: '/images/new-cat/Cake.webp',
    slug: 'cakes',
    description: 'Our delicious cakes for every occasion.',
    products: [
      {
        name: 'Berry Chantilly',
        image: '/images/Dessert/cake/chocolate n vanilla/Chocolate-and-Vanilla3.jpg',
        price: '$6.50 - $65.00',
        description: 'Vanilla sponge layered with fresh berries and Chantilly cream.',
        variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Carrot Cake',
        image: '/images/Dessert/cake/cookie n cream/Cookie-n-Cream3.jpg',
        price: '$6.50 - $65.00',
        description: 'Moist spiced carrot cake with walnuts and cream cheese frosting.',
           variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Chocolate Mint Cake',
        image: '/images/Dessert/cake/specialty cakes/Paw-Patrol3.jpg',
        price: '$6.50 - $65.00',
        description: 'Rich chocolate layers filled with cool mint buttercream.',
        variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Coffee Lover’s Delight',
        image: '/images/Dessert/cake/cookie n cream/Cookie-n-Cream5.jpg',
        slug : 'coffee-lovers-delight',
        price: '$6.50 - $65.00',
        description: 'Espresso-soaked mocha sponge finished with coffee cream.',
           variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Cookie Monster',
        image: '/images/Dessert/cake/cookie n cream/Cookie-n-Cream1.jpg',
        price: '$6.50 - $65.00',
        description: 'Chocolate chip–studded cake with cookie crumble frosting.',
           variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Chocolate Fudge',
        image: '/images/Dessert/cake/chocolate n vanilla/Chocolate-and-Vanilla.jpg',
        price: '$6.50 - $65.00',
        description: 'Dense chocolate cake covered in silky fudge icing.',
           variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      },
      {
        name: 'Dulce de Leche',
        image: '/images/Dessert/cake/flavours/Dulce-de-Leche1.jpg',
        price: '$6.50 - $65.00',
        description: 'Caramel-infused sponge with a dulce de leche filling.',
           variants: [
          { label: '9"', price: '$65.00' },
          { label: '7"', price: '$55.00' },
          { label: '5"', price: '$40.00' },
          { label: 'By Slice', price: '$6.50' }
        ]
      }
    ]
  },
  
  
  
  { 
    type: 'dessert',
    name: 'Cupcakes',
    image: '/images/new-cat/Cupcakes.webp',
    slug: 'cupcakes',
    description: 'Mini and regular cupcakes in delightful flavors.',
    products: [
      {
        name: 'Funfetti',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Vanilla cupcake packed with rainbow sprinkles and a buttercream swirl.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Lady in Red',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Classic red velvet topped with silky cream cheese frosting.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Mango Sunshine',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Bright mango sponge with luscious mango cream.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Not So Earl Grey',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Tea-infused cupcake with a hint of citrus and light glaze.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Peanut Butter Bliss',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Peanut butter cupcake crowned with creamy PB frosting.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Vanilla Chocolate',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Soft vanilla cupcake finished with rich chocolate ganache.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      },
      {
        name: 'Zesty Lemon Delight',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.20 - $18.00',
        description: 'Tangy lemon cupcake with zesty lemon buttercream.',
        variants: [
          { label: 'MINI CUPCAKES\n12 PACK', price: '$18.00' },
          { label: 'REGULAR CUPCAKES\n6 PACK', price: '$18.00' },
          { label: 'BY PIECE', price: '$3.20' }
        ]
      }
    ]
  },
  
  
  { 
    type: 'dessert',
    name: 'Cookies',
    image: '/images/new-cat/Cookies.jpg',
    slug: 'cookies',
    description: 'Freshly baked cookies for every mood.',
    products: [
      {
        name: 'Almond Cookies (GF)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.80',
        description: 'Crisp almond-flour cookie that’s naturally gluten-free.'
      },
      {
        name: 'Canadian Crinkle',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.40',
        description: 'Soft chocolate crinkle cookie dusted with powdered sugar.'
      },
      {
        name: 'Choco Chunk',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.40',
        description: 'Chewy vanilla cookie loaded with chunky chocolate pieces.'
      },
      {
        name: 'Dark Delight',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.40',
        description: 'Intensely dark cocoa cookie with a fudgy bite.'
      },
      {
        name: 'Double Chocolate',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.80',
        description: 'Chocolate cookie studded with chocolate chips—twice the cocoa.'
      },
      {
        name: 'Lemon Crinkle',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.40',
        description: 'Bright, zesty lemon cookie rolled in sugar and baked crinkly.'
      },
      {
        name: 'Loaded Oreo Cheesecake',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.80',
        description: 'Cookies & cream bits folded into a cheesecake-swirled dough.'
      },
      {
        name: 'Oats and Nuts',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.80',
        description: 'Hearty oatmeal cookie packed with toasted mixed nuts.'
      },
      {
        name: 'Peanut Butter',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.40',
        description: 'Classic peanut butter cookie with a soft, nutty crumb.'
      }
    ]
  },
  
  
  
  
  {
    type: 'dessert',
    name: 'Muffins',
    image: '/images/new-cat/Muffin.webp',
    slug: 'muffins',
    description: 'Soft and moist muffins.',
    products: [
      {
        name: 'Choco Chip',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.50',
        description: 'Classic vanilla muffin loaded with rich chocolate chips.'
      },
      {
        name: 'Lemon Blueberry with Streusel',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.50',
        description: 'Zesty lemon muffin dotted with blueberries and a crunchy streusel top.'
      },
      {
        name: 'Morning Glory with Cream Cheese',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.50',
        description: 'Hearty spiced muffin (carrot, apple & raisins) with a creamy cheese center.'
      },
      {
        name: 'Raspberry White Chocolate',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.50',
        description: 'Tart raspberries folded into a soft batter with white chocolate chunks.'
      }
    ]
  },


  {
    type: 'dessert',
    name: 'Shortbread Cookies',
    image: '/images/new-cat/Shortbreads.webp',
    slug: 'shortbread-cookies',
    description: 'Buttery shortbread cookies in assorted flavors, plus classic Linzer cookies.',
    products: [
      {
        name: 'Shortbread Chocolate (12 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.00',
        description: 'Classic buttery shortbread enriched with cocoa and chocolate notes.'
      },
      {
        name: 'Shortbread Coconut (12 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.00',
        description: 'Crisp shortbread with toasted coconut for a delicate tropical crunch.'
      },
      {
        name: 'Shortbread Lemon and Earl Grey (12 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.00',
        description: 'Zesty lemon and Earl Grey tea infused shortbread, bright and aromatic.'
      },
      {
        name: 'Shortbread Orange (12 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.00',
        description: 'Buttery shortbread lifted with fresh orange zest and citrus oils.'
      },
      {
        name: 'Shortbread Vanilla (12 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.00',
        description: 'Melt-in-the-mouth vanilla shortbread with a classic crumbly finish.'
      },
      {
        name: 'Linzer Cookies (6 Pack)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$10.00',
        description: 'Almond sandwich cookies filled with jam and dusted with powdered sugar.'
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Scones',
    image: '/images/new-cat/scone.jpg',
    slug: 'scones',
    description: 'Freshly baked scones in unique flavors.',
    products: [
      {
        name: 'Pineapple Coconut',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00',
        description: 'Tropical scone with juicy pineapple and toasted coconut.'
      },
      {
        name: 'Lemon Blueberry',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00',
        description: 'Zesty lemon scone studded with blueberries and a light citrus glaze.'
      },
      {
        name: 'Apple Cinnamon Pecan',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00',
        description: 'Warm spices, soft apple bits, and toasted pecans for a cozy bite.'
      },
      {
        name: 'Chocolate Orange Cranberry',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00',
        description: 'Rich cocoa with bright orange zest and tart cranberries.'
      },
      {
        name: 'Apple Cheddar Chives & Rosemary',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00',
        description: 'Savory scone with apple, sharp cheddar, fresh chives, and rosemary.'
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Macarons',
    image: '/images/new-cat/Macarons.webp',
    slug: 'macarons',
    description: 'Delicate French macarons in assorted flavours.',
    products: [
      {
        name: 'Assorted Flavours (By Piece)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.25',
        description: 'Single macaron in rotating flavours, baked fresh daily.'
      },
      {
        name: 'Pack of 6',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$12.00',
        description: 'Gift-ready box of six assorted macarons.'
      },
      {
        name: 'Pack of 12',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$22.00',
        description: 'Dozen assorted macarons perfect for sharing.'
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Pie',
    image: '/images/new-cat/pie.jpg',
    slug: 'pie',
    description: 'Classic fruit pies (eggless) available whole or by slice.',
    products: [
      {
        name: 'Apple Pie',
        image: '/images/new-cat/pie.jpg',
        price: '$3 $18.00',
        description: 'Eggless 9-inch pie with spiced apple filling.',
       variants: [
  { label: 'Whole 9"', price: '$18.00' },
  { label: 'By Slice', price: '$3.00' }
]
      },
      
      {
        name: 'Cherry Pie',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$18.00',
        description: 'Eggless 9-inch pie with tart cherry compote.',
        variants: [
  { label: 'Whole 9"', price: '$18.00' },
  { label: 'By Slice', price: '$3.00' }
]
      },
      {
        name: 'Pumpkin Pie (Seasonal)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$18.00',
        description: 'Seasonal eggless pumpkin pie with warm spices.',
        variants: [
  { label: 'Whole 9"', price: '$18.00' },
  { label: 'By Slice', price: '$3.00' }
]
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Cake Jars',
    image: '/images/new-cat/Cake Jars.webp',
    slug: 'cake-jars',
    description: 'Portable desserts in jars.',
    products: [
      {
        name: 'Bunny in a Burrow',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Moist carrot cake with silky cream cheese frosting.'
      },
      {
        name: 'Dawn Till Dusk',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Vanilla sponge layered with chocolate mousse and fudge.'
      },
      {
        name: 'I Am Groot',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Rich chocolate cake, whipped ganache, and cookie crumble.'
      },
      {
        name: 'Naughty Mango',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Mango sponge with mango cream and juicy pulp.'
      },
      {
        name: 'Northern Lights',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Vanilla cake with blueberry compote and cream.'
      },
      {
        name: 'Pie in a Jar',
        image: '/images/new-cat/Cake Jars.webp',
        price: '$7.25',
        description: 'Buttery crumble, fruit compote, and vanilla cream.'
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Tarts',
    image: '/images/new-cat/Tarts.webp', // fixed double slash
    slug: 'tarts',
    description: 'Sweet and tangy tart varieties.',
    products: [
      {
        name: 'Butter Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$3.25',
        description: 'Classic buttery tart with a gooey brown-sugar filling.'
      },
      {
        name: 'Chocolate Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Silky chocolate ganache in a crisp tart shell.'
      },
      {
        name: 'Fruit Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Vanilla custard topped with seasonal fresh fruits.'
      },
      {
        name: 'Peanut Butter Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Creamy peanut butter filling with a light chocolate drizzle.'
      },
      {
        name: 'Tangy Lemon Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.25',
        description: 'Bright, zesty lemon curd in a buttery shell.'
      },
      {
        name: 'Habibi Tart',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.50',
        description: 'Our signature specialty tart—rich, indulgent, and unforgettable.'
      }
    ]
  },
  

  {
    type: 'dessert',
    name: 'Cheesecake Slice',
    image: '/images/new-cat/Cheesecake.webp',
    slug: 'cheesecake-slice',
    description: 'Classic cheesecake slices with a variety of flavors.',
    products: [
      {
        name: 'Blueberry',
        image: '/images/Dessert/cheesecakes/Blueberry-cheesecake2.jpg',
        price: '$6.50',
        description: 'Creamy cheesecake topped with blueberry compote.'
      },
      {
        name: 'Lemon Raspberry',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$6.50',
        description: 'Zesty lemon cheesecake with a raspberry swirl.'
      },
      {
        name: 'Pumpkin (Seasonal)',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$6.50',
        description: 'Seasonal pumpkin-spiced cheesecake with warm notes of cinnamon.'
      },
      {
        name: 'Biscoff',
        image: '/images/Dessert/cheesecakes/biscoff1.jpg',
        price: '$6.50',
        description: 'Cookie butter swirl finished with Biscoff crumble.'
      },
      {
        name: 'Mango',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$6.50',
        description: 'Silky cheesecake layered with bright mango purée.'
      }
    ]
  },
  
  // {
  //   type: 'dessert',
  //   name: 'Signature Delights',
  //   image: '/images/products-category-images/comingsoon.jpeg',
  //   slug: 'signature-delights',
  //   description: 'House specials and indulgent desserts.',
  //   products: [
  //     {
  //       name: 'Crayzee Croffle',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$9.50',
  //       description: 'A buttery croissant-waffle hybrid served warm and finished with a sweet drizzle.'
  //     },
  //     {
  //       name: 'Cream Caramel',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$5.25',
  //       description: 'Silky baked custard topped with glossy caramel sauce (crème caramel).'
  //     },
  //     {
  //       name: 'Glowball Warming',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$13.50',
  //       description: 'A pour-over warm sauce melts a chocolate shell to reveal a decadent dessert inside.'
  //     },
  //     {
  //       name: 'Lava Cake',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$12.50',
  //       description: 'Warm chocolate cake with a rich molten center.'
  //     },
  //     {
  //       name: 'Saffron Tres Leche',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$6.25',
  //       description: 'Soft sponge soaked in three milks, delicately infused with saffron.'
  //     },
  //     {
  //       name: 'Signature Sticky Buns',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$4.00',
  //       description: 'Soft, gooey buns spiraled with cinnamon and glazed with caramel.'
  //     },
  //     {
  //       name: 'Tiramisu',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$6.25',
  //       description: 'Coffee-soaked layers with whipped mascarpone and a dusting of cocoa.'
  //     },
  //     {
  //       name: 'Baked Mini Donuts (6 Pack)',
  //       image: '/images/products-category-images/comingsoon.jpeg',
  //       price: '$6.00',
  //       description: 'Oven-baked bite-size donuts, lightly sweet and perfect for sharing.'
  //     }
  //   ]
  // },

  {
    type: 'dessert',
    name: 'Bag of Biscottis',
    image: '/images/new-cat/Biscotti.webp',
    slug: 'bag-of-biscottis',
    description: 'Crunchy Italian twice-baked cookies, sold as a pack of 10.',
    products: [
      {
        name: 'Chocolate & Cranberry (Pack of 10)',
        image: '/images/products-category-images/comingsoon.jpeg',
        slug: 'chocolate-cranberry-pack-of-10',
        price: '$10.00',
        description: 'Cocoa biscotti studded with tart dried cranberries.'
      },
      {
        name: 'Chocolate & Orange (Pack of 10)',
        image: '/images/products-category-images/comingsoon.jpeg',
        slug: 'chocolate-orange-pack-of-10',
        price: '$10.00',
        description: 'Dark chocolate biscotti brightened with orange zest.'
      },
      {
        name: 'Spiced Almond (Pack of 10)',
        image: '/images/products-category-images/comingsoon.jpeg',
        slug: 'spiced-almond-pack-of-10',
        price: '$10.00',
        description: 'Roasted almond biscotti with warm spice notes.'
      },
      {
        name: 'Cardamom, Pistachio & Rose (Pack of 10)',
        image: '/images/products-category-images/comingsoon.jpeg',
        slug: 'cardamom-pistachio-rose-pack-of-10',
        price: '$10.00',
        description: 'Fragrant cardamom biscotti with pistachios and a hint of rose.'
      }
    ]
  },
  
  
  
  {
    type: 'dessert',
    name: 'Loaves',
    image: '/images/new-cat/Loaves.webp',
    slug: 'loaves',
    description: 'Eggless tea loaves available whole or by slice.',
    products: [
      {
        name: 'Banana Walnut Chocochip',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.50 - $9.00',
        description: 'Moist banana loaf with walnuts and chocolate chips.',
        variants: [
  { label: 'Whole', price: '$9.00' },
  { label: 'By Slice', price: '$2.50' }
]
      },
      {
        name: 'Lemon Cranberry',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.50 - $9.00',
        description: 'Bright lemon loaf dotted with tart cranberries.',
                variants: [
  { label: 'Whole', price: '$9.00' },
  { label: 'By Slice', price: '$2.50' }
]
      },
      {
        name: 'Orange Chocolate',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.50 - $9.00',
        description: 'Citrusy orange loaf with rich chocolate chunks.',
                variants: [
  { label: 'Whole', price: '$9.00' },
  { label: 'By Slice', price: '$2.50' }
]
      },
      {
        name: 'Yummy Mummy',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$2.50 - $9.00',
        description: 'House-favorite tea loaf, soft and lightly spiced.',
                variants: [
  { label: 'Whole 9"', price: '$9.00' },
  { label: 'By Slice', price: '$2.50' }
]
      }
    ]
  },
  {
    type: 'dessert',
    name: 'Bars',
    image: '/images/new-cat/bar.jpg',
    slug: 'bars',
    description: 'Rich dessert bars in bold flavours.',
    products: [
      {
        name: 'Lemon Lust Bar',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.25',
        description: 'Tangy lemon custard on a buttery shortbread base.'
      },
      {
        name: 'Nanaimo Bar',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.25',
        description: 'Classic layered bar with coconut crumb, custard, and chocolate.'
      },
      {
        name: 'Dream Big Bar',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.25',
        description: 'Decadent chocolate bar with a creamy center and soft crumb.'
      },
      {
        name: 'Blonde Bee Sting Bar',
        image: '/images/Dessert/bars/Blondee-bee-sting2.jpg',
        price: '$4.25',
        description: 'Honey-kissed blondie topped with toasted almonds.'
      },
      {
        name: 'The Victorious Date Bar',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.25',
        description: 'Chewy date filling layered over a buttery oat base.'
      },
      {
        name: 'The Yum Rumm Bar',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.50',
        description: 'Rich chocolate bar lightly infused with rum.'
      }
    ]
  },
  
  {
    type: 'dessert',
    name: 'Brownies',
    image: '/images/new-cat/Brownies.webp',
    slug: 'brownies',
    description: 'Fudgy brownies in signature flavours.',
    products: [
      {
        name: 'BC Bliss',
        image: '/images/Dessert/brownies/BC-Bliss1.jpg',
        price: '$4.25',
        description: 'Classic fudgy brownie with rich cocoa and a hint of sea salt.'
      },
      {
        name: 'Canadian Rockies',
        image: '/images/Dessert/brownies/Canadian-Rockies3.jpg',
        price: '$4.25',
        description: 'Rocky-road inspired brownie with soft bites and chocolate chunks.'
      },
      {
        name: 'Pecan Brownie',
        image: '/images/Dessert/brownies/Pecan-Brownie3.jpg',
        price: '$4.25',
        description: 'Fudgy chocolate brownie folded with toasted pecans.'
      },
      {
        name: 'Choco Brownie',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Extra-chocolate, ultra-fudgy brownie for true chocoholics.'
      }
    ]
  },
  
 

  {
    type: 'dessert',
    name: 'Dessert Specials',
    image: '/images/new-cat/dessert_special.jpg',
    slug: 'dessert-specials',
    description: 'Unique limited-time dessert offerings.',
    products: [
      {
        name: 'Seasonal Special 1',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00 - $13.50',
        description: 'Chef’s rotating special—ask for today’s flavour and toppings.'
      },
      {
        name: 'Seasonal Special 2',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$4.00 - $13.50',
        description: 'Limited-time seasonal creation, available while supplies last.'
      }
    ]
  },
  

  // ------------------- SAVOURY -------------------
  {
    type: 'savoury',
    name: 'Croissants',
    image: '/images/new-cat/Croissant.webp',
    slug: 'croissants',
    description: 'Freshly baked flaky croissants, sweet and savoury options.',
    products: [
      {
        name: 'Plain Croissant',
        image: '/images/Savoury/Croissants/Plain Croissant/Croissants-2.jpg',
        price: '$3.50',
        description: 'Classic buttery, flaky croissant baked golden.'
      },
      {
        name: 'Almond Croissant',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Filled with almond frangipane and topped with toasted almonds.'
      },
      {
        name: 'Chicken Croissant',
        image: '/images/Savoury/Croissants/Chicken Croissant/DSC01007.jpg',
        price: '$6.25',
        description: 'Buttery croissant stuffed with herbed chicken filling.'
      },
      {
        name: 'Tuna Croissant',
        image: '/images/Savoury/Croissants/Tuna Croissant/IMG_4868.jpg',
        price: '$7.25',
        description: 'Flaky croissant filled with seasoned tuna and light mayo.'
      },
      {
        name: 'Cream Cheese Croissant',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Soft cream cheese folded into a warm, flaky croissant.'
      },
      {
        name: 'Croishouka (2pc + Salad + Fries)',
        slug: 'croishouka',
        image: '/images/Savoury/Croissants/Croishouka/DSC01150.jpg',
        price: '$7.50',
        description: 'Two croissant pockets served with fresh salad and crispy fries.'
      }
    ]
  },
  
  {
    type: 'savoury',
    name: 'Grilled Sandwiches',
    image: '/images/new-cat/Sandwiches.jpg',
    slug: 'grilled-sandwiches',
    description: 'Grilled sandwiches served with salad and fries.',
    products: [
      {
        name: 'Chicken Sandwich',
        image: '/images/Savoury/Grilled Sandwiches/Chicken Sandwich/Chicken-Sandwich.jpg',
        price: '$9.50',
        description: 'Grilled chicken, lettuce, and creamy sauce on toasted bread.'
      },
      {
        name: 'Cheese Sandwich',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$6.50',
        description: 'Classic golden grilled cheese, gooey and crisp.'
      },
      {
        name: 'Salmon Sandwich',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$12.50',
        description: 'Flaky grilled salmon with herbs and a tangy dressing.'
      },
      {
        name: 'Cauliflower Sandwich',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$8.50',
        description: 'Roasted cauliflower, peppers, and house sauce—vegetarian.'
      },
      {
        name: 'Paneer Sandwich',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$9.00',
        description: 'Spiced grilled paneer with onions and chutney—vegetarian.'
      }
    ]
  },
  
  {
    type: 'savoury',
    name: 'Danish Pastries',
    image: '/images/new-cat/Danish Pastry.webp',
    slug: 'danish-pastries',
    description: 'Flaky Danish pastries with savoury fillings.',
    products: [
      {
        name: 'Brushcetta',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.00',
        description: 'Tomato, herbs, and olive oil on a buttery Danish base.'
      },
      {
        name: 'Mushroom and Cheese',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.00',
        description: 'Creamy sautéed mushrooms topped with melted cheese.'
      },
      {
        name: 'Pesto Chicken',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.25',
        description: 'Shredded chicken with basil pesto and a hint of cheese.'
      },
      {
        name: 'Labneh Zaater',
        image: '/images/products-category-images/comingsoon.jpeg',
        price: '$5.00',
        description: 'Tangy labneh with aromatic za’atar spice blend.'
      }
    ]
  },

  
{
  type: 'savoury',
  name: 'Quiches',
  image: '/images/new-cat/Quiche.jpg',
  slug: 'quiches',
  description: 'Hearty individual quiches baked in a buttery crust.',
  products: [
    {
      name: 'Corn Broccoli Quiche',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$6.00',
      description: 'Sweet corn and broccoli bound in a creamy savoury custard.'
    },
    {
      name: 'Cheesy Mushy Delight',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$6.00',
      description: 'Mushrooms and melted cheese baked into a rich quiche.'
    },
    {
      name: 'Chicky Delight',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$6.50',
      description: 'Tender chicken pieces in a silky egg custard with herbs.'
    }
  ]
},

{
  type: 'savoury',
  name: 'Wraps',
  image: '/images/new-cat/Wraps.jpg',
  slug: 'wraps',
  description: 'Grilled wraps served with salad and fries.',
  products: [
    {
      name: 'Chicken Wrap',
      image: '/images/Savoury/Wraps/Chicken Wrap/DSC01395.jpg',
      price: '$9.50',
      description: 'Grilled chicken, fresh veggies, and house sauce in a warm tortilla.'
    },
    {
      name: 'Paneer Wrap',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$9.00',
      description: 'Spiced grilled paneer with crunchy salad and tangy chutney.'
    },
    {
      name: 'Cauliflower Wrap',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$8.50',
      description: 'Roasted cauliflower, peppers, and herbs wrapped and grilled.'
    }
  ]
},

{
  type: 'savoury',
  name: 'Specials',
  image: '/images/new-cat/Specials.webp',
  slug: 'specials',
  description: 'Freshly made savoury specials from the kitchen.',
  products: [
    {
      name: 'Chicken Pockets',
      image: '/images/Savoury/Specials/Chicken Pockets/Chicken-Pockets.jpg',
      price: '$5.25',
      description: 'Flaky pastry pockets stuffed with seasoned chicken.'
    },
    {
      name: 'Chicken Sausage Rolls',
      image: '/images/Savoury/Specials/Chicken Sausage Rolls/DSC01076.jpg',
      price: '$4.25',
      description: 'Golden-baked rolls filled with spiced chicken sausage.'
    },
    {
      name: 'Chicken Waffle with Cheese',
      image: '/images/Savoury/Specials/Chicken Waffle/DSC01682.jpg',
      price: '$9.25',
      description: 'Crispy waffle topped with chicken and melted cheese.'
    },
    {
      name: 'Dynamite Chicken Strudel',
      image: '/images/Savoury/Specials/Dynamite strudel/DSC01994.jpg',
      price: '$5.25',
      description: 'Buttery strudel layered with a spicy chicken filling.'
    },
    {
      name: 'Mac n’ Cheese',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$7.50',
      slug: 'mac-n-cheese',
      description: 'Creamy baked macaroni with a crispy cheese crust.'
    },
    {
      name: 'Cheesy Jalapeño Swirls',
      slug : 'cheesy-jalapeno-swirls',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$4.00',
      description: 'Savory pastry spirals with cheddar and jalapeños.'
    }
  ]
},

{
  type: 'savoury',
  name: 'Munchables',
  image: '/images/new-cat/munchables.jpg',
  slug: 'munchables',
  description: 'Snackable crackers and nuts to munch anytime.',
  products: [
    {
      name: 'Cheese and Nut Crackers (100g)',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$5.50',
      description: 'Crunchy crackers with a cheesy, nutty bite (100g pack).'
    },
    {
      name: 'Seed Crackers (100g)',
      image: '/images/products-category-images/comingsoon.jpeg',
      price: '$6.00',
      description: 'Crispy crackers packed with mixed seeds (100g pack).'
    },
    {
      name: 'Spiced Mix Nuts',
      image: '/images/Savoury/Munchables/Spiced mixed nuts/DSC02452.jpg',
      price: '$5.50',
      description: 'Roasted assorted nuts tossed in house spice blend.'
    }
  ]
}

];

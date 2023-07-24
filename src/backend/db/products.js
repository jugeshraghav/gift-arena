import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1",
    name: "Chocolate Truffle Cake",
    description:
      "Chocolate Truffle Cake is the epitome of indulgence, a true delight for chocolate enthusiasts. This luxurious cake features layers of moist chocolate sponge filled with velvety chocolate ganache. Topped with a glossy chocolate glaze and adorned with chocolate truffles, it offers an irresistible combination of rich flavors and smooth textures, making it a heavenly treat for special celebrations and moments of pure indulgence.",
    price: 250,
    imageUrl:
      "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Chocolate Truffle Cake",
    rating: 4.5,
    category: "Cake",
    subcategory: "Chocolate",
    bestseller: true,
  },
  {
    _id: "2",
    name: "Vanilla Celebration Cake",
    description:
      "The Vanilla Celebration Cake is a timeless and versatile delight that suits any joyous occasion. With layers of tender vanilla sponge cake, it boasts a delectable vanilla buttercream filling that's sure to please all palates. Adorned with colorful sprinkles or edible decorations, this classic cake radiates happiness and sweetness, making it the perfect centerpiece for any celebration, from birthdays to weddings and everything in between.",
    price: 300,
    imageUrl:
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Vanilla Celebration Cake",
    rating: 4.8,
    category: "Cake",
    subCategory: "Vanilla",
    bestseller: true,
  },
  {
    _id: "3",
    name: "Red Velvet Cupcakes",
    description:
      "Red Velvet Cupcakes are a delightful treat that captivates with their rich, velvety texture and vibrant crimson hue. These moist and tender cupcakes are adorned with a generous swirl of cream cheese frosting, striking the perfect balance of sweetness and tanginess. Their eye-catching appearance and delicious taste make them a favorite for celebrations, parties, or simply indulging in a scrumptious dessert.",
    price: 200,
    imageUrl:
      "https://images.pexels.com/photos/6375498/pexels-photo-6375498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Red Velvet Cupcakes",
    rating: 4.6,
    category: "Cake",
    subCategory: "Red Velvet",
    bestseller: false,
  },
  {
    _id: "4",
    name: "Rainbow Cake",
    description:
      "Rainbow Cake is a whimsical and enchanting dessert that promises a burst of colors and flavors. This multi-layered cake showcases a spectrum of vibrant hues, achieved by dividing the batter and tinting it with different food colors. With each slice revealing a stunning rainbow effect, this cake is a delightful celebration of joy, adding a touch of magic and happiness to any special occasion.",
    price: 150,
    imageUrl:
      "https://images.pexels.com/photos/11753321/pexels-photo-11753321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Rainbow Cake",
    rating: 4.9,
    category: "Cake",
    subCategory: "Specialty Cake",
    bestseller: true,
  },
  {
    _id: "5",
    name: "Black Forest Cake",
    description:
      "Black Forest Cake is a decadent and indulgent dessert that tempts the taste buds with its layers of chocolate sponge cake, cherry filling, and whipped cream frosting. Garnished with chocolate shavings and maraschino cherries, this classic German delight offers a delightful combination of rich chocolate, luscious cherries, and a hint of creaminess, making it a timeless favorite for celebrations and gatherings.",
    price: 250,
    imageUrl:
      "https://images.pexels.com/photos/6341564/pexels-photo-6341564.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Black Forest Cake",
    rating: 4.6,
    category: "Cake",
    subCategory: "Chocolate Cake",
    bestseller: false,
  },
  {
    _id: "6",
    name: "Cheesecake Sampler",
    description:
      "The Cheesecake Sampler is a delightful assortment of mini cheesecakes, each offering a unique and heavenly flavor experience. From classic New York-style to fruity delights like raspberry and blueberry swirl, and indulgent chocolate and caramel variations, this sampler is a treat for the taste buds. Perfect for dessert lovers who enjoy a variety of flavors, it's a delightful way to savor the creamy goodness of cheesecake in bite-sized portions.",
    price: 500,
    imageUrl:
      "https://images.pexels.com/photos/15419532/pexels-photo-15419532/free-photo-of-a-cheesecake-with-caramel-on-top.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Cheesecake Sampler",
    rating: 4.7,
    category: "Cake",
    subCategory: "Cheesecake",
    bestseller: true,
  },
  {
    _id: "7",
    name: "Carrot Cake",
    description:
      "Carrot Cake is a delicious and moist dessert that tantalizes with its delightful blend of flavors. This spiced cake is enriched with grated carrots and chopped nuts, offering a subtle sweetness and texture. Topped with creamy cream cheese frosting, it's a perfect harmony of flavors, making it a beloved treat for special occasions or a delightful accompaniment to afternoon tea.",
    price: 450,
    imageUrl:
      "https://images.pexels.com/photos/2612373/pexels-photo-2612373.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Carrot Cake",
    rating: 4.4,
    category: "Cake",
    subCategory: "Carrot",
    bestseller: false,
  },
  {
    _id: "8",
    name: "Triple Chocolate Cake",
    description:
      "Triple Chocolate Cake is a chocoholic's dream come true, a divine indulgence of chocolate in three layers. Each moist and fudgy chocolate sponge is generously filled and frosted with luscious chocolate ganache, creating a triple dose of chocolate goodness. Topped with chocolate curls or sprinkles, this cake offers a rich and decadent experience that leaves chocolate lovers craving for more.",
    price: 350,
    imageUrl:
      "https://images.pexels.com/photos/15445807/pexels-photo-15445807/free-photo-of-close-up-of-a-chocolate-cake.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Triple Chocolate Cake",
    rating: 4.7,
    category: "Cake",
    subCategory: "Chocolate Cake",
    bestseller: true,
  },
  {
    _id: "9",
    name: "Cheesecake Brownies",
    description:
      "Cheesecake Brownies are a delightful fusion of two beloved desserts. The fudgy and rich chocolate brownie base perfectly complements the creamy and tangy cheesecake swirls on top. This delectable treat offers a delightful contrast of textures and flavors, creating a scrumptious dessert that satisfies both chocolate and cheesecake cravings in one delightful bite.",
    price: 160,
    imageUrl:
      "https://images.pexels.com/photos/4078187/pexels-photo-4078187.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Cheesecake Brownies",
    rating: 4.6,
    category: "Cake",
    subCategory: "Brownies",
    bestseller: false,
  },
  {
    _id: "10",
    name: "Classic Chocolate Cake",
    description:
      "The Classic Chocolate Cake is a timeless and beloved dessert adored by chocolate enthusiasts of all ages. With its moist and velvety chocolate sponge, this indulgent cake is layered and frosted with rich and creamy chocolate buttercream. Whether for birthdays, celebrations, or simply to satisfy sweet cravings, this classic delight never fails to bring joy and delight with its irresistible chocolate goodness.",
    price: 260,
    imageUrl:
      "https://images.pexels.com/photos/15464829/pexels-photo-15464829/free-photo-of-close-up-of-chocolate-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Classic Chocolate Cake",
    rating: 4.7,
    category: "Cake",
    subCategory: "Chocolate",
    bestseller: true,
  },
  {
    _id: "11",
    name: "Strawberry Shortcake",
    description:
      "Strawberry Shortcake is a delightful and refreshing dessert that showcases the natural sweetness of ripe strawberries. Tender and crumbly shortcake biscuits serve as the base, topped with a layer of juicy strawberries and a dollop of luscious whipped cream. The combination of flavors and textures creates a perfect harmony of sweetness and lightness, making it a beloved treat during the strawberry season.",
    price: 490,
    imageUrl:
      "https://images.pexels.com/photos/15471971/pexels-photo-15471971/free-photo-of-white-cream-with-strawberries.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Strawberry Shortcake",
    rating: 4.5,
    category: "Cake",
    subCategory: "Strawberry",
    bestseller: false,
  },
  {
    _id: "12",
    name: "Red Velvet Cake",
    description:
      "Red Velvet Cake is an iconic and velvety dessert that enchants with its rich crimson hue and heavenly taste. With a hint of cocoa and a luscious cream cheese frosting, this moist and tender cake offers a perfect balance of flavors. Adored for its vibrant appearance and delightful taste, it's a beloved treat for celebrations and special occasions.",
    price: 500,
    imageUrl:
      "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Red Velvet Cake",
    rating: 4.3,
    category: "Cake",
    subCategory: "Red Velvet",
    bestseller: true,
  },
  {
    _id: "13",
    name: "Vanilla Pound Cake",
    description:
      "Vanilla Pound Cake is a classic and comforting dessert that captivates with its simplicity and delightful flavor. This moist and buttery cake features the subtle sweetness of pure vanilla, making it a versatile treat that pairs well with various toppings and accompaniments. Whether enjoyed on its own or with a dollop of whipped cream and fresh fruits, it's a timeless and beloved dessert for all occasions.",
    price: 190,
    imageUrl:
      "https://images.pexels.com/photos/5610353/pexels-photo-5610353.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Vanilla Pound Cake",
    rating: 4.9,
    category: "Cake",
    subCategory: "Vanilla",
    bestseller: true,
  },
  {
    _id: "14",
    name: "Classic Vanilla Cake",
    description:
      "The Classic Vanilla Cake is a timeless and beloved dessert that delights with its pure and comforting flavors. Moist and tender, this cake showcases the natural sweetness of vanilla, offering a delightful experience for every palate. Whether adorned with a velvety buttercream frosting, fresh fruits, or simply a dusting of powdered sugar, this versatile cake is a delightful centerpiece for any celebration or gathering.",
    price: 400,
    imageUrl:
      "https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Classic Vanilla Cake",
    rating: 4.8,
    category: "Cake",
    subCategory: "Vanilla",
    bestseller: true,
  },
  {
    _id: "15",
    name: "Chocolate Fudge Cake",
    description:
      "The Chocolate Fudge Cake is a chocolate lover's dream, a decadent indulgence that satisfies the sweetest cravings. This rich and moist chocolate cake is layered and coated with luscious chocolate fudge frosting, creating a heavenly combination of fudgy goodness. With its intense chocolate flavor and luxurious texture, it's a must-have dessert for special occasions or simply to indulge in pure chocolate bliss.",
    price: 300,
    imageUrl:
      "https://images.pexels.com/photos/8732739/pexels-photo-8732739.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Chocolate Fudge Cake",
    rating: 4.7,
    category: "Cake",
    subCategory: "Chocolate",
    bestseller: false,
  },
  {
    _id: "16",
    name: "Lemon Poppy Seed Cake",
    description:
      "Lemon Poppy Seed Cake is a delightful citrus-infused treat that exudes a refreshing and zesty flavor. The moist and tender cake is complemented by the subtle crunch of poppy seeds, creating a delightful textural contrast. Topped with a tangy lemon glaze, this cake offers a perfect balance of sweetness and tartness, making it a delightful choice for a sunny and flavorful dessert.",
    price: 150,
    imageUrl:
      "https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Lemon Poppy Seed Cake",
    rating: 4.6,
    category: "Cake",
    subCategory: "Lemon",
    bestseller: false,
  },
  {
    _id: "17",
    name: "Marble Pound Cake",
    description:
      "Marble Pound Cake is a delicious and visually stunning dessert that combines the richness of chocolate with the classic buttery goodness of pound cake. Swirling together vanilla and chocolate batter creates a marbled pattern throughout the cake. The result is a moist and flavorful treat that satisfies both chocolate and cake lovers alike, making it a delightful addition to any occasion.",
    price: 340,
    imageUrl:
      "https://images.pexels.com/photos/7235675/pexels-photo-7235675.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Marble Pound Cake",
    rating: 4.4,
    category: "Cake",
    subCategory: "Marble",
    bestseller: true,
  },
  {
    _id: "18",
    name: "Salted Caramel Cake",
    description:
      "Salted Caramel Cake is a delectable dessert that tantalizes taste buds with its perfect balance of sweet and salty flavors. Layers of moist and fluffy caramel-infused cake are generously filled and frosted with velvety salted caramel buttercream. Topped with a drizzle of luscious caramel sauce and a sprinkle of sea salt, this indulgent treat offers a delightful symphony of taste sensations in every heavenly bite.",
    price: 420,
    imageUrl:
      "https://images.pexels.com/photos/15772706/pexels-photo-15772706/free-photo-of-close-up-of-cake-with-decoration.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Salted Caramel Cake",
    rating: 4.7,
    category: "Cake",
    subCategory: "Salted Caramel",
    bestseller: false,
  },
  {
    _id: "19",
    name: "Mango Mousse Cake",
    description:
      "Mango Mousse Cake is a delightful tropical dessert that captures the essence of ripe and juicy mangoes. This airy and creamy cake features layers of soft sponge cake filled with a smooth mango mousse, creating a burst of fruity flavors. Topped with fresh mango slices and a light dusting of powdered sugar, it's a refreshing and indulgent treat that brings a taste of paradise to the palate.",
    price: 360,
    imageUrl:
      "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Mango Mousse Cake",
    rating: 4.5,
    category: "Cake",
    subCategory: "Mango Mousse",
    bestseller: true,
  },
  {
    _id: "20",
    name: "Raspberry Chocolate Cake",
    description:
      "Raspberry Chocolate Cake is a divine treat that combines the richness of chocolate with the tangy sweetness of raspberries. Layers of moist chocolate cake are lusciously filled with raspberry preserves and decadent chocolate ganache. Topped with fresh raspberries and chocolate shavings, this delightful dessert offers a perfect balance of flavors, creating a mouthwatering experience for chocolate and raspberry lovers alike.",
    price: 280,
    imageUrl:
      "https://images.pexels.com/photos/6133334/pexels-photo-6133334.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Raspberry Chocolate Cake",
    rating: 4.8,
    category: "Cake",
    subCategory: "Raspberry Chocolate",
    bestseller: false,
  },
  {
    _id: "21",
    name: "Coconut Cream Cake",
    description:
      "Coconut Cream Cake is a delectable dessert that tantalizes taste buds with its rich and indulgent flavors. This luscious cake features layers of moist coconut-flavored sponge cake, generously filled with creamy coconut custard and frosted with a velvety coconut cream frosting. Topped with toasted coconut flakes, it's a tropical delight that offers a heavenly combination of sweetness and coconut goodness in every bite.",
    price: 500,
    imageUrl:
      "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Coconut Cream Cake",
    rating: 4.3,
    category: "Cake",
    subCategory: "Coconut Cream",
    bestseller: true,
  },

  {
    _id: "22",
    name: "Money Tree",
    description:
      "The Money Tree (Pachira aquatica) is a unique and popular indoor plant believed to bring good luck and prosperity. With its braided trunk and lush, hand-shaped leaves, it exudes a captivating charm. As a symbol of wealth and abundance, the Money Tree is often gifted and cherished, adding a touch of nature's blessings to homes and workplaces while also being relatively easy to care for.",
    price: 300,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20230404060442/money-plant-in-colourfull-rajwada-printed-pot-hand-delivery_3.jpg",
    altText: "Money Tree",
    rating: 4.7,
    category: "Plant",
    subCategory: "Indoor",
    bestseller: true,
  },
  {
    _id: "23",
    name: "Jade Plant",
    description:
      "The Jade plant (Crassula ovata) is a delightful succulent known for its glossy, fleshy leaves and tree-like appearance. With its vibrant green color and resilient nature, it symbolizes prosperity and good luck in many cultures. Easy to care for, the Jade plant thrives with minimal attention, making it a popular choice for indoor gardening and a charming addition to homes and offices alike.",
    price: 240,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20230406050253/jade-plant-in-vibrant-floral-pot_1.jpg",
    altText: "Jade Plant",
    rating: 4.5,
    category: "Plant",
    subCategory: "Indoor",
    bestseller: false,
  },
  {
    _id: "24",
    name: "Snake Plant",
    description:
      "Snake plants (Sansevieria trifasciata), also known as Mother-in-law's Tongue, are popular houseplants appreciated for their striking appearance and low-maintenance nature. With long, upright leaves featuring green and yellow variegation, they add a touch of modern elegance to any indoor space. Not only do snake plants purify the air by removing toxins, but they also thrive in various light conditions, making them an ideal choice for both beginners and experienced plant enthusiasts.",
    price: 190,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20230328085218/greeny-sansevieria-snake-plant_1.jpg",
    altText: "Snake Plant",
    rating: 4.4,
    category: "Plant",
    subCategory: "Indoor",
    bestseller: true,
  },
  {
    _id: "25",
    name: "Bonsai Plant",
    description:
      "Bonsai plants are miniature living masterpieces that capture the essence of nature in a small container. These carefully cultivated trees, meticulously pruned and shaped, evoke a sense of harmony and tranquility. Originating from Japan, bonsai artistry reflects the beauty of aged trees in a compact form, encouraging contemplation and a deeper connection with the natural world, making them a unique and cherished addition to any home or garden.",
    price: 340,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20180804103038/desert-rose-adenium-plant_1.jpg",
    altText: "Bonsai",
    rating: 4.6,
    category: "Plant",
    subCategory: "Indoor",
    bestseller: false,
  },
  {
    _id: "26",
    name: "Bamboo Palm",
    description:
      "The Bamboo Palm (Chamaedorea seifrizii), also known as the Reed Palm, is a captivating houseplant renowned for its slender, bamboo-like stems and lush green foliage. With an air-purifying quality, it adds a refreshing touch to any indoor space. Easy to care for and adaptable, the Bamboo Palm brings a sense of tranquility and tropical charm, making it a popular choice for interior landscaping.",
    price: 150,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20211109104020/bringing-good-luck-standard_1.jpg",
    altText: "Bamboo Palm",
    rating: 4.3,
    category: "Plant",
    subCategory: "Indoor",
    bestseller: true,
  },

  {
    _id: "27",
    name: "Roses",
    description:
      "Roses, the universal language of love, captivate with their velvety petals and enchanting fragrance. Available in a myriad of colors, each hue carries its own profound meaning, from passion to friendship. As enduring symbols of romance and beauty, roses have woven themselves into the fabric of human emotions, sharing heartfelt messages and adorning celebrations, making them truly the most cherished and iconic flowers in history.",
    price: 100,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20190122180449/mixed-roses-romantic-bunch_1.jpg",
    altText: "Roses",
    rating: 4.5,
    category: "Flower",
    subCategory: "Rose",
    bestseller: true,
  },
  {
    _id: "28",
    name: "Lilies",
    description:
      "Lilies, the embodiment of grace and elegance, exude timeless beauty with their enchanting and fragrant blooms. From pure white to vibrant hues, their petals unfurl in mesmerizing symmetry. Symbolizing purity, love, and renewal, lilies possess a captivating allure that has inspired art and poetry for centuries. These exquisite flowers evoke a sense of awe and admiration, leaving a lasting impression on hearts and minds alike.",
    price: 160,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20221006132320/blooming-asiatic-lilies-in-black-ribbon-tied-vase_1.jpg",
    altText: "Lilies",
    rating: 4.3,
    category: "Flower",
    subCategory: "Lily",
    bestseller: false,
  },
  {
    _id: "29",
    name: "Daisies",
    description:
      "Daisies, the epitome of simplicity and charm, bring a touch of pure joy to any setting. With their pristine white petals and sunny yellow centers, they exude a cheerful and innocent vibe. Symbolizing purity and new beginnings, daisies enchant all who behold them, radiating positivity and reminding us of life's simple pleasures.",
    price: 200,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20210629103556/magic-of-love-floral-arrangement_1.jpg",
    altText: "Daisies",
    rating: 4.1,
    category: "Flower",
    subCategory: "Daisy",
    bestseller: true,
  },
  {
    _id: "30",
    name: "Orchids",
    description:
      "Orchids, nature's exquisite masterpieces, enchant with their delicate elegance and diverse beauty. From vibrant colors to intricate patterns, these graceful flowers captivate the senses. Symbolizing love, luxury, and rarity, orchids evoke a sense of wonder and fascination, making them truly captivating and treasured blooms in the floral world.",
    price: 140,
    imageUrl:
      "https://www.fnp.com/images/pr/l/v20220706124748/enchanting-orchids-bouquet_1.jpg",
    altText: "Orchids",
    rating: 4.4,
    category: "Flower",
    subCategory: "Orchid",
    bestseller: false,
  },
  {
    _id: "31",
    name: "Sunflowers",
    description:
      "Sunflowers (Helianthus annuus) are vibrant, yellow flowering plants known for their heliotropism—turning to face the sun. With large flower heads, they reach impressive heights and serve as a valuable source of food and oil, while also attracting pollinators. These iconic plants are not only visually striking but hold economic and ecological significance.",
    price: 320,
    imageUrl:
      "https://images.pexels.com/photos/9168324/pexels-photo-9168324.jpeg?auto=compress&cs=tinysrgb&w=600",
    altText: "Sunflowers",
    rating: 4.2,
    category: "Flower",
    subCategory: "Sunflower",
    bestseller: true,
  },
];

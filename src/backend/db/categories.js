import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Flower",
    image:
      "https://www.fnp.com/images/pr/l/v20210629103556/magic-of-love-floral-arrangement_1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Cake",
    image:
      "https://images.pexels.com/photos/6375498/pexels-photo-6375498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: uuid(),
    categoryName: "Plant",
    image:
      "https://www.fnp.com/images/pr/l/v20180804103038/desert-rose-adenium-plant_1.jpg",
  },
];

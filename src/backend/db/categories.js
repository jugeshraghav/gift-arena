import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "FLowers",
    image:"will upload",
  },
  {
    _id: uuid(),
    categoryName: "Tempting Cakes",
    image:"",
  },
  {
    _id: uuid(),
    categoryName: "Chocolates",
    iamge:""
  },
  {
    _id: uuid(),
    categoryName: "Thoughtfull Gifts",
    iamge:""
  },
  {
    _id: uuid(),
    categoryName: "Artistic Plants",
    iamge:"",
  },
  {
    _id: uuid(),
    categoryName: "Personalised Gifts",
    iamge:"",
  },
  {
    _id: uuid(),
    categoryName: "Books",
    iamge:"",
  }
];

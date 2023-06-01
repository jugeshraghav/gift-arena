import { useState } from "react";
import { useParams } from "react-router";

export const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const {
    altText,
    bestseller,
    category,
    id,
    imageUrl,
    name,
    price,
    rating,
    subCategory,
  } = product;
  const getProductDetails = async () => {
    try {
      const response = await fetch(`/api/products/${product_id}`);
      const data = await response.json();
      setProduct(data.product);
    } catch (e) {
      console.log(e);
    }
  };
  getProductDetails();
  return (
    <>
      <h1>hello {name}</h1>
    </>
  );
};

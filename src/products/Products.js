import React from "react";
import "./Products.scss";
import ProductItem from "./ProductItem";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Delux Kettle",
    price: 13.0,
    description: "Save electricity bill by 12%",
  },
  {
    id: "p2",
    name: "Plushy Cushions",
    price: 16,
    description: "They can give you best night's sleep",
  },
  {
    id: "p3",
    name: "Bitter White Chocolate",
    price: 4.99,
    description: "First of its kind",
  },
  {
    id: "p4",
    name: "Smart Toaster",
    price: 20,
    description: "Best Quality Toasts",
  },
  {
    id: "p5",
    name: "Modern Scientific Calculator",
    price: 15,
    description: "Calculate in your fingertips",
  },
  {
    id: "p6",
    name: "Electric Iron",
    price: 10,
    description: "Iron clothes without the fear of getting burns",
  },
];

const Products = () => {
  const productContent = DUMMY_PRODUCTS.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));

  return (
    <main className="main-page">
      <h1>The Products</h1>
      <div className="products-container">{productContent}</div>
    </main>
  );
};

export default Products;

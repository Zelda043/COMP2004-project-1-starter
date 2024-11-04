import { useState } from "react";
import Navbar from "./Navbar";
import products from "../data/products";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);
  // Function to add products to the cart.
  // If the product already exists in the cart, increase quantity;
  // otherwise, adds the product to the cart with the specified quantity.
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };
  // Function to empty the cart.
  const emptyCart = () => setCart([]);

  return (
    <div>
      <Navbar />
      <div className="GroceriesApp-Container">
        {/* Render ProductContainer to show the list of products */}
        <ProductContainer products={products} addToCart={addToCart} />
        {/* Render CartContainer to show items added to the cart */}
        <CartContainer cart={cart} emptyCart={emptyCart} />
      </div>
    </div>
  );
}

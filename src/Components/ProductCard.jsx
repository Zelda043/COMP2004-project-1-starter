import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  productName,
  price,
  image,
  addToCart,
  id,
}) {
  // State to track the selected quantity for the product
  const [counter, setCounter] = useState(0);
  // Adds the product to the cart only if the selected quantity is greater than zero;
  // otherwise, it alerts the user to select a valid quantity.
  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart({ id, productName, price }, counter);
    } else {
      alert("Please select a quantity greater than zero");
    }
  };

  return (
    <div className="ProductCard">
      <img src={image} />
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      {/* Quantity selector component */}
      <QuantityCounter counter={counter} setCounter={setCounter} />
      {/* Button to add the product to the cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

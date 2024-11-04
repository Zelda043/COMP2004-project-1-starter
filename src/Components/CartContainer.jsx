export default function CartContainer({ cart, emptyCart }) {
  return (
    <div className="CartContainer">
      <h2>Selected Items</h2>

      {cart.length === 0 ? (
        // if cart is empty , display message.
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          //render each item by map through cart array
          <div key={item.id} className="CartCard">
            <h4>{item.productName}</h4>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
      <div className="CartListBtns">
        <button onClick={emptyCart}>Empty Cart</button>
        <button id="BuyButton">Checkout</button>
      </div>
    </div>
  );
}

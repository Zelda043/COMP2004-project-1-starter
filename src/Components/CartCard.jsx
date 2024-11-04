export default function CartCard({ item, removeFromCart }) {
  return (
    <div className="CartCard">
      <div className="CartCardinfo">
        <img src={item.image} />
        <h4>{item.productName}</h4>
        <p>Price: {item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

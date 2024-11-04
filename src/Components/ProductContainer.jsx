import ProductCard from "./ProductCard";
export default function ProductContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
}

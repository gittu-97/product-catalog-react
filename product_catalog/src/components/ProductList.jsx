import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            stock={product.stock}
            rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;
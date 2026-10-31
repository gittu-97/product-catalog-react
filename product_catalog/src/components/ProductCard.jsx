function ProductCard({ title, price, category, image, rating }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <p className="rating">Rating: {rating.rate}/5</p>
        {/* <p className="stock-status:">{stock > 0 ? "In Stock" : "Out of Stock"}</p> */}
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
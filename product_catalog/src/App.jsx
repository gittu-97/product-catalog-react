import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import "./App.css";

const API_URL = "https://fakestoreapi.com/products";

function sortProducts(list, sortBy) {
  const sorted = [...list]; // copy, so we never mutate the original
  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    }

    loadProducts();
    return () => controller.abort();
  }, []);

  if (loading) return <p className="status">Loading products...</p>;
  if (error) return <p className="status error">Something went wrong: {error}</p>;

  // Derived data: recomputed on every render, no state needed
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => p.title.toLowerCase().includes(search.trim().toLowerCase()));

  const visibleProducts = sortProducts(filtered, sortBy);

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setSortBy("default");
  }

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      <Filters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={resetFilters}
      />

      <p className="result-count">{visibleProducts.length} products</p>

      {visibleProducts.length === 0 ? (
        <p className="status">No products match your search.</p>
      ) : (
        <ProductList products={visibleProducts} />
      )}
    </div>
  );
}

export default App;
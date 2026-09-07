import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../CartContext";
import products from "../../data/products";

function Products() {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("cyberflixWishlist")) || [];
  });

  const categories = [
    "All",
    "CPU",
    "GPU",
    "Motherboard",
    "RAM",
    "Storage",
    "PSU",
    "Case",
    "Cooler",
    "Fans",
    "Monitor",
    "Accessories"
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product) => {
    const alreadyAdded = wishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (alreadyAdded) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "cyberflixWishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  const isWishlisted = (productId) => {
    return wishlist.some(
      (item) => item.id === productId
    );
  };

  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* HEADER */}
        <section className="products-header">
          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h1>PC COMPONENTS</h1>

          <p>
            Premium components for gaming,
            productivity and high-performance builds.
          </p>
        </section>

        {/* SEARCH */}
        <section className="products-controls">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search CPU, GPU, RAM..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </section>

        {/* RESULT */}
        <div className="products-result">
          <span>
            Showing{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            products
          </span>

          <span>
            {selectedCategory}
          </span>
        </div>

        {/* PRODUCTS */}
        <section className="products-grid">

          {filteredProducts.length === 0 ? (
            <div className="no-products-found">
              <h2>No products found</h2>
              <p>
                Try another search or category.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                {/* IMAGE */}
                <div className="product-image">

                  <Link
                    to={`/product/${product.id}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  {/* WISHLIST */}
                  <button
                    className={
                      isWishlisted(product.id)
                        ? "wishlist-heart active"
                        : "wishlist-heart"
                    }
                    onClick={() =>
                      toggleWishlist(product)
                    }
                    title={
                      isWishlisted(product.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    {isWishlisted(product.id)
                      ? "♥"
                      : "♡"}
                  </button>

                </div>

                {/* PRODUCT INFO */}
                <div className="product-info">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <p className="product-brand">
                    {product.brand}
                  </p>

                  <h2>
                    {product.name}
                  </h2>

                  <div className="product-rating">
                    ★★★★★
                    <span>4.8</span>
                  </div>

                  <div className="product-bottom">

                    <strong>
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                    <span className="stock">
                      IN STOCK
                    </span>

                  </div>

                  {/* ACTIONS */}
                  <div className="product-actions">

                    <Link
                      to={`/product/${product.id}`}
                      className="view-btn"
                    >
                      VIEW
                    </Link>

                    <button
                      className="add-cart-btn"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </article>

            ))
          )}

        </section>

      </main>
    </>
  );
}

export default Products;
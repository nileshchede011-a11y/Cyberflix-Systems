import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../CartContext";
import products from "../../data/products";

function PCBuilder() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [build, setBuild] = useState({
    CPU: null,
    GPU: null,
    Motherboard: null,
    RAM: null,
    Storage: null,
    PSU: null,
    Case: null,
    Cooler: null
  });

  const categories = [
    "CPU",
    "GPU",
    "Motherboard",
    "RAM",
    "Storage",
    "PSU",
    "Case",
    "Cooler"
  ];

  const selectProduct = (category, product) => {
    setBuild((currentBuild) => ({
      ...currentBuild,
      [category]: product
    }));
  };

  const selectedProducts =
    Object.values(build).filter(Boolean);

  const selectedCount =
    selectedProducts.length;

  const totalPrice =
    selectedProducts.reduce(
      (total, product) =>
        total + product.price,
      0
    );

  /* =====================================================
     COMPATIBILITY CHECK
  ===================================================== */

  const compatibility = [];

  // CPU + Motherboard
  if (build.CPU && build.Motherboard) {
    if (
      build.CPU.brand === "AMD" &&
      build.Motherboard.name.includes("B650")
    ) {
      compatibility.push({
        type: "success",
        message:
          "CPU and B650 motherboard are compatible."
      });
    } else {
      compatibility.push({
        type: "warning",
        message:
          "Please verify CPU socket and motherboard compatibility."
      });
    }
  }

  // RAM
  if (build.RAM) {
    if (build.RAM.name.includes("DDR5")) {
      compatibility.push({
        type: "success",
        message:
          "DDR5 RAM selected. Make sure the motherboard supports DDR5."
      });
    } else {
      compatibility.push({
        type: "warning",
        message:
          "Check motherboard RAM generation compatibility."
      });
    }
  }

  // GPU + PSU
  if (build.GPU && build.PSU) {
    if (build.PSU.name.includes("750W")) {
      compatibility.push({
        type: "success",
        message:
          "750W PSU selected for the graphics card."
      });
    } else {
      compatibility.push({
        type: "warning",
        message:
          "Please verify recommended PSU wattage for the selected GPU."
      });
    }
  }

  // Case
  if (build.Case && build.Motherboard) {
    compatibility.push({
      type: "success",
      message:
        "Case and motherboard selected. Check motherboard form-factor and clearance."
    });
  }

  // Cooler
  if (build.Cooler && build.CPU) {
    compatibility.push({
      type: "success",
      message:
        "CPU cooler selected. Verify cooler socket support before installation."
    });
  }

  const hasWarning =
    compatibility.some(
      (item) => item.type === "warning"
    );

  /* =====================================================
     ADD COMPLETE BUILD
  ===================================================== */

  const addCompleteBuild = () => {
    if (selectedCount === 0) {
      alert(
        "Please select components first."
      );
      return;
    }

    if (hasWarning) {
      const confirmBuild =
        window.confirm(
          "Compatibility warnings were detected. Do you want to add this build to cart anyway?"
        );

      if (!confirmBuild) {
        return;
      }
    }

    selectedProducts.forEach((product) => {
      addToCart(product);
    });

    alert(
      "Complete PC build added to cart!"
    );

    navigate("/cart");
  };

  return (
    <>
      <Navbar />

      <main className="builder-page">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="builder-header">

          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h1>
            PC BUILDER
          </h1>

          <p>
            Build your dream PC with our smart
            component builder.
          </p>

        </section>


        {/* =================================================
            PC PREVIEW
        ================================================= */}

        <section className="build-preview">

          <div className="preview-heading">

            <div>

              <p className="eyebrow">
                CUSTOM CONFIGURATION
              </p>

              <h2>
                YOUR CUSTOM PC
              </h2>

            </div>

            <div className="preview-count">
              {selectedCount}/{categories.length}
              {" "}COMPONENTS
            </div>

          </div>


          <div className="preview-content">

            <div className="preview-pc">

              <div className="pc-case-preview">

                <div className="pc-glow"></div>

                {build.Case ? (
                  <img
                    src={build.Case.image}
                    alt={build.Case.name}
                  />
                ) : (
                  <div className="empty-pc-preview">

                    <span>
                      PC
                    </span>

                    <small>
                      Select a case
                    </small>

                  </div>
                )}

              </div>

            </div>


            <div className="preview-details">

              <h3>
                {build.Case
                  ? build.Case.name
                  : "Your Custom Gaming PC"}
              </h3>

              <p>
                {selectedCount === 0
                  ? "Start selecting components below."
                  : `${selectedCount} components selected`}
              </p>


              <div className="preview-tags">

                {build.CPU && (
                  <span>CPU ✓</span>
                )}

                {build.GPU && (
                  <span>GPU ✓</span>
                )}

                {build.Motherboard && (
                  <span>
                    Motherboard ✓
                  </span>
                )}

                {build.RAM && (
                  <span>RAM ✓</span>
                )}

                {build.Storage && (
                  <span>
                    Storage ✓
                  </span>
                )}

                {build.PSU && (
                  <span>PSU ✓</span>
                )}

                {build.Case && (
                  <span>Case ✓</span>
                )}

                {build.Cooler && (
                  <span>Cooler ✓</span>
                )}

              </div>


              <div className="preview-price">

                <span>
                  BUILD VALUE
                </span>

                <strong>
                  ₹
                  {totalPrice.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            COMPATIBILITY CHECK
        ================================================= */}

        <section className="compatibility-box">

          <div className="compatibility-header">

            <div>

              <p className="eyebrow">
                SMART CHECK
              </p>

              <h2>
                COMPATIBILITY CHECK
              </h2>

            </div>


            {selectedCount === 0 ? (

              <span className="compatibility-neutral">
                SELECT COMPONENTS
              </span>

            ) : hasWarning ? (

              <span className="compatibility-warning">
                ⚠ CHECK REQUIRED
              </span>

            ) : (

              <span className="compatibility-good">
                ✓ BUILD LOOKS GOOD
              </span>

            )}

          </div>


          {selectedCount === 0 ? (

            <p className="compatibility-empty">
              Select components below to start
              your PC build.
            </p>

          ) : (

            <div className="compatibility-messages">

              {compatibility.length === 0 && (

                <div className="compatibility-message success">
                  ✓ Select more components to
                  perform compatibility checks.
                </div>

              )}

              {compatibility.map(
                (item, index) => (

                  <div
                    key={index}
                    className={`compatibility-message ${item.type}`}
                  >

                    {item.type === "success"
                      ? "✓"
                      : "⚠"}

                    {" "}

                    {item.message}

                  </div>

                )
              )}

            </div>

          )}

        </section>


        {/* =================================================
            COMPONENT SELECTION
        ================================================= */}

        <section className="builder-layout">

          <div className="builder-components">

            {categories.map((category) => {

              const categoryProducts =
                products.filter(
                  (product) =>
                    product.category ===
                    category
                );

              return (

                <div
                  className="builder-section"
                  key={category}
                >

                  <div className="builder-section-title">

                    <div>

                      <span className="component-number">
                        {String(
                          categories.indexOf(
                            category
                          ) + 1
                        ).padStart(2, "0")}
                      </span>

                      <h2>
                        {category}
                      </h2>

                    </div>


                    {build[category] && (

                      <span className="selected-badge">
                        ✓ SELECTED
                      </span>

                    )}

                  </div>


                  <div className="builder-products">

                    {categoryProducts.length ===
                    0 ? (

                      <p className="no-products">
                        No products available.
                      </p>

                    ) : (

                      categoryProducts.map(
                        (product) => {

                          const isSelected =
                            build[category]?.id ===
                            product.id;

                          return (

                            <div
                              className={
                                isSelected
                                  ? "builder-product active"
                                  : "builder-product"
                              }
                              key={product.id}
                            >

                              <div className="builder-image-wrap">

                                <img
                                  src={product.image}
                                  alt={product.name}
                                />

                                {isSelected && (

                                  <span className="selected-check">
                                    ✓
                                  </span>

                                )}

                              </div>


                              <div className="builder-product-info">

                                <p className="builder-brand">
                                  {product.brand}
                                </p>

                                <h3>
                                  {product.name}
                                </h3>


                                <div className="builder-price-row">

                                  <strong>
                                    ₹
                                    {product.price.toLocaleString(
                                      "en-IN"
                                    )}
                                  </strong>

                                  <button
                                    className={
                                      isSelected
                                        ? "select-btn selected-btn"
                                        : "select-btn"
                                    }
                                    onClick={() =>
                                      selectProduct(
                                        category,
                                        product
                                      )
                                    }
                                  >

                                    {isSelected
                                      ? "SELECTED ✓"
                                      : "SELECT"}

                                  </button>

                                </div>

                              </div>

                            </div>

                          );
                        }
                      )

                    )}

                  </div>

                </div>

              );

            })}

          </div>


          {/* =================================================
              BUILD SUMMARY
          ================================================= */}

          <aside className="build-summary">

            <p className="eyebrow">
              YOUR BUILD
            </p>

            <h2>
              BUILD SUMMARY
            </h2>


            <div className="build-progress">

              <div className="progress-text">

                <span>
                  Components
                </span>

                <strong>
                  {selectedCount}/
                  {categories.length}
                </strong>

              </div>


              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      (selectedCount /
                        categories.length) *
                      100
                    }%`
                  }}
                />

              </div>

            </div>


            <div className="summary-list">

              {categories.map(
                (category) => (

                  <div
                    className="summary-component"
                    key={category}
                  >

                    <span>
                      {category}
                    </span>

                    <strong>

                      {build[category]
                        ? `₹${build[
                            category
                          ].price.toLocaleString(
                            "en-IN"
                          )}`
                        : "Not Selected"}

                    </strong>

                  </div>

                )
              )}

            </div>


            <div className="builder-total">

              <span>
                TOTAL BUILD VALUE
              </span>

              <strong>
                ₹
                {totalPrice.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>


            <button
              className="build-btn"
              disabled={
                selectedCount === 0
              }
              onClick={addCompleteBuild}
            >
              ADD COMPLETE BUILD →
            </button>


            <p className="builder-note">
              Your selected components will be
              added to the shopping cart.
              Compatibility warnings are shown
              before adding a potentially
              incompatible build.
            </p>

          </aside>

        </section>

      </main>
    </>
  );
}

export default PCBuilder;
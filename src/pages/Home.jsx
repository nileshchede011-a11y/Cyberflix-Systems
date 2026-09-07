import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const categories = [
    {
      code: "CPU",
      title: "Processors",
      text: "High-performance CPUs"
    },
    {
      code: "GPU",
      title: "Graphics Cards",
      text: "Powerful gaming graphics"
    },
    {
      code: "RAM",
      title: "Memory",
      text: "Fast DDR5 performance"
    },
    {
      code: "SSD",
      title: "Storage",
      text: "Ultra-fast SSD storage"
    },
    {
      code: "MB",
      title: "Motherboards",
      text: "Build-ready platforms"
    },
    {
      code: "PSU",
      title: "Power Supply",
      text: "Reliable system power"
    },
    {
      code: "CASE",
      title: "PC Cases",
      text: "Premium airflow designs"
    },
    {
      code: "COOL",
      title: "CPU Coolers",
      text: "Keep your system cool"
    },
    {
      code: "FAN",
      title: "Cooling Fans",
      text: "Better airflow"
    },
    {
      code: "MON",
      title: "Monitors",
      text: "Gaming & productivity displays"
    },
    {
      code: "KEY",
      title: "Keyboards",
      text: "Mechanical gaming keyboards"
    },
    {
      code: "MOUSE",
      title: "Gaming Mice",
      text: "Precision gaming mice"
    },
    {
      code: "HEAD",
      title: "Headsets",
      text: "Immersive gaming audio"
    },
    {
      code: "CAM",
      title: "Webcams",
      text: "Clear video streaming"
    },
    {
      code: "SPK",
      title: "Speakers",
      text: "Powerful desktop audio"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* HERO */}
        <section className="gaming-hero">

          <div className="gaming-hero-overlay"></div>

          <div className="gaming-hero-content">

            <div className="gaming-hero-text">

              <p className="hero-eyebrow">
                CYBERFLIX SYSTEMS LLP
              </p>

              <h1>
                BUILD
                <span>BEYOND</span>
                LIMITS.
              </h1>

              <p className="hero-description">
                Premium PC components, custom gaming
                builds and intelligent compatibility
                checking — all in one place.
              </p>

              <div className="hero-actions">

                <Link
                  to="/products"
                  className="hero-primary-btn"
                >
                  EXPLORE COMPONENTS →
                </Link>

                <Link
                  to="/pc-builder"
                  className="hero-secondary-btn"
                >
                  BUILD YOUR PC
                </Link>

              </div>

            </div>

            <div className="gaming-hero-image">

              <div className="hero-image-glow"></div>

              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200"
                alt="Gaming PC"
              />

              <div className="hero-image-label">
                <span>CYBERFLIX</span>
                <strong>GAMING SYSTEM</strong>
              </div>

            </div>

          </div>

        </section>

        {/* FEATURE STRIP */}
        <section className="home-features">

          <div className="home-feature">
            <span>⚡</span>
            <div>
              <strong>HIGH PERFORMANCE</strong>
              <small>Premium PC components</small>
            </div>
          </div>

          <div className="home-feature">
            <span>✓</span>
            <div>
              <strong>COMPATIBILITY CHECK</strong>
              <small>Build with confidence</small>
            </div>
          </div>

          <div className="home-feature">
            <span>🛡</span>
            <div>
              <strong>GENUINE PRODUCTS</strong>
              <small>Quality components</small>
            </div>
          </div>

          <div className="home-feature">
            <span>🚚</span>
            <div>
              <strong>FREE DELIVERY</strong>
              <small>Across India</small>
            </div>
          </div>

        </section>

        {/* CATEGORY SECTION */}
        <section className="home-categories">

          <div className="home-section-heading">

            <div>
              <p className="eyebrow">
                EXPLORE OUR STORE
              </p>

              <h2>
                SHOP COMPONENTS
              </h2>
            </div>

            <Link
              to="/products"
              className="section-view-all"
            >
              VIEW ALL →
            </Link>

          </div>

          <div className="home-category-grid">

            {categories.map((category) => (
              <Link
                key={category.code}
                to="/products"
                className="home-category-card"
              >

                <span className="category-code">
                  {category.code}
                </span>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.text}
                </p>

                <span className="category-link">
                  VIEW →
                </span>

              </Link>
            ))}

          </div>

        </section>

        {/* PC BUILDER CTA */}
        <section className="home-builder-cta">

          <div className="builder-cta-content">

            <p className="eyebrow">
              SMART PC BUILDER
            </p>

            <h2>
              BUILD YOUR
              <span>DREAM PC.</span>
            </h2>

            <p>
              Choose your components and let Cyberflix
              help you create a powerful, compatible
              custom PC build.
            </p>

            <Link
              to="/pc-builder"
              className="hero-primary-btn"
            >
              START BUILDING →
            </Link>

          </div>

          <div className="builder-cta-visual">
            <div className="builder-ring"></div>
            <div className="builder-ring ring-two"></div>
            <div className="builder-core">
              CFX
            </div>
          </div>

        </section>

        {/* FINAL CTA */}
        <section className="home-final-cta">

          <p className="eyebrow">
            CYBERFLIX SYSTEMS LLP
          </p>

          <h2>
            READY TO BUILD
            <span>BEYOND LIMITS?</span>
          </h2>

          <p>
            Start with premium components or create
            your complete custom PC today.
          </p>

          <div className="hero-actions">

            <Link
              to="/products"
              className="hero-primary-btn"
            >
              SHOP COMPONENTS →
            </Link>

            <Link
              to="/pc-builder"
              className="hero-secondary-btn"
            >
              BUILD A PC
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;
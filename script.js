console.log("Cyberflix Systems LLP Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("js-ready");

    // Mobile navigation
    const menu = document.querySelector(".nav-menu");
    const nav = document.querySelector(".main-nav");
    if (menu && nav) {
        menu.addEventListener("click", () => {
            nav.classList.toggle("mobile-open");
        });
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => nav.classList.remove("mobile-open"));
        });
    }

    // Cart count: include both store products and builder components.
    const count = document.getElementById("cartCount");
    if (count) {
        try {
            const storeCart = JSON.parse(localStorage.getItem("cyberflixCart") || "[]");
            const build = JSON.parse(localStorage.getItem("cyberflixBuild") || "null");
            let total = storeCart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
            if (build) {
                const buildItems = Array.isArray(build) ? build : (Array.isArray(build.components) ? build.components : []);
                total += buildItems.length;
            }
            count.textContent = total;
        } catch (e) {
            count.textContent = "0";
        }
    }

    // Scroll reveal animation
    const revealItems = document.querySelectorAll(".reveal-up, .reveal-scale, .reveal-section");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(el => observer.observe(el));
    } else {
        revealItems.forEach(el => el.classList.add("revealed"));
    }

    // Number counting animation
    const counters = document.querySelectorAll(".counter");
    if (counters.length && "IntersectionObserver" in window) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = Number(el.dataset.target || 0);
                const suffix = el.dataset.suffix || "";
                const duration = 1100;
                const start = performance.now();

                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased) + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
                obs.unobserve(el);
            });
        }, { threshold: 0.55 });
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Small mouse spotlight for desktop cards
    document.querySelectorAll(".pc-option-card, .premium-component-card, .premium-why-grid > div").forEach(card => {
        card.addEventListener("pointermove", event => {
            if (window.matchMedia("(pointer: coarse)").matches) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        });
    });
});

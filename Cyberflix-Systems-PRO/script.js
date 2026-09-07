console.log("Cyberflix Systems LLP Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
    const builderButton = document.querySelector(".builder-btn");
    if (builderButton) {
        builderButton.addEventListener("click", () => {
            window.location.href = "builder.html";
        });
    }
});

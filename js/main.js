document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    initActiveLink();
    initMobileMenu();
});

async function loadComponent(id, file) {
    const target = document.getElementById(id);

    if (!target) {
        return;
    }

    try {
        const response = await fetch(file);
        target.innerHTML = await response.text();
    } catch (error) {
        console.error(`Unable to load ${file}`, error);
    }
}

function initActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

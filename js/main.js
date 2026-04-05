// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("footer", "components/footer.html");

    initNavbar();
    initSmoothScroll();
});

// ================= LOAD COMPONENT =================
async function loadComponent(id, file) {
    try {
        const res = await fetch(file);
        const data = await res.text();
        document.getElementById(id).innerHTML = data;
    } catch (error) {
        console.error("Error loading component:", file);
    }
}

// ================= NAVBAR =================
function initNavbar() {
    const header = document.querySelector(".header");

    if (!header) return; // safety check

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
}

// ================= SMOOTH SCROLL =================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
}
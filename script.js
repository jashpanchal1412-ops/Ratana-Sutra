// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Category tabs
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.products-container').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const id = tab.dataset.category;
        document.getElementById(id).classList.add('active');
    });
});

// Carousel
let cur = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function goTo(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
setInterval(() => goTo(cur + 1), 4000);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Current Year 
document.getElementById("year").textContent = new Date().getFullYear();

// Image Zoom Modal
const modal =
    document.getElementById("imageModal");

const modalImg =
    document.getElementById("modalImage");

const closeBtn =
    document.querySelector(".close-modal");

// Apply to ALL product images
document.querySelectorAll(".product-image")
    .forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImg.src = img.src;

        });

    });

// Close modal
closeBtn.onclick = () =>
    modal.style.display = "none";

modal.onclick = () =>
    modal.style.display = "none";

// WhatsApp Order Function
function orderWhatsApp(productName, price) {
    let phone = "919313228041";

    let message =
        "Hello! I want to order:%0A%0A" +
        "Product: " + productName + "%0A" +
        "Price: ₹" + price;

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        message;

    window.open(url, "_blank");
}
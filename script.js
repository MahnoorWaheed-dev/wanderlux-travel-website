// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');
    }, 1000);
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Dark Mode Toggle with Enhanced Visual State
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    text.textContent = 'Light Mode';
}

// Destinations Data
const destinations = [
    { name: "Swiss Alps", location: "Switzerland", desc: "Majestic mountains & pristine lakes", image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600", price: "From $1,299" },
    { name: "Santorini", location: "Greece", desc: "White-washed buildings & sunset views", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHwy", price: "From $899" },
    { name: "Bali", location: "Indonesia", desc: "Tropical paradise & spiritual retreats", image: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D", price: "From $699" },


    { name: "Machu Picchu", location: "Peru", desc: "Ancient wonders & Andean culture", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHwy", price: "From $1,499" },
    { name: "Machu Picchu", location: "Peru", desc: "Ancient wonders & Andean culture", image: "https://images.pexels.com/photos/2450292/pexels-photo-2450292.jpeg?auto=compress&cs=tinysrgb&w=600", price: "From $1,499" },
    { name: "Machu Picchu", location: "Peru", desc: "Ancient wonders & Andean culture", image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D", price: "From $1,499" }


];

// Adventure Experiences
const adventures = [
    { title: "Mountain Trekking", location: "Himalayas", image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Scuba Diving", location: "Maldives", image: "https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdWJhJTIwZGl2aW5nJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDI%3D" },
    { title: "Desert Safari", location: "Dubai", image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVzZXJ0JTIwU2FmYXJpJTIwRHViYWl8ZW58MHx8MHx8fDI%3D" }
];

// Testimonials
const testimonials = [
    { name: "Sarah Johnson", location: "USA", review: "The best travel experience of my life! Everything was perfectly organized.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Michael Chen", location: "Singapore", review: "Unforgettable journey! The guides were knowledgeable and friendly.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Emma Wilson", location: "UK", review: "WanderLux made my dream vacation a reality. Highly recommend!", img: "https://randomuser.me/api/portraits/women/44.jpg" }
];

// Gallery Images
const galleryImages = [
    "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1549144511-f099e773c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1574260031597-bcd9eb192b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
];

// Render Destinations
function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = destinations.map(dest => `
            <div class="destination-card">
                <div class="dest-img" style="background-image: url('${dest.image}')"></div>
                <div class="dest-info">
                    <h3>${dest.name}</h3>
                    <p class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                    <p>${dest.desc}</p>
                    <p style="margin-top: 1rem; font-weight: 600; color: var(--accent-primary);">${dest.price}</p>
                </div>
            </div>
        `).join('');
}

// Render Adventures
function renderAdventures() {
    const grid = document.getElementById('adventureGrid');
    grid.innerHTML = adventures.map(adv => `
            <div class="adventure-item">
                <img src="${adv.image}" alt="${adv.title}">
                <div class="adventure-overlay">
                    <h3>${adv.title}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${adv.location}</p>
                </div>
            </div>
        `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    slider.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <img src="${t.img}" alt="${t.name}">
                <div class="stars"><i class="fas fa-star" style="color: #fbbf24;"></i><i class="fas fa-star" style="color: #fbbf24;"></i><i class="fas fa-star" style="color: #fbbf24;"></i><i class="fas fa-star" style="color: #fbbf24;"></i><i class="fas fa-star" style="color: #fbbf24;"></i></div>
                <p class="customer-review">"${t.review}"</p>
                <h4>${t.name}</h4>
                <small>${t.location}</small>
            </div>
        `).join('');
}

// Render Gallery
function renderGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = galleryImages.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Travel Gallery">
            </div>
        `).join('');
}

// Newsletter Subscription
document.getElementById('subscribeBtn').addEventListener('click', () => {
    const email = document.getElementById('newsletterEmail').value;
    if (email && email.includes('@')) {
        alert(`Thank you for subscribing! ${email} will receive travel inspiration.`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize
renderDestinations();
renderAdventures();
renderTestimonials();
renderGallery();

// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

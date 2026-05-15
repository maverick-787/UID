// ---- THEME TOGGLE ----
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = isDark ? '☀️' : '🌙';
  }
}

// Check saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('theme-icon');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    if (icon) icon.textContent = '☀️';
  } else {
    if (icon) icon.textContent = '🌙';
  }

  renderMenu();
  checkAuthStatus();
});

function checkAuthStatus() {
  const userStr = localStorage.getItem('currentUser');
  const authBtn = document.getElementById('auth-btn');
  if (userStr && authBtn) {
    const user = JSON.parse(userStr);
    authBtn.textContent = 'Logout';
    authBtn.href = '#';
    authBtn.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      window.location.reload();
    };
  }
}

// ---- MENU DATA ----
const menuData = [
  { id: 1, name: "Butter Chicken", desc: "Tender chicken in velvety tomato-cream sauce with fenugreek", price: 380, rating: 4.9, time: "20 min", badge: "Popular", badgeType: "", category: "mains", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80" },
  { id: 2, name: "Malabar Biryani", desc: "Fragrant Kerala-style biryani with caramelised onions & ghee", price: 420, rating: 4.8, time: "30 min", badge: "Bestseller", badgeType: "", category: "biryani", img: "https://www.ruchikrandhap.com/wp-content/uploads/2011/02/Malabar-Biryani_1-500x500.jpeg" },
  { id: 3, name: "Paneer Tikka", desc: "Char-grilled cottage cheese cubes with spiced yogurt marinade", price: 280, rating: 4.7, time: "15 min", badge: "Veg", badgeType: "veg", category: "starters", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80" },
  { id: 4, name: "Dal Makhani", desc: "Slow-cooked black lentils simmered overnight with cream & spices", price: 240, rating: 4.8, time: "20 min", badge: "Veg", badgeType: "veg", category: "mains", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80" },
  { id: 5, name: "Malabar Prawns", desc: "King prawns tossed in coconut milk, curry leaves & spices", price: 520, rating: 4.9, time: "25 min", badge: "Spicy 🔥", badgeType: "spicy", category: "mains", img: "https://www.licious.in/blog/wp-content/uploads/2021/01/malabar-prawn-curry.jpg" },
  { id: 6, name: "Chicken 65", desc: "Crispy deep-fried chicken with curry leaves and green chillies", price: 320, rating: 4.7, time: "18 min", badge: "Spicy 🔥", badgeType: "spicy", category: "starters", img: "https://www.teaforturmeric.com/wp-content/uploads/2024/05/Chicken-65-11-500x500.jpg" },
  { id: 7, name: "Gulab Jamun", desc: "Soft milk dumplings soaked in rose-cardamom sugar syrup", price: 140, rating: 4.9, time: "10 min", badge: "Veg", badgeType: "veg", category: "desserts", img: "https://pipingpotcurry.com/wp-content/uploads/2023/12/Gulab-Jamun-Recipe-Piping-Pot-Curry-500x500.jpg" },
  { id: 8, name: "Hyderabadi Biryani", desc: "Dum-cooked mutton biryani with saffron, mint & fried onions", price: 480, rating: 4.8, time: "35 min", badge: "Popular", badgeType: "", category: "biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80" },
  { id: 9, name: "Veg Samosa", desc: "Crispy pastry stuffed with spiced potatoes and green peas", price: 80, rating: 4.6, time: "10 min", badge: "Veg", badgeType: "veg", category: "starters", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80" },
  { id: 10, name: "Rasmalai", desc: "Soft cottage cheese discs soaked in saffron-scented milk", price: 160, rating: 4.8, time: "10 min", badge: "Veg", badgeType: "veg", category: "desserts", img: "https://palatesdesire.com/wp-content/uploads/2022/09/Rasmalai-recipe@palates-desire.jpg" },
  { id: 11, name: "Malai Kofta", desc: "Creamy paneer dumplings in rich cashew-tomato gravy", price: 300, rating: 4.7, time: "22 min", badge: "Veg", badgeType: "veg", category: "mains", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80" },
  { id: 12, name: "Fish Moilee", desc: "Kerala-style fish curry in light coconut milk with green chillies", price: 440, rating: 4.8, time: "28 min", badge: "Spicy 🔥", badgeType: "spicy", category: "mains", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80" },
];

let cart = [];
let currentFilter = 'all';

function renderMenu(filter = 'all') {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const items = filter === 'all' ? menuData : menuData.filter(d => d.category === filter);
  grid.innerHTML = items.map(d => `
    <div class="dish-card" data-id="${d.id}">
      <div class="dish-img-wrap">
        <img class="dish-img" src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80'">
        ${d.badge ? `<span class="dish-badge ${d.badgeType}">${d.badge}</span>` : ''}
        <button class="dish-fav" onclick="toggleFav(this)" title="Favourite">🤍</button>
      </div>
      <div class="dish-info">
        <div class="dish-name">${d.name}</div>
        <div class="dish-desc">${d.desc}</div>
        <div class="dish-meta">
          <div class="dish-rating"><span class="star">★</span> ${d.rating}</div>
          <div class="dish-time">⏱ ${d.time}</div>
        </div>
        <div class="dish-bottom">
          <span class="dish-price">₹${d.price}</span>
          <button class="add-btn" onclick="addToCart(${d.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(category);
}

function toggleFav(btn) {
  btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
}

function addToCart(id) {
  const item = menuData.find(d => d.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCartUI();
  showToast(`🛒 ${item.name} added to cart!`);
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);
  // badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  const navCartCount = document.getElementById('nav-cart-count');
  if (navCartCount) {
    navCartCount.textContent = count > 0 ? `(${count})` : '';
  }
  // order section
  const orderCartLabel = document.getElementById('order-cart-label');
  if (orderCartLabel) orderCartLabel.textContent = `🛒 ${count} item${count !== 1 ? 's' : ''} in cart`;
  const orderCartTotal = document.getElementById('order-cart-total');
  if (orderCartTotal) orderCartTotal.textContent = `₹${total}`;
}

function openCart() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');
  if (!container || !footer) return;
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><span class="cart-icon">🛒</span><p>Your cart is empty.<br>Browse the menu and add some delicious items!</p></div>`;
    footer.style.display = 'none';
  } else {
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    container.innerHTML = cart.map(c => `
      <div class="cart-item">
        <img src="${c.img}" alt="${c.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&q=80'">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">₹${c.price} each</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${c.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})">🗑</button>
      </div>
    `).join('');
    document.getElementById('modal-total-price').textContent = `₹${total}`;
    footer.style.display = 'block';
  }
  document.getElementById('cart-modal').classList.add('open');
}

function closeCart() {
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('open');
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartUI(); openCart();
}

function removeFromCart(id) { cart = cart.filter(c => c.id !== id); updateCartUI(); openCart(); }

function scrollToOrder() {
  closeCart();
  const orderEl = document.getElementById('order');
  if (orderEl) orderEl.scrollIntoView({ behavior: 'smooth' });
}

function submitOrder() {
  const fname = document.getElementById('fname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!fname) { showToast('⚠️ First name is required!'); return; }
  if (fname.length < 2) { showToast('⚠️ Name is too short!'); return; }

  const phoneRegex = /^[0-9+\s-]{10,15}$/;
  if (!phoneRegex.test(phone)) { showToast('⚠️ Please enter a valid phone number (at least 10 digits).'); return; }

  if (!address || address.length < 5) { showToast('⚠️ Please enter a complete delivery address.'); return; }

  if (cart.length === 0) { showToast('⚠️ Your cart is empty!'); return; }

  const orderTotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
  const date = new Date().toLocaleString();

  const invoiceHTML = `
    <div class="invoice-box">
      <div class="invoice-header">
        <h4>Saffron & Ember</h4>
        <p>Order #${orderId}</p>
        <p>${date}</p>
      </div>
      <div class="invoice-items">
        ${cart.map(c => `
          <div class="invoice-item">
            <span>${c.qty}x ${c.name}</span>
            <span>₹${c.price * c.qty}</span>
          </div>
        `).join('')}
      </div>
      <div class="invoice-total">
        <span>Total Amount Paid</span>
        <span>₹${orderTotal}</span>
      </div>
    </div>
  `;

  const successContainer = document.getElementById('form-success');
  successContainer.innerHTML = `
    <div class="success-icon">🎉</div>
    <h4>Order Completed Successfully!</h4>
    <p>Your food is being prepared. Estimated delivery: <strong>25–30 minutes.</strong></p>
    ${invoiceHTML}
    <button class="cf-submit" style="margin-top:2rem;" onclick="window.location.reload()">Place Another Order</button>
  `;

  document.getElementById('order-form-content').style.display = 'none';
  successContainer.style.display = 'block';
  cart = []; updateCartUI();
  showToast('🎉 Order placed! Thank you!');
}

function submitContact() {
  const name = document.getElementById('cf-name').value.trim();
  const phone = document.getElementById('cf-phone').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-message').value.trim();

  if (!name || name.length < 2) { showToast('⚠️ Please enter a valid name.'); return; }

  const phoneRegex = /^[0-9+\s-]{10,15}$/;
  if (phone && !phoneRegex.test(phone)) { showToast('⚠️ Please enter a valid phone number.'); return; }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) { showToast('⚠️ Please enter a valid email address.'); return; }

  if (!msg || msg.length < 10) { showToast('⚠️ Message is too short (minimum 10 characters).'); return; }

  showToast('✅ Message sent! We\'ll get back to you soon.');
  ['cf-name', 'cf-phone', 'cf-email', 'cf-subject', 'cf-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

// Scroll effects
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Close modal on overlay click
const cartModal = document.getElementById('cart-modal');
if (cartModal) {
  cartModal.addEventListener('click', function (e) {
    if (e.target === this) closeCart();
  });
}

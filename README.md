# Saffron & Ember — Fine Dining Web Application

Welcome to the **Saffron & Ember** project! This is a modern, fully responsive web application for a premium Indian restaurant. It features an interactive menu with filtering, a dynamic shopping cart, a generated order invoice system, user authentication, and a React-powered testimonials carousel.

## 🚀 Project Overview
Our team built a professional, high-end food delivery website. The goal was to combine a seamless, premium user experience (smooth animations, intuitive navigation, dark/light mode) with robust technical implementation (React integration, strict form validations, dynamic DOM manipulation, and LocalStorage data persistence).

## 📂 Repository Structure
```
UID Project/
├── index.html            # Main single-page application (Home, About, Menu, Gallery, React Components)
├── login.html            # Authentication page (Login / Sign Up)
├── policies.html         # Legal pages (Privacy Policy, Refund Policy, ToS, FSSAI)
├── style.css             # Global stylesheet (Themes, Layouts, Animations)
├── script.js             # Core Vanilla JavaScript (Cart, Validations, Invoice generation)
└── README.md             # Project documentation & team breakdown (You are here)
```

## ✨ Key Features
1. **Dynamic Shopping Cart & Invoice:** Users can add items, adjust quantities, and place orders. A dynamic bill/invoice is generated upon checkout.
2. **Dark / Light Mode:** A fully responsive theme toggle that remembers user preference via LocalStorage.
3. **Authentication System:** Simulated secure sign-up and login utilizing LocalStorage.
4. **React Testimonials Carousel:** A dynamically rendered review slider. Logged-in users can write and submit live reviews with a 5-star rating system.
5. **Strict Validations:** Forms (Order, Contact, Login) are protected by Regex to ensure valid emails, secure passwords, and correct phone numbers.

---

## 👥 Team Contribution Breakdown (Group of 4)

This project was developed collaboratively. To ensure equal distribution of work and to showcase diverse web development skills, the project was divided into four distinct roles:

### Member 1: UI/UX & Design Lead
**Focus:** Visual Aesthetics, CSS Architecture, and Theming
*   **Color Theory & Typography:** Designed the premium "Saffron & Ember" color palette and implemented the *Playfair Display* and *DM Sans* typography system.
*   **Theme Management:** Developed the CSS variables and structural logic for the seamless Dark/Light mode toggle.
*   **Animations:** Created smooth scroll-reveal animations, hover micro-interactions, and the toast notification animations.
*   **Responsiveness:** Wrote the media queries to ensure the site is fully responsive on mobile, tablet, and desktop devices.

### Member 2: Frontend Layouts & HTML Architecture
**Focus:** HTML5 Structuring, Content Management, and SEO
*   **Core Structure:** Built the semantic HTML backbone for `index.html`, `login.html`, and `policies.html`.
*   **Gallery & Media:** Curated and integrated high-quality, authentic Unsplash imagery for the menu items, hero sections, and the visual feast gallery.
*   **Navigation & Footer:** Developed the sticky navigation bar, mobile hamburger menu, and the comprehensive footer with functional filter links and social icons.
*   **Accessibility:** Ensured all images have proper `alt` tags and buttons have descriptive labels for screen readers.

### Member 3: Core JavaScript & State Management
**Focus:** Vanilla JS Logic, DOM Manipulation, and Data Handling
*   **Shopping Cart Logic:** Built the algorithms to add items, calculate totals, adjust quantities, and render the cart UI dynamically.
*   **Dynamic Invoice System:** Programmed the order submission workflow that clears the cart and generates a customized, printable HTML invoice with order IDs and timestamps.
*   **Menu Filtering:** Implemented the logic to filter menu items by category (Starters, Mains, Biryani, Desserts) without reloading the page.
*   **Form Validations:** Wrote the Regular Expressions (Regex) to validate user input on the checkout and contact forms (phone numbers, emails, name lengths).

### Member 4: Advanced Components & React Integration
**Focus:** React.js implementation, Authentication, and User Data
*   **React Testimonials Carousel:** Designed and implemented the complex interactive review carousel using React hooks (`useState`, `useEffect`) directly injected into the HTML.
*   **Authentication Flow:** Created the sign-up and login logic in `login.html`, securely storing user sessions in the browser's LocalStorage.
*   **Interactive Review Submission:** Built the React form that allows authenticated users to select a star rating and post a review that updates the carousel in real-time.
*   **Integration:** Ensured smooth communication between the React components and the Vanilla JS environment (e.g., sharing the `currentUser` state and triggering global toast notifications).

---
*Developed for the UID Web Development Final Project Evaluation.*

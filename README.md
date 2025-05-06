A full-featured e-commerce web application built with React, offering distinct dashboards for customers and merchants.

🚀 Features
🛒 Customer Interface
Storefront Browsing: Explore a variety of products across multiple stores.

Product Details: View detailed information about each product.

Shopping Cart: Add, remove, and manage products in the cart.

Checkout Process: Seamless checkout experience with order confirmation.

Order History: Track past orders and view order details.

Invoice Access: Download invoices for completed orders.

Review Submission: Provide feedback on purchased products.

🧑‍💼 Merchant Interface
Dashboard Overview: Monitor store performance and key metrics.

Product Management: Add, edit, and delete products.

Order Management: View and process customer orders.

Store Settings: Customize store information and preferences.

🛠️ Tech Stack
Frontend: React, React Router, Tailwind CSS

State Management: React Context API

Authentication: Custom AuthContext for role-based access

Routing: Protected routes to secure merchant and customer areas
Reddit
Syncfusion

📁 Project Structure
pgsql
Copy
Edit
├── src
│   ├── components
│   │   ├── merchant
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context
│   │   └── AuthContext.jsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── SignInPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── customer
│   │   │   ├── CustomerLayout.jsx
│   │   │   ├── CustomerDashboard.jsx
│   │   │   ├── OrderHistoryPage.jsx
│   │   │   ├── OrderDetailPage.jsx
│   │   │   ├── ReviewSubmission.jsx
│   │   │   ├── InvoiceAccessPage.jsx
│   │   │   └── InvoiceDownload.jsx
│   │   ├── merchant
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── Settings.jsx
│   │   ├── LandingPage.jsx
│   │   ├── StoreListingPage.jsx
│   │   ├── StorefrontPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   └── OrderConfirmationPage.jsx
│   └── App.jsx
├── public
│   └── index.html
├── .gitignore
├── package.json
└── tailwind.config.js
📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/react-ecommerce-platform.git
cd react-ecommerce-platform
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The application will run at http://localhost:3000.

🔐 Authentication & Authorization
AuthContext: Manages user authentication state across the application.

ProtectedRoute: Restricts access to routes based on user roles (e.g., merchant, customer).

import './App.css'
import {Route, Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import ProductDetailPage from './pages/ProductDetailPage'
import StorefrontPage from './pages/StoreFront'
import StoreListingPage from './pages/StoreListingPage'
import SignInPage from './pages/auth/SignInPage'
import SignUpPage from './pages/auth/SignUpPage'

import ProtectedRoute from "./components/ProtectedRoute"
import CustomerDashboard from './pages/customer/CustomerDashboard'
import CustomerLayout from './pages/customer/CustomerLayout'
import InvoiceDownload from './pages/customer/InvoiceDownload'
import ReviewSubmission from './pages/customer/ReviewSubmission'
import OrderDetailPage from './pages/customer/OrderDetailPage'
import OrderHistoryPage from './pages/customer/OrderHistoryPage'
import InvoiceAccessPage from './pages/customer/InvoiceAccessPage'
import Dashboard from './pages/merchant/Dashboard'
function App() {
  
  return (
    <div>
       <Routes>
           //visitor/public routes
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/stores" element={<StoreListingPage />} />
            <Route path="/stores/:storeId" element={<StorefrontPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderConfirmationPage />} />
     
            <Route path="/customer" element={<CustomerLayout />}>
                <Route index  element={<CustomerDashboard />} />
                <Route path="dashboard" element={<CustomerDashboard />} />
                <Route path="orders" element={<OrderHistoryPage />} />
                <Route path="orders/:id" element={<OrderDetailPage />} />
                <Route path="reviews" element={<ReviewSubmission />} />
                <Route path="/customer/invoices" element={<InvoiceAccessPage />} />
                <Route path="invoice/:id" element={<InvoiceDownload />} />
          </Route>

          {/* merchant */}
          <Route path="/merchant/dashboard" element={
          <ProtectedRoute  allowedRoles={["merchant"]}>
            <Dashboard />
          </ProtectedRoute>
        } />
       </Routes>
    </div>
  )
}


export default App

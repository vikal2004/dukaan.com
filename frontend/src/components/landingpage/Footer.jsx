const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 py-10 px-6 lg:px-24 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-2">Dukaan</h2>
            <p className="text-sm text-gray-600">
              Discover and support local stores in your area. Shop direct, shop smart.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-teal-600">Home</a></li>
              <li><a href="/stores" className="hover:text-teal-600">Stores</a></li>
              <li><a href="/products" className="hover:text-teal-600">Products</a></li>
              <li><a href="/contact" className="hover:text-teal-600">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-600">FAQs</a></li>
              <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-600">Terms & Conditions</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm mb-3">Subscribe to get updates on new stores and deals.</p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md border border-gray-300 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dukaan. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
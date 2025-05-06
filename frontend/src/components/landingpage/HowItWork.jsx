const HowItWorks = () => {
    const steps = [
      {
        id: 1,
        title: "Browse Local Stores",
        description: "Discover a variety of trusted local stores offering quality products near you.",
        icon: "🛍️",
      },
      {
        id: 2,
        title: "Add to Cart",
        description: "Add products from multiple stores to your cart with just a click.",
        icon: "🛒",
      },
      {
        id: 3,
        title: "Secure Checkout",
        description: "Enter your shipping details and pay securely through our trusted gateway.",
        icon: "💳",
      },
      {
        id: 4,
        title: "Get Fast Delivery",
        description: "Your order will be processed and delivered to your doorstep promptly.",
        icon: "🚚",
      },
    ];
  
    return (
      <section className="bg-white py-20 px-6 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          📦 How It Works
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 border border-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  
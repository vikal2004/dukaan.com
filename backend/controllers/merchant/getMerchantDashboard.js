import {storeModel} from "../../models/store.model.js"
import {orderModel} from "../../models/order.model.js"
import {productModel} from "../../models/product.model.js"

export const getMerchantDashboard = async (req, res) => {
  console.log("hi grom merchant dashboard")
  try {
    const merchantId = req.user.id;
     console.log(merchantId)
    // Find the store for this merchant
    const store = await storeModel.findOne({ merchant: merchantId });
    console.log(store);
    if (!store) {
      return res.status(404).json({ message: "Store not found for this merchant" });
    }

    // Get all products of this merchant's store
    const products = await productModel.find({ store: store._id });
    const productIds = products.map(product => product._id);

    // Fetch all orders that include the merchant's products
    const allOrders = await orderModel.find({ "items.product": { $in: productIds } });

    // Total orders containing merchant's products
    const totalOrders = allOrders.length;

    // Total revenue only from merchant's products in those orders
    let totalRevenue = 0;
    allOrders.forEach(order => {
      order.items.forEach(item => {
        if (productIds.includes(item.product.toString())) {
          totalRevenue += item.priceAtPurchase * item.quantity;
        }
      });
    });

    // Unique customers
    const customerIds = [...new Set(allOrders.map(order => order.buyer.toString()))];
    const totalCustomers = customerIds.length;

    // Get the most recent 5 orders
    const recentOrders = allOrders
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    res.status(200).json({
      totalProducts: products.length,
      totalOrders,
      totalRevenue,
      totalCustomers,
      recentOrders
    });

  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

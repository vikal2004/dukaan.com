import { cartModel } from "../models/cart.model.js";
import { orderModel } from "../models/order.model.js";
import { productModel } from "../models/product.model.js";

export const checkoutCart = async (req, res) => {
  try {
    const userId = req.user._id; // or req.body.userId if you’re not using middleware

    // 1. Fetch user's cart
    const cart = await cartModel.findOne({ user: userId }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalAmount = 0;
    const orderItems = [];

    // 2. Validate products and prepare order items
    for (let item of cart.items) {
      const product = item.product;

      if (!product || product.stock < item.quantity) {
        return res.status(400).json({
          message: `Product ${product?.title || "unknown"} is out of stock or invalid`,
        });
      }

      totalAmount += product.price * item.quantity;

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        priceAtPurchase: product.price,
      });

      // Reduce stock
      product.stock -= item.quantity;
      await product.save();
    }

    // 3. Create the order
    const newOrder = await orderModel.create({
      buyer: userId,
      items: orderItems,
      totalAmount,
      shippingAddress: req.body.shippingAddress, // comes from frontend
      status: "pending",
      paymentStatus: "unpaid",
    });

    // 4. Clear the cart
    cart.items = [];
    await cart.save();

    // 5. Respond with success
    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ message: "Something went wrong during checkout" });
  }
};

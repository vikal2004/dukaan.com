import express from "express"
import { getOrders, updateOrder, getOrderDetails } from "../../controllers/merchant/orderController.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";
import { roleCheck } from "../../middleware/roleCheck.js";
export const merchantOrderRouter=express.Router();

//list orders or merchant products
merchantOrderRouter.get("/",isAuthenticated,roleCheck("merchant") ,getOrders);

//detail view of one order
merchantOrderRouter.get("/:id",isAuthenticated,roleCheck("merchant"), getOrderDetails);

merchantOrderRouter.put("/:id/status",isAuthenticated,roleCheck("merchant"), updateOrder)
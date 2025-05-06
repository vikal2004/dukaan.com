import express from "express";
import {isAuthenticated} from "../../middleware/authMiddleware.js"
import {roleCheck} from "../../middleware/roleCheck.js"
import { getMerchantDashboard } from "../../controllers/merchant/getMerchantDashboard.js";
export const merchantDashboardRouter=express.Router();

merchantDashboardRouter.get("/",isAuthenticated, roleCheck("merchant"),getMerchantDashboard)
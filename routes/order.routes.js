import { Router } from "express";
import { createOrder, getAllOrders, updateOrder } from "../controllers/order.controller.js";

export const orderRoutes = Router();

// createOrder - (placed by sales guy)
orderRoutes.post('/', createOrder);

// viewOrder - (with the vendor details assigned by the system)
orderRoutes.get('/', getAllOrders);

// commitOrder - finalize the order and move it for fulfillment
orderRoutes.patch('/:id', updateOrder);
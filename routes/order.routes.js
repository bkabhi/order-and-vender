import { Router } from "express";
import { createOrder, getAllOrders, updateOrder } from "../controllers/order.controller.js";

export const orderRoutes = Router();

orderRoutes.get('/', getAllOrders);
orderRoutes.post('/', createOrder);
orderRoutes.patch('/:id', updateOrder);
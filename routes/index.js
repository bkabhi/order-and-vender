import { Router } from "express";
import { orderRoutes } from "./order.routes.js";
import { venderRoutes } from "./vender.routes.js";

export const routes = Router();

routes.use('/vender', venderRoutes);
routes.use('/order', orderRoutes);
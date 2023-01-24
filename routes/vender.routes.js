import { Router } from "express";
import { createVender, getAllVender } from "../controllers/vender.controller.js";

export const venderRoutes = Router();

venderRoutes.get('/', getAllVender);
venderRoutes.post('/', createVender);
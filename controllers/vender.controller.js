import VenderModel from "../models/vender.model.js";

// Create Vender 
export const createVender = async (req, res) => {
    try {
        const vender = await VenderModel.create(req.body);
        
        res.status(200).json({ success: true, vender});
    } catch (error) {
        res.status(500).send({ success: false, error: error.message, message: "error" })
    }
}

// get All Venders 
export const getAllVender = async (req, res) => {
    try {
        const venders = await VenderModel.find();
        res.status(200).json({ success: true, venders});
    } catch (error) {
        res.status(500).send({ success: false, error: error.message, message: "error" })
    }
}
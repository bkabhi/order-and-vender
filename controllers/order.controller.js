import OrderModel from "../models/order.model.js";
import VenderModel from "../models/vender.model.js";

// create order
export const createOrder = async (req, res) => {
    try {
        let products = req.body.products;
        for (var product of products) {
            const findvendor = await VenderModel.findOne({ productName: product.productName }).sort({ lowestPrice: 1 });
            product.venderId = findvendor._id;
            product.lowestPrice = findvendor.price;
        }

        const order = await OrderModel.create({ ...req.body});

        res.status(200).send({ success: true, data: order });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
}

// get All orders
export const getAllOrders = async (req, res) => {
    try {
        const order = await OrderModel.find();
        res.status(200).send({ success: true, data: order });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
}


// update order
export const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await OrderModel.findByIdAndUpdate({ _id: orderId}, {status: "completed"}, {new: true});

        res.status(200).send({ success: true, data: order });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
}
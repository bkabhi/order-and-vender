import mongoose from "mongoose";

// customer info
// products list with quantity
// time to deliver

const orderSchema = new mongoose.Schema(
    {
        customerName: { type: String, required: true },
        customerMobileNo: { type: Number, required: true },
        customerAddress: { type: String, required: true },
        products: [
            {
                productName: { type: String, required: true },
                quantity: { type: Number, required: true },
                venderId: { type: mongoose.Schema.Types.ObjectId, ref: 'venders' },
                lowestPrice: { type: Number, required: true },
            }
        ],
        timeToDeliver: { type: Date, required: true },
        status: { type: String, required: true, default: 'Pending'}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const OrderModel = mongoose.model('orders', orderSchema);

export default OrderModel;
import mongoose from "mongoose";

const venderSchema = new mongoose.Schema(
    {
        venderName: { type: String, required: true },
        productName: { type: String, required: true },
        price: { type: Number, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const VenderModel = mongoose.model('venders', venderSchema);

export default VenderModel;
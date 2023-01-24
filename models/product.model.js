import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lowestPrice: { type: Number, required: true},
        venderId: { type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ProductModel = mongoose.model('products', productSchema);

export default ProductModel;
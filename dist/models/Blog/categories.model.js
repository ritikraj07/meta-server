import { Schema, model } from "mongoose";
const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
// Update the updated_at field before saving
CategorySchema.pre("save", function (next) {
    this.updated_at = new Date();
    next();
});
const Category = model("Category", CategorySchema);
export default Category;

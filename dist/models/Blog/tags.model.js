import { Schema, model } from "mongoose";
const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
// Update the updated_at field before saving
TagSchema.pre("save", function (next) {
    this.updated_at = new Date();
    next();
});
const Tag = model("Tag", TagSchema);
export default Tag;

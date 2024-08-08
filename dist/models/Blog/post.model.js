import { Schema, model, Types } from "mongoose";
const PostSchema = new Schema({
    user_id: { type: Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    featured_image: { type: String },
    status: { type: String, enum: ["published", "draft"], default: "draft" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
// Update the updated_at field before saving
PostSchema.pre("save", function (next) {
    this.updated_at = new Date();
    next();
});
const Post = model("Post", PostSchema);
export default Post;

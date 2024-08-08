import { Schema, model, Types } from "mongoose";
const PostCategorySchema = new Schema({
    post_id: { type: Types.ObjectId, ref: "Post", required: true },
    category_id: { type: Types.ObjectId, ref: "Category", required: true },
});
const PostCategory = model("PostCategory", PostCategorySchema);
export default PostCategory;

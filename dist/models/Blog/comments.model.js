import { Schema, model, Types } from "mongoose";
const CommentSchema = new Schema({
    post_id: { type: Types.ObjectId, ref: "Post", required: true },
    user_id: { type: Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
// Update the updated_at field before saving
CommentSchema.pre("save", function (next) {
    this.updated_at = new Date();
    next();
});
const Comment = model("Comment", CommentSchema);
export default Comment;

import { Schema, model, Types } from "mongoose";
const PostTagSchema = new Schema({
    post_id: { type: Types.ObjectId, ref: "Post", required: true },
    tag_id: { type: Types.ObjectId, ref: "Tag", required: true },
});
const PostTag = model("PostTag", PostTagSchema);
export default PostTag;

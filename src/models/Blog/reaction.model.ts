import { Schema, model, Types } from "mongoose";

const ReactionSchema = new Schema({
  post_id: { type: Types.ObjectId, ref: "Post", required: true },
  user_id: { type: Types.ObjectId, ref: "User", required: true },
  type: {
    type: String,
    enum: ["like", "heart", "laugh"],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});

const Reaction = model("Reaction", ReactionSchema);
export default Reaction;

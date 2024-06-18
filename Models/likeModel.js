import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);
export default Like;

import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },

  user: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

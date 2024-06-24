import Like from "../Models/likeModel.js";
import Post from "../Models/postModel.js";

export const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = new Like({ post, user });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete the like from the like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post collection

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

      res.json({
        message:"Post unliked successfully",
        post:updatedPost,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

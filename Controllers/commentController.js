import Comment from "./../Models/commentModel.js";
import Post from "./../Models/postModel.js";

//bussiness logic
export const createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    //created new comment
    const comment = new Comment({
      post,
      user,
      body,
    });

    //save the comment
    const savedcomment = await comment.save();

    //find the post and update the comments array
    const postToupdate = await Post.findByIdAndUpdate(
      post,
      {
        $push: {
          comments: savedcomment._id,
        },
      },
      { new: true }
    ).populate("comments");

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

import Comment from "../Models/commentModel.js";
import Post from "../Models/postModel.js";

const createComment = async (req, res) => {
  try {
    //get the post from the req
    const { post, body, user } = req.body;

    //create the comment
    const comment = new Comment({
      post,
      body,
      user,
    });
       //saved the comment here
    const savedComment =await comment.save();

    //comment to find and update with the new comment 
    const postToUpdate=await Post.findByIdAndUpdate(post,{
      $push:{comments:savedComment._id},
    },{new:true}).populate('comments').exec();

    //send the response
    res.status(200).json({
      success:true,
      post:postToUpdate,
    }

    )
  
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default createComment;

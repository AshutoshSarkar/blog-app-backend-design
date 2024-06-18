import Post from "../Models/postModel.js";

//bussiness logic
export const createPost = async (req, res) => {
  try {
    const { title, body ,user} = req.body;

    //created new post
    const newPost = new Post({
      title,
      body,
      user,
     
    });

    //save the post
    const savedPost = await newPost.save();

    res.status(200).json({
      success: true,
      data: savedPost,
      message: "Post created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
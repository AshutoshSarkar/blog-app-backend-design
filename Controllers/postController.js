import Post from "../Models/postModel.js"

export const createPost=async (req,res)=>{
try{
  const {title,body}=req.body;
  const post= await Post.create({title,body});

  const postinpost=post;
  res.status(201).json({
    status:"success",
    data:postinpost,
    message:"post created Successfully"

  })
}
catch(error){
  res.status(400).json({
    status:"fail",
    message:error.message
  })
}
}
//we do testing for this after making the like controller to complete the whole code.
export const getPosts=async (req,res)=>{
  try{
    const posts=await Post.find().populate('comments').exec();
    res.status(200).json({
      status:"success",
      data:posts
    })
  }
  catch(error){
    res.status(400).json({
      status:"fail",
      message:error.message
    })
  }
}


const Blog = require("../models/BlogModel");

const addLikeController = async (req, res) => {
  const { id } = req.body;

  const curBlog = await Blog.find({ _id: id });
  // console.log("in like blog", curBlog[0]);
  if (!curBlog) {
    res.status(400).json({
      message: "No blogs found",
    });
  } else {
    await Blog.findOneAndUpdate(
      {
        _id: id,
      },
      {
        likes: curBlog[0].likes + 1,
      }
    );

    res.status(200).json({
      message: "Successfully likes the blog",
    });
  }
};
module.exports = addLikeController;

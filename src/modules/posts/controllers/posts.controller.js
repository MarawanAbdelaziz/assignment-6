//  creating, reading, updating, and deleting
// Ensure that users can only edit or delete (soft delete) their posts
// Get a specific post with the author

import postModel from "../../../../DB/models/posts.model.js";
import userModel from "../../../../DB/models/users.model.js";

export const addPost = async (req, res, next) => {
  const post = await postModel.create(req.body);

  res.json({ meesage: post });
};

export const getPosts = async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await userModel.findOne({
    where: { email },
  });

  if (emailExist) {
    const posts = await postModel.findAll({
      where: { userId: emailExist.id, deleted: 0 },
    });

    if (posts) {
      res.json({ meesage: posts });
    } else {
      res.states(404).json({ meesage: "This user does not have any posts" });
    }
  } else {
    res.states(404).json({ meesage: "This email does not exist" });
  }
};

export const updatePost = (req, res, next) => {
  const { id, title, content } = req.body;

  postModel.update(
    { title: title, content: content },
    {
      where: {
        id,
      },
    }
  );

  res.json({ meesage: "done" });
};

export const deletePost = (req, res, next) => {
  const { id } = req.body;

  postModel.update(
    { deleted: true },
    {
      where: {
        id,
      },
    }
  );

  res.json({ meesage: "Post deleted" });
};

export const getSpecificPost = async (req, res, next) => {
  const { id } = req.body;
  const postExist = await postModel.findOne({
    where: { id, deleted: 0 },
  });

  if (postExist) {
    const user = await userModel.findOne({
      where: { id: postExist.userId },
    });

    res.json({ user: user, post: postExist });
  } else {
    res.states(404).json({ meesage: "This post does not exist" });
  }
};

//  creating, reading, updating, and deleting

import commentModel from "../../../../DB/models/comments.model.js";
import postModel from "../../../../DB/models/posts.model.js";

export const addComment = async (req, res, next) => {
  const comment = await commentModel.create(req.body);

  res.json({ meesage: comment });
};

export const getComments = async (req, res, next) => {
  const { id } = req.body;
  const postExist = await postModel.findOne({
    where: { id },
  });

  if (postExist) {
    const comments = await commentModel.findAll({
      where: { postId: postExist.id },
    });

    if (comments) {
      res.json({ meesage: comments });
    } else {
      res.states(404).json({ meesage: "This post does not have any comments" });
    }
  } else {
    res.states(404).json({ meesage: "This post does not exist" });
  }
};

export const updateComment = (req, res, next) => {
  const { id, content } = req.body;

  commentModel.update(
    { content },
    {
      where: {
        id,
      },
    }
  );

  res.json({ meesage: "done" });
};

export const deleteComment = (req, res, next) => {
  const { id } = req.body;

  commentModel.destroy({
    where: { id },
  });

  res.json({ meesage: "Post deleted" });
};

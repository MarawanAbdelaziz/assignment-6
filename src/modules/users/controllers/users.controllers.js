// registration, login, and logout. (email must be unique)
// Use bcrypt.js to securely hash and store user passwords
// - Special endpoint to get a specific user with a specific post and post’s comments

import commentModel from "../../../../DB/models/comments.model.js";
import postModel from "../../../../DB/models/posts.model.js";
import userModel from "../../../../DB/models/users.model.js";
import bcrypt from "bcryptjs";

export const registration = async (req, res, next) => {
  const { username, email, password } = req.body;
  const emailExist = await userModel.findOne({
    where: { email },
  });

  if (!emailExist) {
    const hashPassword = bcrypt.hashSync(password, 8);
    userModel.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    res.status(201).json({ message: "done" });
  } else {
    res.status(409).json({ message: "email already exist" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const emailExist = await userModel.findOne({
    where: { email },
  });

  if (emailExist) {
    const match = bcrypt.compareSync(password, emailExist.password);
    if (match) {
      res.json({ user: emailExist });
    } else {
      res.status(404).json({ message: "Incorrect email or password" });
    }
  } else {
    res.status(404).json({ message: "Incorrect email or password" });
  }
};

export const logout = async (req, res, next) => {
  const { email } = req.body;

  const emailExist = await userModel.findOne({
    where: { email },
  });

  if (emailExist) {
    res.json({ message: "success logout" });
  } else {
    res.status(404).json({ message: "this user already does not exist" });
  }
};

export const specificUserAndPost = async (req, res, next) => {
  const { email, id } = req.body;
  const emailExist = await userModel.findOne({
    where: { email },
  });

  if (emailExist) {
    const postExist = await postModel.findOne({
      where: { id, deleted: 0 },
    });
    if (postExist) {
      const comments = await commentModel.findAll({
        where: { postId: postExist.id },
      });

      res.json({ user: emailExist, post: postExist, comments: comments });
    } else {
      res.status(404).json({ message: "this post dose not exist" });
    }
  } else {
    res.status(404).json({ message: "this email dose not exist" });
  }
};

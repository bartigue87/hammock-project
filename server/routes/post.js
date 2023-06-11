const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

//Get All
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post
router.post("/", async (req, res) => {
  const post = new Post({});
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          state: req.body.state,
          city: req.body.city,
          imgUrl: [req.body.imgUrl],
          description: req.body.description,
          coordinates: req.body.coordinates,
          creator: req.userData.userId,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ messgae: err });
  }
});

//Delete
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: req.params.parkId });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

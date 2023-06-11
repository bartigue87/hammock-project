const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  imgUrl: [{ type: String, required: true }],
  description: { type: String, required: true },
  coordinates: { type: String },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", postSchema);

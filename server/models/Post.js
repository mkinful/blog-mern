const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
      title: {
          type: String,
          required: true,
          unique: true
      },
      desc: {
          type: String,
          required: true,
      },
      picture: {
          type: String,
          required: false
      },
      username: {
          type: String,
          required: true,
      },
      genres: {
          type: Array,
          required: false
      },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
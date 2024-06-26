// Import Section
import mongoose from "mongoose";

// Schema Section
const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    videos: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    quote: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    repost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose Model
const Post = mongoose.model("Post", postSchema);

// Export Section
export { Post };

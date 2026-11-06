const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  excerpt: { type: String },
  content: { type: String, required: true },
  author: { type: String },
  tags: [{ type: String }],
  coverImage: { type: String },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  publishedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', BlogPostSchema);
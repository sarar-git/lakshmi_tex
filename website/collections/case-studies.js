const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  schoolName: { type: String },
  schoolCity: { type: String },
  schoolBoard: {
    type: String,
    enum: ['CBSE', 'ICSE', 'State Board', 'IB', 'Cambridge'],
  },
  challenge: { type: String },
  solution: { type: String },
  result: { type: String },
  timeline: { type: String },
  quote: { type: String },
  galleryImages: [{ type: String }], // URLs
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  publishedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('CaseStudy', CaseStudySchema);
const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: {
    type: String,
    enum: ['ordering', 'customisation', 'fabric-and-safety', 'delivery', 'reorders', 'payments', 'after-sales'],
  },
  order: { type: Number, default: 0 }, // for accordion ordering
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
}, { timestamps: true });

module.exports = mongoose.model('FAQ', FAQSchema);
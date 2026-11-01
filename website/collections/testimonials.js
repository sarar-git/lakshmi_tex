const { mongoose } = require('../payload/config');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String },
  school: { type: String },
  city: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  content: { type: String, required: true },
  image: { type: String }, // photo URL
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
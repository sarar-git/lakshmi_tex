const { mongoose } = require('../payload/config');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  category: {
    type: String,
    enum: [
      'T‑shirt',
      'Shorts',
      'Track Pants',
      'Sports Gown',
      'Complete Kit',
    ],
  },
  fabricSpecification: { type: String },
  sizes: [{ type: String }],
  colours: [{ hex: String, stock: Number }],
  images: [{ type: String }], // URLs to product photos
  gsm: { type: Number },
  moq: { type: Number }, // Minimum Order Quantity
  leadTime: { type: String }, // e.g. "4‑6 weeks"
  seo: {
    title: String,
    metaDescription: String,
    ogImage: String,
    canonical: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
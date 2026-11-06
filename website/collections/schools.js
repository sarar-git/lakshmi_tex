const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  city: { type: String },
  state: { type: String },
  board: {
    type: String,
    enum: ['CBSE', 'ICSE', 'State Board', 'IB', 'Cambridge'],
  },
  studentStrength: { type: Number },
  itemsSupplied: [{ type: String }], // e.g. ['T‑shirt', 'Shorts']
  permissionFlag: { type: Boolean }, // for using logo/photos
  contact: {
    phone: String,
    whatsapp: String,
    email: String,
  },
  address: {
    line1: String,
    line2: String,
    postalCode: String,
    mapLink: String,
  },
  gstNumber: String,
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  createdBy: { type: String }, // email or user ID
}, { timestamps: true });

module.exports = mongoose.model('School', SchoolSchema);
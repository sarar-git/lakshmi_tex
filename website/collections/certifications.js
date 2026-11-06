const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // certificate image URL
  pdfUrl: { type: String }, // downloadable PDF
  issued: { type: Date },
  expiry: { type: Date },
  status: {
    type: String,
    enum: ['active', 'expired', 'pending'],
    default: 'active',
  },
}, { timestamps: true });

module.exports = mongoose.model('Certification', CertificationSchema);
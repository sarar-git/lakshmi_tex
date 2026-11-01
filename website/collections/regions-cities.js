const { mongoose } = require('../payload/config');

const RegionCitySchema = new mongoose.Schema({
  region: {
    type: String,
    enum: ['Tamil Nadu', 'Karnataka', 'Rest of India'],
  },
  city: { type: String },
  clientLogos: [{ type: String }], // URLs
  caseStudies: [{ type: String }], // refs to CaseStudy IDs
  deliveryTimeline: { type: String },
  whatsapp: { type: String },
  phone: { type: String },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, { timestamps: true });

module.exports = mongoose.model('RegionCity', RegionCitySchema);
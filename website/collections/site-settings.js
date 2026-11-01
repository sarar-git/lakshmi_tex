const { mongoose } = require('../payload/config');

const SiteSettingsSchema = new mongoose.Schema({
  siteName: { type: String, default: 'School Sportswear Manufacturer' },
  slogan: { type: String },
  phone: { type: String },
  whatsapp: { type: String },
  email: { type: String },
  address: { type: String },
  gstNumber: { type: String },
  socialLinks: {
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
  },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
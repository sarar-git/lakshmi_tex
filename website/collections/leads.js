const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  formType: {
    type: String,
    enum: ['sample-kit', 'quote', 'contact', 'catalogue-download', 'factory-visit'],
  },
  schoolName: { type: String },
  contactPerson: { type: String },
  designation: { type: String },
  phone: { type: String },
  whatsapp: { type: String },
  email: { type: String },
  studentStrength: { type: Number },
  itemsInterested: [{ type: String }],
  coloursRequested: [{ hex: String }],
  deliveryAddress: { type: String },
  notes: { type: String },
  utmSource: { type: String },
  utmMedium: { type: String },
  utmCampaign: { type: String },
  gclid: { type: String },
  fbclid: { type: String },
  state: { type: String },
  city: { type: String },
  board: {
    type: String,
    enum: ['CBSE', 'ICSE', 'State Board', 'IB', 'Cambridge'],
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'sample-sent', 'quote-sent', 'won', 'lost'],
    default: 'new',
  },
  owner: { type: String }, // salesperson email or ID
  createdAt: { type: Date, default: Date.now },
  convertedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);
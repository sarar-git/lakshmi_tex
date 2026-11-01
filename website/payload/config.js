require('mongoose');

const mongoose = require('mongoose');

// Import all collection models (re‑exported later by Payload)
require('./collections/products');
require('./collections/schools');
require('./collections/case-studies');
require('./collections/testimonials');
require('./collections/faqs');
require('./collections/certifications');
require('./collections/regions-cities');
require('./collections/blog-posts');
require('./collections/leads');
require('./collections/site-settings');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/payload';

async function connect() {
  await mongoose.connect(MONGODB_URI);
  console.log('📦 Payload CMS connected to MongoDB');
  return mongoose.connection;
}

module.exports = { connect, mongoose };